import {connect} from "react-redux";

import { changeButton } from './../../actions/isLog.action';

function Auth(props) {
    return (
        <div className="auth">
            {props.isLog.isLog !== true ? <button onClick={() => props.changeButton()}>Логин</button> : <button onClick={() => props.changeButton()}>Выйти</button>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLog: state.isLog
  })
  
  const mapDispatchToProps = (dispatch) => ({
    changeButton: (data) => dispatch(changeButton(data))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Auth);