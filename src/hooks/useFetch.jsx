import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const data = async () => {
      const resp = await fetch(url);
      const countries = await resp.json();
      setState({
        loading: false,
        data: countries,
        error: null,
      });
    };
    data();
  }, [url]);

  return state;
};
