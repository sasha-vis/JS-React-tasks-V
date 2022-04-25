import React, {useState} from 'react';

import Input from '../../Common/Input.js';

import {connect} from "react-redux";

import { confirmProfile } from '../../../actions/user.action';

function Profile(props) {
  const [isChange, setIsChange] = useState(false);

  function changeProfile() {
    setIsChange(true)
    setNameValue(props.users.usersArray[0].name);
    setSurnameValue(props.users.usersArray[0].surname)
    setSexValue(props.users.usersArray[0].sex)
    setAgeValue(props.users.usersArray[0].age)
    setCountryValue(props.users.usersArray[0].country)
    setCardValue(props.users.usersArray[0].card)
  };

  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [sexValue, setSexValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [cardValue, setCardValue] = useState('');

  function nameChange(event) {
    setNameValue(event.target.value);
  }

  function surnameChange(event) {
    setSurnameValue(event.target.value);
  }

  function sexChange(event) {
    setSexValue(event.target.value);
  }

  function ageChange(event) {
    setAgeValue(event.target.value);
  }

  function countryChange(event) {
    setCountryValue(event.target.value);
  }

  function cardChange(event) {
    setCardValue(event.target.value);
  }

  function confirmProfile() {
    if (cardValue.length < 16) return alert('Номер карты должен содержать 16 символов')
    if (!isNaN(cardValue)) {
      props.confirmProfile({
        id: `${props.users.usersArray[0].id}`,
        name: `${nameValue}`,
        surname: `${surnameValue}`,
        sex: `${sexValue}`,
        age: `${ageValue}`,
        country: `${countryValue}`,
        card: `${cardValue}`
      });
      setIsChange(false);
      setNameValue('');
      setSurnameValue('');
      setSexValue('');
      setAgeValue('');
      setCountryValue('');
    } else {
      alert('Найдены недопустимые символы')
    }
  }

  return (
    <div className="profile">
      <h3>Профиль</h3>
      {isChange === false ? <button className='change-profile' onClick={changeProfile}>Изменить</button> : <button className='confirm-change' onClick={confirmProfile}>Подтвердить</button>}
      {props.users.usersArray.map((elem, index) => 
        isChange === false ?
          <div className='user' key={index}>
            <div>Имя: <span>{elem.name}</span></div>
            <div>Фамилия: <span>{elem.surname}</span></div>
            <div>Пол: <span>{elem.sex}</span></div>
            <div>Возраст: <span>{elem.age}</span></div>
            <div>Страна: <span>{elem.country}</span></div>
            <div>Карта: <span>{elem.card}</span></div>
          </div>
        :
          <div className='user' key={index}>
            <div className='change-block'>
              Имя: 
              <div><Input type={"text"} value={nameValue} func={nameChange} /></div>
            </div>
            <div className='change-block'>
              Фамилия: 
              <div><Input type={"text"} value={surnameValue} func={surnameChange} /></div>
            </div>
            <div className='change-block'>
              Пол: 
              <div><Input type={"text"} value={sexValue} func={sexChange} /></div>
            </div>
            <div className='change-block'>
              Возраст: 
              <div><Input type={"text"} maxLength={"3"} value={ageValue} func={ageChange} /></div>
            </div>
            <div className='change-block'>
              Страна: 
              <div><Input type={"text"} value={countryValue} func={countryChange} /></div>
            </div>
            <div className='change-block'>
              Карта: 
              <div><Input type={"text"} maxLength={'16'} card={true} value={cardValue} func={cardChange} /></div>
            </div>
          </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  confirmProfile: (data) => dispatch(confirmProfile(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);