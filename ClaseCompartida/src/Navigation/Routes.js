import Login from "../Screen/Login";
import Layout from "../components/layout/Layout";

import Home from "../Screen/Home";
import UserSelected from "../Screen/UserSelected";
import Favorites from "../Screen/Favorites";

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
    },
    {
      id: 3,
      path: "/favorites",
      Component: Favorites
    }
];

export {Login, Layout};