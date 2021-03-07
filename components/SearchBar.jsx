import React from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";

// MUI
import { Paper, InputBase, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import { Search } from "@material-ui/icons";

// Components
import Fuse from "fuse.js";
import Store from "store2";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

/**
 * SearchBar for selecting a city. Populated from /search/index, if not cached
 * @component
 */
function SearchBar() {
  // const historyStack = useHistory();
  const router = useRouter();
  const classes = useStyles();

  // Called when the user picks a suggestion
  const getOptionLabel = (option) => {
    if (typeof option === "string") {
      return option;
    } else {
      if (option.i === "not-found") {
        return option.value;
      } else if (typeof option.p !== "undefined") {
        return `${option.n} (${option.p}) ${option.r}`;
      } else {
        return `${option.n}, ${option.r}`;
      }
    }
  };
  // Render an autosuggestion element
  const renderOption = (option) => {
    if (option.i === "not-found") {
      return `Du kennst "${option.value}"? Wenn ja, bitte hinzufügen`;
    } else if (typeof option.p !== "undefined") {
      return (
        <span>
          <b>{option.n}</b> ({option.p}) &mdash; {option.r}, {option.s},
          {option.c}
        </span>
      );
    } else {
      return (
        <span>
          <b>{option.n}</b> &mdash; {option.r}, {option.s}, {option.c}
        </span>
      );
    }
  };

  const [value, setValue] = React.useState("");
  // Layz load the search engine
  const [fuse, setFuse] = React.useState(() => {
    const store = Store.namespace("search");
    const fromDB = () =>
      axios
        .get("/city_index")
        .then((response) => {
          const cities = response.data.map((item) =>
            // Add the option label to the index,
            // this is necessary for a functional search
            Object.assign(item, { op: getOptionLabel(item) })
          );
          store.set("city_index", cities, true);
          store.set("city_index_timestamp", Date.now(), true);
          return cities;
        })
        .catch((err) => {
          console.error("Fetch city index from db failed due to", err);
          return [];
        });

    let citiesPromis;
    if (
      store.has("city_index") &&
      Date.now() - store.get("city_index_timestamp", 0) <= 60 * 60 * 1000
    ) {
      citiesPromis = Promise.resolve(store.get("city_index"));
    } else {
      citiesPromis = fromDB();
    }
    citiesPromis
      .catch(() => fromDB())
      .then((res) => {
        return setFuse(
          new Fuse(res, {
            keys: [
              // City name
              { name: "n", weight: 0.7 },
              // County
              { name: "c", weight: 0.1 },
              // State
              { name: "s", weight: 0.2 },
              // Region
              { name: "r", weight: 0.2 },
              "op",
              "p",
            ],
            ignoreLocation: true,
            threshold: 0.5,
          })
        );
      })
      .catch(function (error) {
        console.error("Search failed to initialize: ", error);
      });
  });

  const notFound = (text) => ({ value: text, i: "not-found" });
  // Custom filter-options that use fuse instead of the built-in string matching
  const filterOptions = (options, { inputValue }) => {
    if (typeof fuse !== "undefined") {
      const results = fuse.search(inputValue).map((val) => val.item);
      return results.length > 0 || inputValue.trim().length <= 2
        ? results
        : [notFound(inputValue.trim())];
    } else {
      // Fuse is loaded yet, don't show any suggestions just yet
      return [];
    }
  };

  const handleSearch = (e) => {
    // Prevent site reload
    e.preventDefault();
    // Perform a stricter search and pick the best result, if any redirect the user
    fuse.options.threshold = 0.1;
    const s = fuse.search(value.trim());
    fuse.options.threshold = 0.5;
    const target = s[0]?.item;
    if (typeof target !== "undefined") {
      router.push("/" + target.i);
    } else {
      alert("Not found, please add the city manually");
    }
  };

  return (
    <React.Fragment>
      <Autocomplete
        freeSolo
        onSubmit={handleSearch}
        onInputChange={(_e, v) => {
          setValue(v);
        }}
        options={[]}
        getOptionDisabled={(option) => option.i === "not-found"}
        renderOption={renderOption}
        getOptionLabel={getOptionLabel}
        filterOptions={filterOptions}
        selectOnFocus
        renderInput={(params) => (
          <Paper
            ref={params.InputProps.ref}
            className={classes.root}
            component="form"
            elevation={4}
            variant="outlined"
          >
            <InputBase
              {...params.inputProps}
              className={classes.input}
              placeholder="Nach Ort oder Postleitzahl suchen"
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <Search />
            </IconButton>
          </Paper>
        )}
      />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(SearchBar);
