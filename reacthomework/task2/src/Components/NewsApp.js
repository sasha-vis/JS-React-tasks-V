import React, { Component } from 'react';

import ListOfNews from './ListOfNews.js';
import NewsBlock from './NewsBlock.js';

export default class NewsApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newsList: [
        {id: '1', title: "Праздник день города",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9vP_N7SJK1I9MeL0Y_UME9bBvXGK41jSYQ&usqp=CAU",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam similique officia incidunt quaerat ipsam, pariatur assumenda rerum. Molestiae, praesentium dolorum?",
        isShow: true},
        {id: '2', title: "Митинги",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCL1etlyfc6hRcN7Nlgf6XCQOsa5gh0Al7Q&usqp=CAU",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam similique officia incidunt quaerat ipsam, pariatur assumenda rerum. Molestiae, praesentium dolorum?",
        isShow: false},
        {id: '3', title: "Пробки в Минске",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yBXH_vQrJ3Iphh3fZ1uSqPfPSW-zlIzGtQ&usqp=CAU",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam similique officia incidunt quaerat ipsam, pariatur assumenda rerum. Molestiae, praesentium dolorum?",
        isShow: false},
        {id: '4', title: "Торговля оружем",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qx9uaPuv1MUuFw9yaR2QyvzOYdQlrplwuw&usqp=CAU",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam similique officia incidunt quaerat ipsam, pariatur assumenda rerum. Molestiae, praesentium dolorum?",
        isShow: false},
        {id: '5', title: "Праздник Новый год",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FpPXHxn5QU3n114Vg-Cq8iJV2trdy8VVRw&usqp=CAU",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam similique officia incidunt quaerat ipsam, pariatur assumenda rerum. Molestiae, praesentium dolorum?",
        isShow: false},
      ],
      value: '',
      reverse: false
    }

    this.showContent = this.showContent.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.reverseData = this.reverseData.bind(this);

    this.reset = this.reset.bind(this);
  }

  showContent(index) {
    if (this.state.newsList[index].isShow === false) {
      this.setState({
        isShow: this.state.newsList[index].isShow = true
      })
    } else {
      this.setState({
        isShow: this.state.newsList[index].isShow = false
      })
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  reverseData() {
    let list = this.state.newsList.reverse();

    list.forEach(function (item, key) {
      if (key == 0) {
          item.isShow = true;
      } else { item.isShow = false }
    });

    this.setState ({
      newsList: list
    })
  }

  reset() {
    // window.location.reload()

    let list = this.state.newsList;
    let list2 = list.slice();

    list.forEach(function (item, key) {
        list2[item.id-1] = list[key];
        if (item.id == 1) {
          list2[item.id-1].isShow = true;
        } else {
          list2[item.id-1].isShow = false;
        }
    });

    this.setState({
        newsList: list2
    })

    this.setState ({
      value: ''
    })
  }

  render() {
    return (
      <div className='news-app'>
        <div className='news-app-wrapper'>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Введите название новости' />
          <button className='reverse' onClick={this.reverseData}>Сортировать</button>
          <button className='reset' onClick={this.reset}>Сбросить</button>
          {this.state.value === '' ?  <ListOfNews list={this.state.newsList} func={this.showContent} /> :
                                      <NewsBlock value={this.state.value} list={this.state.newsList} />}
        </div>
      </div>
    )
  }
}