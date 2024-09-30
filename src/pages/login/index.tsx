import React from 'react';
import './index.css';
import BackGroungImg from '../../assets/images/factor_meals_img.webp';

const Login: React.FC = () => {
    return (
        <div className='login-container'>
            <img className='login-backgroung-image' src={BackGroungImg} alt='Factor Meals' />
            <div className='login-wrapper'>
                <div className='form-container'>
                    <div className='form-wrapper'></div>
                    <h1 className='login-title'>Welcome to SP Manpower</h1>
                    <form>
                        <div className='input-wrapper'>
                            <label className='input-label' htmlFor='email'>Enter your UserId</label>
                            <input className='input-text' type='email' name='email' id='email' />
                        </div>
                        <div className='input-wrapper'>
                            <label className='input-label' htmlFor='password'>Enter your Password</label>
                            <input className='input-text' type='password' name='password' id='password' />
                        </div>
                        <div className='button-wrapper'>
                            <button className='login-button' type='submit'>Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
