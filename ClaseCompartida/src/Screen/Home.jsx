import React, {useEffect, useState} from 'react'
import axios from 'axios';
export const endpoint = "https://api.github.com/users";

const Home = () => {
  const [values, setValues] = useState(null);

  useEffect(()=>{
    axios.get(endpoint)
      .then(({data}) => {
        console.log(data);
        setValues(data);
      })
      .catch((error)=>{
        console.error(error);
      })
  },[]);

  
  return (
    <div>
      {
        values?.map((item)=>(
          <div key={item.id}>
            <p>{item.login}</p>
            <img src={item.avatar_url}/>
          </div>
      ))}
    </div>
  )
}

export default Home