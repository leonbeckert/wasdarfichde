import React from "react";
import PropTypes from "prop-types";

// MUI
import { Tooltip, IconButton } from "@material-ui/core";

/**
 * Displays a custom button
 * @param {*} props
 */
const CustomButton = (props) => {
  const { children, onClick, tip, btnClassName, tipClassName } = props;

  return (
    <Tooltip title={tip} className={tipClassName} placement="top">
      <IconButton onClick={onClick} className={btnClassName}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

CustomButton.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired,
  tip: PropTypes.object.isRequired,
  btnClassName: PropTypes.object.isRequired,
  tipClassName: PropTypes.object.isRequired,
};

export default CustomButton;
