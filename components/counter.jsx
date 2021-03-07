// TODO What is counter and what do we need this for? Is this some example code?
import { React } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../redux/actions/actions";

const Counter = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    props.incrementCount();
  };
  return (
    <div>
      <h1>
        Count: <span>{props.counter}</span>
      </h1>
      <button onClick={handleClick}>+1</button>
      <button onClick={() => dispatch(decrementCount())}>-1</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
      <h1>
        Test: <span>{props.UI.test}</span>
      </h1>
    </div>
  );
};

Counter.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
  counter: state.counter,
});
const mapDispatchToProps = {
  incrementCount,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
