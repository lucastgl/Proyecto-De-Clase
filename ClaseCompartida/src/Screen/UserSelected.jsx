import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import { useGetData } from '../hooks/UseGetData';
import { endpoint } from './Home';

const UserSelected = () => {
    
    const {login} = useParams();
    const {values} = useGetData(`${endpoint}/${login}`);


    return (
        <div>
            <div>
                <p>{values?.login}</p>
                <img src={values?.avatar_url}/>
                <Link to="/home">Volver</Link>
          </div>
        </div>
    )
}

export default UserSelected;