import React, { useState } from "react";

import ProductList from "../../Common/ProductList.js";

import Input from "../../Common/Input.js";

function ClientPart() {
  const [value, setValue] = useState('');

  function handleChange(event) {
     setValue(event.target.value);
  }
  
  return (
    <div className="client-part">
      <h3>Список товаров</h3>
      <div className="search">
        <Input type={"text"} value={value} func={handleChange} placeholder={"Введите название продукта"} />
      </div>
      <ProductList title={value} />
    </div>
  );
}

export default ClientPart;