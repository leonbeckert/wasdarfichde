import { withStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";
import Report from "./Report";
// Mui
import { Card, CardHeader, Tooltip, IconButton } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

// Redux
import { connect } from "react-redux";
import {
  setAnswerUpvoted,
  deleteAnswerUpvoted,
  setAnswerDownvoted,
  deleteAnswerDownvoted,
} from "../../redux/actions/userActions";

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

const newAnswerObjectForDatabase = (answers, answerId, number) => {
  const newArray = [];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].answerId !== answerId) {
      newArray.push(answers[i]);
    } else {
      newArray.push({
        answer: answers[i].answer,
        answerId,
        createdAt: answers[i].createdAt,
        questionId: answers[i].questionId,
        likeCount: answers[i].likeCount + number,
      });
    }
  }
  return newArray;
};

const Answer = (props) => {
  const { answerId } = props;
  dayjs.extend(relativeTime);
  const { classes } = props;
  let answer;
  let i;
  for (i = 0; i < props.data.content.answers.length; i++) {
    if (props.data.content.answers[i].answerId === answerId) {
      answer = props.data.content.answers[i];
    }
  }

  const indexUpvoted = props.user.upvotedAnswers.indexOf(answerId);
  let isUpvoted = false;
  if (indexUpvoted > -1) {
    isUpvoted = true;
  }
  const axiosPost = (number) => {
    console.log("axiosPost in Answer");
    const newAnswers = newAnswerObjectForDatabase(
      props.data.content.answers,
      answerId,
      number
    );
    newAnswers.sort((a, b) => {
      return b.likeCount - a.likeCount;
    });
    axios.post(
      `/update/changeanswerlikecount/${props.data.content.countryId}/${props.data.content.stateId}/${props.data.content.regionId}/${props.data.content.cityId}`,
      {
        answers: newAnswers,
      }
    );
  };
  const handleUpvote = () => {
    if (indexUpvoted < 0) {
      // setUpvoted(true);

      if (isDownvoted) {
        // setDownvoted(false);
        props.deleteAnswerDownvoted(answerId);
        props.setAnswerUpvoted(answerId);
        axiosPost(2);
      } else {
        props.setAnswerUpvoted(answerId);
        axiosPost(1);
      }
    } else {
      // setUpvoted(false);

      props.deleteAnswerUpvoted(answerId);
      axiosPost(-1);
    }
  };

  const indexDownvoted = props.user.downvotedAnswers.indexOf(answerId);
  let isDownvoted = false;
  if (indexDownvoted > -1) {
    isDownvoted = true;
  }
  const handleDownvote = () => {
    if (indexDownvoted < 0) {
      // setDownvoted(true);
      if (isUpvoted) {
        // setUpvoted(false);

        props.deleteAnswerUpvoted(answerId);
        props.setAnswerDownvoted(answerId);
        axiosPost(-2);
      } else {
        props.setAnswerDownvoted(answerId);
        axiosPost(-1);
      }
    } else {
      // setDownvoted(false);

      props.deleteAnswerDownvoted(answerId);
      axiosPost(1);
    }
  };
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader
        className={classes.content}
        action={
          <div>
            {answer.likeCount}
            {!isUpvoted ? (
              <Tooltip title="Hilfreich!" placement="top">
                <IconButton onClick={handleUpvote}>
                  <ArrowUpward className={classes.upvote} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Zurücknehmen" placement="top">
                <IconButton onClick={handleUpvote} className={classes.dot}>
                  <ArrowUpward className={classes.upvote} />
                </IconButton>
              </Tooltip>
            )}
            {!isDownvoted ? (
              <Tooltip title="Nicht Hilfreich!" placement="top">
                <IconButton onClick={handleDownvote}>
                  <ArrowDownward className={classes.downvote} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Zurücknehmen" placement="top">
                <IconButton onClick={handleDownvote} className={classes.dot}>
                  <ArrowDownward className={classes.downvote} />
                </IconButton>
              </Tooltip>
            )}
            <Report id={answerId} type="answer" />
          </div>
        }
        title={answer.answer}
        subheader={dayjs(answer.createdAt).fromNow()}
      />
    </Card>
  );
};

Answer.propTypes = {
  answerId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setAnswerUpvoted: PropTypes.func.isRequired,
  deleteAnswerUpvoted: PropTypes.func.isRequired,

  setAnswerDownvoted: PropTypes.func.isRequired,
  deleteAnswerDownvoted: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});
const mapDispatchToProps = {
  setAnswerUpvoted,
  deleteAnswerUpvoted,
  setAnswerDownvoted,
  deleteAnswerDownvoted,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Answer));
