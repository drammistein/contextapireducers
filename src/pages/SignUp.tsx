import { Link } from "react-router-dom";
import { Context } from '../contexts/Context';
import { useContext } from 'react';

export const SignUp = () => {
    //const { name, age } = useContext(Context);
    //const data = useContext(Context); 
    const { state, dispatch } = useContext(Context);

    const handleChangeName = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: 'João'
            }
        });
    }

    return (
        <div>
            <h1>Tela SignUp de {state.user.name} que tem {state.user.age} anos.</h1>
            <br />
            <button><Link to="/ShowData">Ir para ShowData</Link></button>
            <button><Link to="/">Ir para Home</Link></button>
            <br />
            <button onClick={handleChangeName}>Trocar nome para João</button>
        </div>
    );
}