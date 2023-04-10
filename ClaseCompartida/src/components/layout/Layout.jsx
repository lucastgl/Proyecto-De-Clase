import React, { Fragment, useContext } from 'react'
import {Box, IconButton, Tooltip, Typography} from "@mui/material"
import { NewContext } from '../../context/Context';
import { Outlet, useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Layout = () => {

    const {state, dispatch} = useContext(NewContext);
    const navigate = useNavigate();

    return (
        <Fragment>
            <Box component="header" style={{display: "flex", justifyContent: "space-between"}}>
                <ul style={{display: "flex", gap: "20px"}}>
                    <li onClick={() => navigate("/favorites")} style={{cursor: "pointer"}}>Favoritos</li>
                    <li onClick={() => navigate("/home")} style={{cursor: "pointer"}}>Home</li>
                </ul>
                <Typography variant='body2'>{state?.user}</Typography>
                <Tooltip title="Cerrar sesión">
                    <IconButton onClick={() => dispatch({type: "LOGOUT" /*No usamos el payload ya que solo es obligatorio mientras se utilice*/})}>
                        <ExitToAppIcon size={30} style={{color: "white"}}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Outlet/>
        </Fragment>
    )
}

export default Layout;