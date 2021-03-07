import React, { useState, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  createCity,
  clearErrors,
  toggleOpenThankYouCityAdd,
  toggleOpenCityAdd,
} from "../../redux/actions/dataActions";

// MUI
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  InputLabel,
  FormControl,
  NativeSelect,
  TextField,
  Grid,
  FormHelperText,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

// Data imports
import countrylist from "../../lists/countrylist";

const styles = (theme) => ({
  ...theme.spreadThis,
  formControl: {},
  selectEmpty: {},
});

function CityAddComponent(props) {
  const { classes } = props;
  const { errors } = props.UI;

  const [country, setCountryValue] = useState("");
  const [state, setStateValue] = useState("");
  const [region, setRegionValue] = useState("");
  const [germancountryname, setGermanCountryName] = useState("");
  const [germanstatename, setGermanStateName] = useState("");
  const [germanregionname, setGermanRegionName] = useState("");
  const [city, setCityValue] = useState("");
  const [areacode, setAreaCodeValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {}, []);

  const handleOpen = () => {
    let countryArray = [];
    countrylist.countries.forEach((element) => {
      countryArray.push(element);
    });
    setCountries(countryArray);
    props.toggleOpenCityAdd(true);
  };

  const handleClose = () => {
    setCountryValue("");
    setStateValue("");
    setRegionValue("");
    setCityValue("");
    setAreaCodeValue("");
    setCountries([]);
    setStates([]);
    setRegions([]);
    props.clearErrors();
    props.toggleOpenCityAdd(false);
    props.toggleOpenThankYouCityAdd(false);
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "country":
        setCountryValue(event.target.value);
        stateSelect(event.target.value);
        countries
          .filter((element) => element.id === event.target.value)
          .map((element) => {
            return setGermanCountryName(`${element.name}`);
          });
        break;
      case "state":
        setStateValue(event.target.value);
        regionSelect(event.target.value);
        states
          .filter((element) => element.id === event.target.value)
          .map((element) => {
            return setGermanStateName(`${element.name}`);
          });
        break;
      case "region":
        setRegionValue(event.target.value);
        regions
          .filter((element) => element.id === event.target.value)
          .map((element) => {
            return setGermanRegionName(`${element.name}`);
          });
        break;
      case "city":
        setCityValue(event.target.value);
        break;
      case "areacode":
        setAreaCodeValue(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCity({
      country,
      state,
      region,
      germancountryname,
      germanstatename,
      germanregionname,
      name: city,
      areacode,
    });
  };

  /* Takes a country as input and returns an array of state objects with the elements id and name
   */
  const stateSelect = (countryId) => {
    let stateArray = [];
    countries.forEach((onecountry) => {
      if (countryId === onecountry.id) {
        onecountry.states.forEach((onestate) => {
          stateArray.push({
            name: onestate.name,
            id: onestate.id,
            regions: onestate.regions,
          });
        });
      }
    });
    setStates(stateArray);
  };

  /* Takes a state as input and returns an array of region objects with the elements id and name
   */
  const regionSelect = (stateId) => {
    let regionArray = [];
    states.forEach((onestate) => {
      if (stateId === onestate.id) {
        onestate.regions.forEach((oneregion) => {
          regionArray.push({
            name: oneregion.name,
            id: oneregion.id,
          });
        });
      }
    });
    setRegions(regionArray);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} color="primary">
        Gemeinde oder Stadtteil hinzufügen
      </Button>

      <Dialog
        open={props.data.toggleThankYouCityAdd}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Vielen Dank für deine Hilfe.
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Gerne!
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={props.data.toggleCityAdd}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Stadt hinzufügen</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deine gesuchte Stadt oder Gemeinde fehlt? Hilf der Community und
            füge sie hinzu.
          </DialogContentText>

          <FormControl>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <FormControl
                  className={classes.formControl}
                  fullWidth
                  error={errors.countryId ? true : false}
                >
                  <InputLabel htmlFor="country-native-simple">Land</InputLabel>
                  <NativeSelect
                    fullWidth
                    margin="dense"
                    id="country"
                    className={classes.selectEmpty}
                    value={country}
                    name="country"
                    onChange={handleChange}
                    inputProps={{
                      name: "country",
                      id: "country-native-simple",
                    }}
                  >
                    <option value={"choose"} key={"choose"}>
                      Bitte wählen
                    </option>
                    {countries
                      ? countries.map((element) => (
                          <option value={`${element.id}`} key={`${element.id}`}>
                            {element.name}
                          </option>
                        ))
                      : null}
                  </NativeSelect>
                  {errors.countryId !== "" ? (
                    <FormHelperText>{errors.countryId}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl
                  className={classes.formControl}
                  fullWidth
                  error={errors.stateId ? true : false}
                >
                  <InputLabel htmlFor="state-native-simple">
                    Bundesland
                  </InputLabel>
                  <NativeSelect
                    margin="dense"
                    id="state"
                    className={classes.selectEmpty}
                    value={state}
                    name="state"
                    onChange={handleChange}
                    inputProps={{
                      name: "state",
                      id: "state-native-simple",
                    }}
                  >
                    <option value={"choose"} key={"choose"}>
                      Bitte wählen
                    </option>
                    {states
                      ? states.map((element) => (
                          <option value={`${element.id}`} key={`${element.id}`}>
                            {element.name}
                          </option>
                        ))
                      : null}
                  </NativeSelect>
                  {errors.stateId !== "" ? (
                    <FormHelperText>{errors.stateId}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item sm={12} xs={12}>
                <FormControl
                  className={classes.formControl}
                  fullWidth
                  error={errors.regionId ? true : false}
                >
                  <InputLabel htmlFor="state-native-simple">
                    Landkreis / Kreisstadt
                  </InputLabel>
                  <NativeSelect
                    margin="dense"
                    id="region"
                    className={classes.selectEmpty}
                    value={region}
                    name="region"
                    onChange={handleChange}
                    inputProps={{
                      name: "region",
                      id: "region-native-simple",
                    }}
                  >
                    <option value={"choose"} key={"choose"}>
                      Bitte wählen
                    </option>
                    {regions
                      ? regions.map((element) => (
                          <option value={`${element.id}`} key={`${element.id}`}>
                            {element.name}
                          </option>
                        ))
                      : null}
                  </NativeSelect>
                  {errors.regionId !== "" ? (
                    <FormHelperText>{errors.regionId}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    margin="dense"
                    id="city"
                    value={city}
                    onChange={handleChange}
                    label="Stadt oder Gemeinde"
                    type="text"
                    fullWidth
                    name="city"
                    error={errors.selfId ? true : false}
                  />
                </FormControl>
                {errors.selfId !== "" ? (
                  <div style={{ color: "#f44336" }}>
                    <FormHelperText>{errors.selfId}</FormHelperText>
                  </div>
                ) : null}
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    margin="dense"
                    id="areacode"
                    value={areacode}
                    onChange={handleChange}
                    label="Postleitzahl"
                    type="number"
                    name="areacode"
                    error={errors.areacode ? true : false}
                  />
                </FormControl>
                {errors.areacode !== "" ? (
                  <div style={{ color: "#f44336" }}>
                    <FormHelperText>{errors.areacode}</FormHelperText>
                  </div>
                ) : null}
              </Grid>
            </Grid>
          </FormControl>
          <br />
          <br />
          <DialogContentText>
            Alle Eingaben werden vor der Veröffentlichung von der Community auf
            Richtigkeit geprüft.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Abbrechen
          </Button>
          <Button onClick={handleSubmit} type="submit" color="primary">
            Hinzufügen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CityAddComponent.propTypes = {
  createCity: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
  UI: state.UI,
});
const mapDispatchToProps = {
  createCity,
  toggleOpenThankYouCityAdd,
  toggleOpenCityAdd,
  clearErrors,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CityAddComponent));
