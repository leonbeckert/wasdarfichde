import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { addQuestion } from "../../redux/actions/dataActions";

const AddQuestion = (props) => {
  const [open, setOpen] = useState(false);
  const [questionState, setQuestionState] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const questionObject = {
      question: questionState,
      createdAt: new Date().toISOString(),
      questionId: `${Math.random() * 10000000000000000000000000}`,
      likeCount: 0,
    };
    props.addQuestion(questionObject);
    console.log("axiosPost in addQuestion");
    axios
      .post(
        `/update/newquestion/${props.data.content.countryId}/${props.data.content.stateId}/${props.data.content.regionId}/${props.data.content.cityId}/`,
        questionObject
      )
      .then(() => setOpen(false));
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case "question":
        setQuestionState(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <Grid item sm={12} xs={12}>
      <div>
        <div>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Neue Frage hinzufügen
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Neue Frage erstellen
            </DialogTitle>
            <DialogContent>
              <TextField
                name="question"
                margin="dense"
                label="Frage"
                type="answer"
                onChange={handleChange}
                fullWidth
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
      </div>
    </Grid>
  );
};
AddQuestion.propTypes = {
  data: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = {
  addQuestion,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
