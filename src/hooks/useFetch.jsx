import React, { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  
  useEffect(() => {
    if(!url) return
    const data = async () => {

      try {
        const resp = await fetch(url);
        if(!resp.ok){
          throw new Error(resp.statusText)
        }

        const countries = await resp.json();
        setState({
          loading: false,
          data: countries,
          error: null,
        });
      } catch (error) {
        setState({
          loading:false,
          data:null,
          error
        })
      }
    };
    data();
  }, [url]);

  return state;
};
