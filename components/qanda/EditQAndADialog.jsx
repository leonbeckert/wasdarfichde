import React, { useEffect, useState } from "react";
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

import { connect } from "react-redux";
import { editQAndAInContent } from "../../redux/actions/dataActions";

const EditQAndADialog = (props) => {
  const [open, setOpen] = useState(false);
  const [dialogQuestion, setDialogQuestion] = useState("");
  const [dialogAnswer, setDialogAnswer] = useState("");
  const [, setClickedAndIsNotLoggedIn] = useState(false);
  const [, setDialogLatestUpdate] = useState("");
  const [dialogSource, setDialogSource] = useState("");

  useEffect(() => {
    setDialogQuestion(props.currentQuestion);
    setDialogAnswer(props.currentAnswer);
    setDialogLatestUpdate(props.currentLatestUpdate);
    setDialogSource(props.currentSource);
  }, [props.currentAnswer, props.currentQuestion]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    if (firebase.auth().currentUser) {
      const qAndA = {
        oldQuestion: props.currentQuestion,
        oldAnswer: props.currentAnswer,
        newQuestion: dialogQuestion,
        newAnswer: dialogAnswer,
        oldLatestUpdate: props.currentLatestUpdate,
        oldSource: props.currentSource,
        newLatestUpdate: new Date().toISOString(),
        newSource: dialogSource,
      };
      axios
        .post(
          `/update/editQAndA/${props.country}/${props.state}/${props.region}/${props.city}/`,
          qAndA
        )
        .then(() => {
          const oldQuestions = props.data.content.questions;
          let newQuestions = [];
          const oldAnswers = props.data.content.answers;
          let newAnswers = [];
          const oldLatestUpdates = props.data.content.latestUpdates;
          let newLatestUpdates = [];
          const oldSources = props.data.content.sources;
          let newSources = [];
          let i;
          for (i = 0; i < oldQuestions.length; i++) {
            if (oldQuestions[i] !== props.currentQuestion) {
              newQuestions.push(oldQuestions[i]);
            } else {
              newQuestions.push(dialogQuestion);
            }
          }
          for (i = 0; i < oldAnswers.length; i++) {
            if (oldAnswers[i] !== props.currentAnswer) {
              newAnswers.push(oldAnswers[i]);
            } else {
              newAnswers.push(dialogAnswer);
            }
          }
          for (i = 0; i < oldLatestUpdates.length; i++) {
            if (oldLatestUpdates[i] !== props.currentLatestUpdate) {
              newLatestUpdates.push(oldLatestUpdates[i]);
            } else {
              newLatestUpdates.push(new Date().toISOString());
            }
          }
          for (i = 0; i < oldSources.length; i++) {
            if (oldSources[i] !== props.currentSource) {
              newSources.push(oldSources[i]);
            } else {
              newSources.push(dialogSource);
            }
          }
          props.editQAndAInContent({
            questions: newQuestions,
            answers: newAnswers,
            latestUpdates: newLatestUpdates,
            sources: newSources,
          });

          setOpen(false);
        });
    } else {
      setClickedAndIsNotLoggedIn(true);
    }
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "question":
        setDialogQuestion(event.target.value);
        break;
      case "answer":
        setDialogAnswer(event.target.value);
        break;
      case "source":
        setDialogSource(event.target.value);
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
          Bearbeiten
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Frage und Antwort bearbeiten
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Bearbeite Frage und Antwort falls sie nicht mehr aktuell ist.
            </DialogContentText>
            <TextField
              name="question"
              margin="dense"
              label="Frage"
              value={dialogQuestion}
              type="answer"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="answer"
              margin="dense"
              label="Antwort"
              value={dialogAnswer}
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
              value={dialogSource}
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
EditQAndADialog.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = {
  editQAndAInContent,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditQAndADialog);
