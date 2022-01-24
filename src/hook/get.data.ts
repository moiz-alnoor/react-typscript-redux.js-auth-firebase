import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url:any) => {

  const [data, setData] = useState()

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        return res.data;
      
      })

    }

export default useFetch;