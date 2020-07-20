import { useState, useEffect } from 'react';
import {getGifs} from '../components/helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( (category) => {

getGifs( category )
.then(imgs => {
     
        setState({
        data: imgs,
        loading: false
    })
    
})




    }, [])
   
   
return state;
} 
