import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id:Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div>
                <p>Current Cash: {cash}</p>
            </div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt("Введите сумму")))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt("Введите сумму")))}>Снять со счёта</button>
                <button onClick={() => addCustomer(prompt("Введите Имя Клиента"))}>Добавить Клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из Базы</button>
            </div>
            <div className="customer-list">
                {customers.length > 0
                    ? <div>
                        {customers.map((customer, index) =>
                            <div key={Date.now() + index} onClick={() => removeCustomer(customer)} style={{fontSize:'2rem', border:'1px solid #000', padding:'10px',marginTop:'6px'}}>
                                {customer.name}
                            </div>
                        )}
                    </div>
                    : <div style={{textAlign: 'center', fontSize: 20}}>Список клиентов пуст!</div>
                }
            </div>
        </div>
    );
}

export default App;