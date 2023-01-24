import React from 'react';
import "../styles/LoginSignUp.css"

const LoginSignUp = () => {
    return (
        <div className="form">

            <h2>Inicia sesión</h2>

            <form action="">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" name="email" placeholder='juanito@bilongo.com'className='email-field'></input>
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" placeholder="******" className='password-field'></input>

                <input type="submit" value="Iniciar sesión" className='submit' />

            </form>

        </div>
    );
}

export default LoginSignUp;