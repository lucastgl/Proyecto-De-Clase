import React, { useContext } from 'react'

import {Link} from "react-router-dom"
import { NewContext } from '../context/Context'
import { Box, IconButton, Tooltip } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Favorites = () => {

    const {state} = useContext(NewContext);
        
    return (
        <main>
            <h1>Favoritos</h1>
            {
                state.data.map((item)=>(
                <div key={item.id}>
                    <p>{item.login}</p>
                    <img src={item.avatar_url}/>
                    <Link to={`/users/${item.login}`}>Ver mas</Link>
                    <Box>
                    <Tooltip title="agregar a favoritos">
                        <IconButton>
                            <FavoriteBorderIcon/>
                        </IconButton>
                    </Tooltip>
                    </Box>
                </div>
            ))}
        </main>
    )
}

export default Favorites