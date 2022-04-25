import React from "react";

function ErrorHandler(props) {
  console.log('ErrorHandler')
  return (
      <div>{props.valueLength === 16 ? '' : <div className='invalid'>Номер карты должен содержать 16 символов</div>}</div>
  );
}

export default React.memo(ErrorHandler, (prevState, nextState) =>{
  if (prevState.valueLength === 16) {
      return false;
  } else if (nextState.valueLength === 16) {
      return false;
  } else {
    return true;
  }
});