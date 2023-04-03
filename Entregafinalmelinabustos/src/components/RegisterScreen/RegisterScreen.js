import './RegisterScreen.scss'
import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleImputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    return (
        <div className="registro">
            <div className='login-imput shadow-lg p-3 mb-5 bg-body-tertiary rounded '>
                <h2>Registrate</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        type={'text'}
                        onChange={handleImputChange}
                        className='form-control'
                        placeholder='Tu email'
                        name='email'
                    />
                    <br />
                    <br />
                    <input
                        value={values.password}
                        type={'password'}
                        onChange={handleImputChange}
                        className='form-control'
                        placeholder='Password'
                        name='password'
                    />
                    <br />
                    <button className='btn btn-light' type='submit'>Crear usuario</button>
                    <Link to="/login" className="textos">Ya tengo cuenta, ir a Logge</Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen