import React, { useContext} from 'react'
import { NewContext } from '../context/Context';
import {Link} from "react-router-dom"
import { Box, IconButton, Tooltip } from '@mui/material';
import { useGetData } from '../hooks/UseGetData';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const endpoint = "https://api.github.com/users";

const Home = () => {

  const { dispatch } = useContext(NewContext);
  const { values } = useGetData(endpoint);
  


  return (
    <div>
      {
        values?.map((item)=>(
          <div key={item.id}>
            <p>{item.login}</p>
            <img src={item.avatar_url}/>
            <Link to={`/users/${item.login}`}>Ver mas</Link>
            <Box>
              <Tooltip title="agregar a favoritos">
                <IconButton onClick={()=> dispatch({type: "FAVS", payload: item})}>
                  <FavoriteBorderIcon/>
                </IconButton>
              </Tooltip>
            </Box>
          </div>
      ))}
    </div>
  )
}

export default Home