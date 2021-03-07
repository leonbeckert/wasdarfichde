import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// MUI
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

// Components
import { setOpenThankYouFeedback } from "../../redux/actions/userActions";

const ThankYouFeedback = (props) => {
  const handleClose = () => {
    props.setOpenThankYouFeedback(false);
  };
  return (
    <div>
      <Dialog
        open={props.user.openThankYouFeedback}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Vielen Dank für Dein Feedback!
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Gerne!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ThankYouFeedback.propTypes = {
  user: PropTypes.object.isRequired,
  setOpenThankYouFeedback: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setOpenThankYouFeedback,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouFeedback);
