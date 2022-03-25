import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)

    const getCash = (cash) => {
        dispatch({type:'GET_CASH', payload:cash})
    }
    const addCash = (cash) => {
        dispatch({type:'ADD_CASH', payload:cash})
    }

    return (
        <div className="App">
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt("Введите сумму")))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt("Введите сумму")))}>Снять со счёта</button>
            </div>

            <div>
                <p>Current Cash: {cash}</p>
            </div>
        </div>
    );
}

export default App;