import React, { useState, useContext } from 'react'

import { Button } from '@mui/material';
import { useNavigate} from "react-router-dom";
import { NewContext } from '../context/Context';
import { FormContainer, Input, Container} from '../styles/styledComponent';

const Login = () => {

   const [values, setValues] = useState({email: "", password: ""});
   const { dispatch } = useContext(NewContext); /*consumo del contexto la función que maneja el "state" */
   const navigate = useNavigate();

    const handleSubmit = (e) => {
        /*Al loggearme en el formulario realizo 3 acciones*/
        /* 1° */ e.preventDefault(); /*evito el comportamiento por default*/
        /* 2° */ dispatch({type: "LOGGIN", payload: values.email}); /*le paso a la función dispatch del useReducer del context el caso type que quiero ejecutar*/
        /* 3° */ navigate("/home"); /*una vez ya loggeado, me redirijo a otra página, en este caso home*/
    }

    return (
        <Container>
            <FormContainer 
                component="form" 
                // sx={{display: "flex", flexDirection: "column", gap: "20px", width: "20vw"}}
                onSubmit={handleSubmit}
            >
                <Input 
                    name='email'
                    size='small'
                    type="text"
                    label="E-mail"
                    placeholder='Ingrese su e-mail'
                    value={values.email}
                    onChange={(e) => setValues({...values, email: e.target.value})}
                />
                <Input 
                    name='password'
                    size='small'
                    type="password"
                    label="password"
                    placeholder='Ingrese su contraseña'
                    value={values.password}
                    onChange={(e) => setValues({...values, password: e.target.value})}
                />
                <Button type='submit' size="small" variant="contained">
                    Ingresar
                </Button>

            </FormContainer>
        </Container>
    )
}

export default Login;