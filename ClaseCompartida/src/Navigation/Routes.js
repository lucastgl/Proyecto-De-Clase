import Login from "../Screen/Login";
import PerfilDetail from "../components/Producto/PerfilDetail";
import Home from "../Screen/Home";

export const routes = [
    {
      id: 1,
      path: "/home",
      Component: Home  
    },
    {
        id: 2,
        path: "/perfil-detail/",
        Component: PerfilDetail
    }
];

export {Login};