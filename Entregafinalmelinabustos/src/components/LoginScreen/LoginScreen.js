import './LoginScreen.scss'
import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

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
        login(values)
    }

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-6 text-center mb-5">
                    </div>
                </div>
                <div className="row justify-content-center login">
                    <div className="col-md-12 col-lg-10 caja ">
                        <div className="wrap d-md-flex justify-content-center">
                            <div className="color text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                <div className="text w-100">
                                    <h2>Bienvenido a login</h2>
                                    <p>¿No tienes cuenta?</p>
                                    <Link to="/register" className="btn btn-outline-secondary">Registrarme</Link>
                                </div>
                            </div>
                            <div className="login-wrap p-4 p-lg-5 iniciar">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Iniciar Sesion</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-end">
                                            <p>Logearme con: </p>
                                            <button onClick={googleLogin} classNameName="social-icon d-flex align-items-center justify-content-center"><FcGoogle /></button>
                                        </p>
                                    </div>
                                </div>
                                <form action="#" className="signin-form" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label for="email">Email</label>
                                        <input className="form-control" value={values.email}
                                            type={'text'}
                                            onChange={handleImputChange}
                                            placeholder='Tu email'
                                            name='email' required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">Contraseña</label>
                                        <input className="form-control" value={values.password}
                                            type={'password'}
                                            onChange={handleImputChange}
                                            placeholder='Password'
                                            name='password' required />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-danger submit px-3">Sign In</button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginScreen