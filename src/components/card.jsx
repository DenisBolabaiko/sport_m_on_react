import { useEffect, useState } from "react";
import MyLoader from "./loader";
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../slise/cartslice";
import { Increment} from "../slise/counterSlice";
import { FaShoppingCart } from "react-icons/fa"



function Card(props){
    const dispatch = useDispatch();
    const [sizechoose, setSize] = useState(0);
    const [loading, setLoading] = useState(false);
    console.log(props)
    const ShowAlert=()=>{
        dispatch(addItem(props));
        dispatch(Increment())
        console.log(props)
        alert("Товар добавлен в корзину")
        console.log("Товар добавлен в корзину в", new Date());
    }

    return(
        <div>
        {loading ? (
        <MyLoader />
        ) : (
        
        
        <div class="product-card">
            <img src={props.url} class="product-image" alt="Product Image"/>
            <div class="card-details">
                <h3 class="product-title">{props.name}</h3>
                <p class="product-price">${props.price}</p>
                <h3>Размер:</h3>
                {props.availablesizes.map((size, index) => (
                            <button key={index} className={`size-button ${sizechoose === index ? 'selected' : ''}`} onClick={() => setSize(index)}>{size}</button>
                        ))} 
            </div>
            <button class="add-to-cart" onClick={ShowAlert}><FaShoppingCart/>В корзину</button>
        </div>
        
    )
}
    </div>
    
    )
}
export default Card;