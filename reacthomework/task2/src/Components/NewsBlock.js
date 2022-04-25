import React, { Component } from 'react';

export default class NewsBlock extends Component {
  constructor(props) {
    super(props)
  }

   shouldComponentUpdate(nextProps) {
        if(this.props !== nextProps) { return true } 
        else { return false }
    }

  render () {
    return (
      <div className='wrapper'>
        <ul className='news-list'>
          {this.props.list.map((item, index) =>
            this.props.list[index].title.toLowerCase().includes(this.props.value.toLowerCase()) === true ?
            <li className="news" key={index}>
              <div className="news-img">
                <img src={item.img}></img>
              </div>
              <div className="news-description">
                <div className="news-title">
                    <h3>{item.title}</h3>
                </div>
                <div className="description">{item.description}</div>
              </div>
            </li> : ''
            )}
        </ul>
      </div>
    )
  }
}