import {useEffect, useState} from "react";
import {createAPI} from "./api";

const api = createAPI();

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      api
        .get(url)
        .then(({data: responseData}) => {
          setData(responseData);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  return [data, isLoading];
};
