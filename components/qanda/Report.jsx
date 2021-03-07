import React, { useState } from "react";
import { withStyles } from "@material-ui/core";

import axios from "axios";
import PropTypes from "prop-types";
//mui
import {
  Button,
  DialogActions,
  Tooltip,
  IconButton,
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";
import { PriorityHigh } from "@material-ui/icons";
//redux
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.spreadThis,
  root: {
    maxWidth: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    backgroundColor: "rgb(220, 220, 220)",
  },
  upvote: {
    color: "rgb(0, 220, 0)",
  },
  downvote: {
    color: "rgb(255, 165, 0)",
  },
  report: {
    color: "rgb(220, 0, 0)",
  },
  dot: {
    borderRadius: "50%",
    backgroundColor: "grey",
  },
});

const Report = (props) => {
  const [report, setReport] = useState("");
  const [open, setOpen] = useState(false);

  const { classes } = props;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setReport(event.target.value);
  };

  const handleSubmit = () => {
    axios.post("/createreport", {
      createdAt: new Date().toISOString(),
      report: report,
      type: props.type,
      id: props.id,
      country: props.data.content.countryId,
      state: props.data.content.stateId,
      region: props.data.content.regionId,
      city: props.data.content.cityId,
    });
    setOpen(false);
  };
  const typeName = props.type === "answer" ? "Antwort" : "Frage";
  return (
    <div>
      <Tooltip title="Melden" placement="top">
        <IconButton onClick={handleOpen}>
          <PriorityHigh className={classes.report} />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Melden</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {` Diese ${typeName} enthält unangemessene Inhalte, grobe
                        Falschinformationen oder Beleidigungen?`}
          </DialogContentText>
        </DialogContent>
        <TextField
          name="report"
          margin="dense"
          label="Optionale Anmerkung"
          value={report}
          type="report"
          onChange={handleChange}
          fullWidth
          multiline
          rows="2"
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Abbrechen
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Melden
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
Report.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(withStyles(styles)(Report));
