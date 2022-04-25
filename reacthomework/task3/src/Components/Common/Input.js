import React from "react";

import ErrorHandler from './ErrorHandler.js';

function Input(props) {
  return (
    <div className="input-wrapper">
      <input type={props.type} value={props.value} onChange={props.func} placeholder={props.placeholder} maxLength={props.maxLength}></input>
     {props.card === true ? <ErrorHandler valueLength={props.value.length} /> : ''}
    </div>
  );
}

export default Input;