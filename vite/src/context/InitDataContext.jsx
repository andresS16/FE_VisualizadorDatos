
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const InitDataContext = createContext();

function InitDataProvider({ children }) {
    const [data, setData] = useState({
        products: null,
       
    });

useEffect(()=>{
    (async function(){
        try{
        const products = await axios.get('https://localhost:7097/api/Stock/obtenertodos');    
        setData({products: products })
        }catch(error){
            throw new Error(error);  
        }
    })()
}, []);

// const getMovies = async () => {
//     try{
//         const moviesGet= await axios.get('http://localhost:3001/api/movies');
//         setData((value) =>({...value, movies: moviesGet.data}))
//     }catch(error){
//         console.log(error)

//     }
// }
  
    return (
        <InitDataContext.Provider value={data}>
            {children}
        </InitDataContext.Provider>
    )
}

InitDataProvider.propTypes = {
    children: PropTypes.element
}

export { InitDataContext, InitDataProvider }
