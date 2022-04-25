import React from "react";
import {connect} from "react-redux";

function Home(props) {
  return (
    <div className="home">
      <h3 className="title">{props.platform.platformArray[0].title}</h3>
      <img src={`${props.platform.platformArray[0].img}`}></img>
      <div className="description">{props.platform.platformArray[0].description}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  platform: state.platform
})

export default connect(mapStateToProps)(Home);