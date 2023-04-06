import Home from "../Screen/Home";
import Login from "../Screen/Login";
import UserSelected from "../Screen/UserSelected";
import PerfilDetail from "../components/Producto/PerfilDetail";

export const routes = [
    {
      id: 1,
      path: "/home",
      Component: Home  
    },
    {
        id: 2,
        path: "/users/:login", /*los ":" nos permiten indeicarle a React que se trata de una ruta dinámica*/
        Component: UserSelected
    }
];

export {Login};