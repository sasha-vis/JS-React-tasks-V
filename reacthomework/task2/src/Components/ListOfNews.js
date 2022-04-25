import React, { Component } from 'react';

export default class ListOfNews extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    if(this.props !== nextProps) { return true } 
    else { return false }
}

  render () {
    return (
       <ul className='news-list'>{
          this.props.list.map((item, index) =>
          <li className="news" key={index}>
            <div className="news-img">
              <img src={item.img}></img>
            </div>
            <div className="news-description">
              <div className="news-title">
                  <h3>{item.title}</h3>
                  {item.isShow === false ?  <button onClick={() => this.props.func(index)}>Открыть</button> :
                                            <button onClick={() => this.props.func(index)}>Закрыть</button>}
              </div>
              {item.isShow === true ? <div className="description">{item.description}</div> : ''}
            </div>
          </li>
          )
       }</ul>
    )
  }
}