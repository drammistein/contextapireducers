import { Link } from 'react-router-dom';

export const ShowData = () => {
    return (
        <div>
            <h1>Tela ShowData</h1>
            <br/>
            <button><Link to="/SignUp">Voltar para SignUp</Link></button>
            <br />
            <button><Link to="/">Voltar para Home</Link></button>
        </div>
    );
}