import React, { createContext, useReducer } from "react";

export const NewContext = createContext({});

/*La función que actualiza el estado no debe estar necesariamente dentro del cuerpot del Context */
const reducerActions = (state, action) =>{
    
    /*action es un objeto con una propiedad "type" que cambia a medida que el state se actualiza
    además también tiene la propiedad "payload"*/
    
    switch (action.type){/*evaluo en que type me encuentro */

        case "LOGGIN":
            sessionStorage.setItem("logged", JSON.stringify(true)) /*siempre puedo colocar lógica entre la declaración del case y el return, 
            nunca dentro del return o por fuera de los case*/
            return{
                ...state,/*siempre al inicio del return de cada caso debo hacer una copia del último estado del "state"*/
                isLogged: true,
                user: action.payload
            }

        case "LOGOUT":
            sessionStorage.clear();
            localStorage.clear();    
            return{
                ...state,
                isLogged: false,
                user: null
            }
        case "FAVS":
            //AQUI VA LA LOGICA PARA VERIFICAR QUE EL FAV QUE AGREGUE NO ESTÉ DUPLICADO
            localStorage.setItem("favoritos", JSON.stringify([...state.data, action.payload]))
            return{
                /*primero hago una copia del "state.data" y luego le agrego el "payload"*/
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state; /*el valor por defaul siempre va a ser retorner el state*/
    }
};

const NewContextProvider = ({children}) => {
 
    /*Estado inicial del useReducer*/
    const initialState = {
        isLogged:  !!sessionStorage.getItem("logged"),
        user: null,
        data: JSON.parse(localStorage.getItem("favoritos")) ?? []
    };

    /*Al use useReducer se le pasa primero la función reducer y luego el estado inicial, 
    pero los devuelve de forma invertida, por eso primero va el state y luego el dispatch*/
    const [state, dispatch] = useReducer(reducerActions, initialState);
    console.log(state.isLogged);

    const propiedades = { state, dispatch }
    console.log(state.data);
    return(
        <NewContext.Provider value={propiedades}>
            {children}
        </NewContext.Provider>
    )
}

export default NewContextProvider;