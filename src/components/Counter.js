import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatImg } from '../redux/reducers/dataImgReducer';

export default function Counter() {


    //le state
    const [cartData, setCartData] = useState(0);

    /*le hook useSelector permet de se connecter au store et 
    afficher les données*/
    const {cart, count, imgURL} = useSelector(state => ({
        ...state.addCartReducer,
        ...state.counterReducer,
        ...state.dataImgReducer
    }))

    /* le hook useDispatch permet d'envoyer l'action 
    (ce qu'on veut modifier au store)*/
    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: "INCR"
        })
    }
    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }

    const addToCartFunc = () => {
        dispatch({
            type: "ADDCART",
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg())
    }, [])

    return (
        <div>
            <h1>Votre panier {cart} {count}</h1>
            {/* <button onClick={incrFunc}>+1</button>
            <button onClick={decrFunc}>-1</button> */}
            <input
                value={cartData}
                onInput={e => setCartData(e.target.value)}
                type="number"
            /> <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>
            {imgURL && <img style={{width: "300px"}} src={imgURL} />}
        </div>
    )
}
