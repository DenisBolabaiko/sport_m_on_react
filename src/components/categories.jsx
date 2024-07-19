import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../slise/filterslise";

function Categories() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState('');

  const handleIconSelect = (icon) => {
    dispatch(setCategoryId(icon));
    setSelectedButton(icon);
  };

  console.log('redux state', categoryId);

  return (
    <ul className="nav-list">
      <button className={`nav-item ${selectedButton === '' ? 'selected' : ''}`} onClick={() => handleIconSelect('')}>Все</button>
      <button className={`nav-item ${selectedButton === 'Фитнес' ? 'selected' : ''}`} onClick={() => handleIconSelect('Фитнес')}>Фитнесс</button>
      <button className={`nav-item ${selectedButton === 'Футбол' ? 'selected' : ''}`} onClick={() => handleIconSelect('Футбол')}>Футбол</button>
      <button className={`nav-item ${selectedButton === 'Теннис' ? 'selected' : ''}`} onClick={() => handleIconSelect('Теннис')}>Теннис</button>
      <button className={`nav-item ${selectedButton === 'Велоспорт' ? 'selected' : ''}`} onClick={() => handleIconSelect('Велоспорт')}>Велоспорт</button>
    </ul>
  );
}

export default Categories;
