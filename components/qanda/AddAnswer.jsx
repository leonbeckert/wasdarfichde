import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

//mui
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core/";

//redux
import { connect } from "react-redux";
import { addAnswer } from "../../redux/actions/dataActions";

const AddAnswer = (props) => {
  const [open, setOpen] = useState(false);
  const [answerState, setAnswerState] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const answerObject = {
      questionId: props.questionId,
      answer: answerState,
      createdAt: new Date().toISOString(),
      answerId: `${Math.random() * 10000000000000000000000000}`,
      likeCount: 0,
    };
    props.addAnswer(answerObject);
    console.log("axiosPost in AddAnswer");
    axios
      .post(
        `update/newanswer/${props.data.content.countryId}/${props.data.content.stateId}/${props.data.content.regionId}/${props.data.content.cityId}/`,
        answerObject
      )
      .then(() => {
        setOpen(false);
      });
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case "answer":
        setAnswerState(event.target.value);
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
            Neue Antwort hinzufügen
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Neue Antwort erstellen
            </DialogTitle>
            <DialogContent>
              <TextField
                name="answer"
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
AddAnswer.propTypes = {
  questionId: PropTypes.string.isRequired,

  data: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = {
  addAnswer,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddAnswer);
