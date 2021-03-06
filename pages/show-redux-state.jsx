import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const codeStyle = {
  background: "#ebebeb",
  width: 400,
  padding: 10,
  border: "1px solid grey",
  marginBottom: 10,
};

const identity = (state) => state;

const ShowReduxState = () => {
  const state = useSelector(identity);

  return (
    <>
      <pre style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  );
};

export default ShowReduxState;
