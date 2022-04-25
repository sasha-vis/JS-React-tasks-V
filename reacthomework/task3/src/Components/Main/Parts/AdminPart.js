import React, {useState} from 'react';

import Input from '../../Common/Input.js';

import {connect} from "react-redux";

import { addItem, deleteItem, updateItem } from '../../../actions/products.action.js';

function AdminPart(props) {

  const [titleValue, setTitleValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [volumeValue, setVolumeValue] = useState('');
  const [urlValue, setUrlValue] = useState('');

  const [changeMode, setChangeMode] = useState(false)

  const [id, setId] = useState(null);

  function titleChange(event) {
    setTitleValue(event.target.value);
  }
  function priceChange(event) {
    setPriceValue(event.target.value);
  }
  function volumeChange(event) {
    setVolumeValue(event.target.value);
  }
  function urlChange(event) {
    setUrlValue(event.target.value);
  }

  function createProduct () {
    if (titleValue === '' && priceValue === '' && volumeValue === '' && urlValue === '') return;
    props.addItem({
      id: `${Date.now()}`,
      title: `${titleValue}`,
      img: `${urlValue}`,
      price: `${priceValue}`,
      volume: `${volumeValue}`
    })
    clearInputs()
  }

  function changeProduct(item) {
    setTitleValue(item.title);
    setPriceValue(item.price)
    setVolumeValue(item.volume)
    setUrlValue(item.img)
    setChangeMode(true);
    setId(item.id);
  }

  function updateProduct() {
    props.updateItem({
      id: `${id}`,
      title: `${titleValue}`,
      img: `${urlValue}`,
      price: `${priceValue}`,
      volume: `${volumeValue}`
     })
    setChangeMode(false);
    clearInputs();
    setId(null);
  }

  function clearInputs(){
    setTitleValue('');
    setPriceValue('');
    setVolumeValue('');
    setUrlValue('');
  }

  return (
    <div className='admin-part'>
      <div className='create-block'>
        <h3>Создать товар</h3>
        <div className='create-block-wrapper'>
          <div className='crt-title'>Название продукта: <Input type={"text"} value={titleValue} func={titleChange} /></div>
          <div className='crt-price'>Цена продукта: <Input type={"text"} value={priceValue} func={priceChange} /></div>
          <div className='crt-volume'>Объем продукта: <Input type={"text"} value={volumeValue} func={volumeChange} /></div>
          <div className='crt-url'>Адрес картинки: <Input type={"text"} value={urlValue} func={urlChange} /></div>
        </div>
        {changeMode === false ? <button className='create-product-btn' onClick={createProduct}>Создать</button>
                                :
                                <button className='change-product-btn' onClick={updateProduct}>Подтвердить</button>}
      </div>
      <ul className="products-list">{
      props.products.productsArray.map((item, index) =>
        <li className="product" key={index}>
          <div className='change-product'>
            <div className='edit-product'>
              <button className='edit-btn' onClick={() => changeProduct(item)}>Изменить</button>
            </div>
            <div className='delete-product'>
              <button className='delete-btn' onClick={() => props.deleteItem({index: index})}>Удалить</button>
            </div>
          </div>
          <div className='product-des'>
            <div className="product-image">
              <img src={item.img}></img>
            </div>
            <div className="product-description">
              <div className="title">
                  <h3>{item.title}</h3>
                  <div className="volume">{item.volume}</div>  
              </div>
              <div className="price">
                <div className="price">{item.price}</div>
              </div>
            </div>
          </div>
        </li>
      )
      }</ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  addItem: (data) => dispatch(addItem(data)),
  deleteItem: (data) => dispatch(deleteItem(data)),
  updateItem: (data) => dispatch(updateItem(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPart);