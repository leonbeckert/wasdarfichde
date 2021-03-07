import { withStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Answer from "./Answer";
import AddAnswer from "./AddAnswer";
import Report from "./Report";

// Mui
import {
  CardHeader,
  CardContent,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";

// Redux
import { connect } from "react-redux";
const styles = (theme) => ({
  ...theme.spreadThis,
  paper: {
    padding: theme.spacing(2),
  },
});

const Question = (props) => {
  const { questionId } = props;
  const { classes } = props;
  dayjs.extend(relativeTime);

  let question;
  let i;
  for (i = 0; i < props.data.content.questions.length; i++) {
    if (props.data.content.questions[i].questionId === questionId) {
      question = props.data.content.questions[i];
    }
  }
  let answers = [];
  let answersMarkup;
  if (props.data.content.answers) {
    for (i = 0; i < props.data.content.answers.length; i++) {
      if (props.data.content.answers[i].questionId === questionId) {
        answers.push(props.data.content.answers[i]);
      }
    }
    if (answers.length !== 0) {
      answersMarkup = answers.map((answer) => {
        return (
          //<li key={answer.answerId}>
          <Answer key={answer.answerId} answerId={answer.answerId} />
          //</li>
        );
      });
    } else {
      answersMarkup = (
        <Typography gutterBottom variant="body1">
          Beantworte diese Frage!
        </Typography>
      );
    }
  }

  return (
    <Paper className={classes.paper}>
      <CardHeader
        className={classes.content}
        action={<Report id={question.questionId} type="question" />}
        title={question.question}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5">
                    {question.question}
                </Typography> */}
        {answers[0] ? (
          <Grid item sm={12} xs={12}>
            <Typography variant="body1" color="textSecondary">
              Antworten von anderen Besuchern:
            </Typography>
            <br />
          </Grid>
        ) : null}
        <Grid item sm={12} xs={12}>
          {answersMarkup}
        </Grid>
        <br />
        <Grid item sm={12} xs={12}>
          <AddAnswer
            style={{ marginTop: 10 }}
            questionId={question.questionId}
          />
        </Grid>
      </CardContent>
    </Paper>
  );
};

Question.propTypes = {
  classes: PropTypes.object.isRequired,
  questionId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(withStyles(styles)(Question));
