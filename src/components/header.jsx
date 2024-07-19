import React, { useState } from "react";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from "../slise/searchslise";
import { FaShoppingCart } from "react-icons/fa"

function Header(){

    const searchValue = useSelector(state => state.search.searchValue);
    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();
    const [selectedButton, setSelectedButton] = useState('');
    const handleButton = (icon) => {
        setSelectedButton(icon);
    }

    const handleSearch = () => {
        console.log("Поиск:", searchValue);
    };

    return(
        <div className="App">
            <header>
                <div className="header-container">

                    <img src="https://illustrators.ru/uploads/illustration/image/1078714/%D0%A1%D0%BF%D1%80%D0%B8%D0%BD%D1%82%D0%B5%D1%80.jpg" alt="Sprinter Logo" className="logo" />
                    <div className="search-bar">
                        <input
                            placeholder="Поиск"
                            type="text"
                            value={searchValue}
                            onChange={(e) => dispatch(setSearchValue(e.target.value))}
                        />
                    </div>
                    <div>
                        <nav className="nav-bar">
                            <ul className="nav-list">
                                <div onClick={() => handleButton('Домашняя')}>
                                    <Link to='/' className={`head-item ${selectedButton === 'Домашняя' ? 'selected' : ''}`}>Домашняя</Link>
                                </div>
                                <div onClick={() => handleButton('Магазин')}>
                                    <Link to='/shop' className={`head-item ${selectedButton === 'Магазин' ? 'selected' : ''}`}>Магазин</Link>
                                </div>
                                <div onClick={() => handleButton('О нас')}>
                                    <Link to='/aboutus' className={`head-item ${selectedButton === 'О нас' ? 'selected' : ''}`}>О нас</Link>
                                </div>
                                <div onClick={() => handleButton('Контакты')}>
                                    <Link to='/contact' className={`head-item ${selectedButton === 'Контакты' ? 'selected' : ''}`}>Контакты</Link>
                                </div>
                            </ul>
                        </nav>
                    </div>

                    <div className="cart-icon">
                        <Link to='cart/' className="shop-cart">
                            <FaShoppingCart />
                        </Link>

                        <span className="cart-count">{count}</span>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;
