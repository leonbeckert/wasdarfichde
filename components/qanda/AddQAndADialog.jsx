import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import PropTypes from "prop-types";
import firebase from "firebase/app";

// Redux
import { connect } from "react-redux";
import { addQAndAToContent } from "../../redux/actions/dataActions";

const AddQAndADialog = (props) => {
  const [open, setOpen] = useState(false);
  const [dialogQuestion, setDialogQuestion] = useState("");
  const [dialogAnswer, setDialogAnswer] = useState("");
  const [, setClickedAndIsNotLoggedIn] = useState(false);
  const [dialogSource, setDialogSource] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    if (firebase.auth().currentUser) {
      const qAndA = {
        question: dialogQuestion,
        answer: dialogAnswer,
        source: dialogSource,
        latestUpdate: new Date().toISOString(),
      };
      axios
        .post(
          `/update/newQAndA/${props.country}/${props.state}/${props.region}/${props.city}/`,
          qAndA
        )
        .then(() => props.addQAndAToContent(qAndA))
        .then(() => setOpen(false));
    } else {
      setClickedAndIsNotLoggedIn(true);
    }
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case "question":
        setDialogQuestion(event.target.value);
        break;
      case "source":
        setDialogSource(event.target.value);
        break;
      case "answer":
        setDialogAnswer(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {/* {clickedAndIsNotLoggedIn ? (
                <Redirect to="/login" />
            ) : ( */}
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Neue Frage und Antwort Hinzufügen
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Neue Frage und Antwort erstellen
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Erstelle eine neue Frage mit Antwort.
            </DialogContentText>
            <TextField
              name="question"
              margin="dense"
              label="Frage"
              type="answer"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="answer"
              margin="dense"
              label="Antwort"
              type="answer"
              onChange={handleChange}
              fullWidth
              multiline
              rows="3"
            />
            <TextField
              name="source"
              margin="dense"
              label="Quelle"
              type="source"
              onChange={handleChange}
              fullWidth
              multiline
              rows="3"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Abbrechen
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Erstellen
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* )} */}
    </div>
  );
};

AddQAndADialog.propTypes = {
  addQAndAToContent: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = {
  addQAndAToContent,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddQAndADialog);
