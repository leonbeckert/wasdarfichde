import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import PropTypes from "prop-types";
import { CardContent, Card, Typography } from "@material-ui/core";
import EditQAndADialog from "./EditQAndADialog";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//redux
import { connect } from "react-redux";
const styles = (theme) => ({
  ...theme.spreadThis,
});

const QAndA = (props) => {
  const { question, answer, latestUpdate, source } = props;
  dayjs.extend(relativeTime);
  const final = [];
  for (let i = 0; i < answer.split(";").length; i++) {
    let answ = answer.split(";")[i];
    final.push(<li key={i}>{answ}</li>);
  }
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {question}
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <EditQAndADialog
              country={props.country}
              state={props.state}
              region={props.region}
              city={props.city}
              currentQuestion={question}
              currentAnswer={answer}
              currentLatestUpdate={latestUpdate}
              currentSource={source}
              style={{}}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                marginTop: 5,
                marginRight: 5,
                textAlign: "right",
              }}
            >
              Zuletzt aktualisiert: {dayjs(latestUpdate).fromNow()}
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Typography variant="h5" component="p">
          <ul>{final}</ul>
        </Typography>
        <br />
        <Typography variant="body2" component="h2" color="textSecondary">
          Quellen: <br />
          <br />
          {`${source}`}
        </Typography>
        <br />
      </CardContent>
    </Card>
  );
};

QAndA.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(withStyles(styles)(QAndA));
