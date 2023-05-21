import { useState, useEffect } from "react";
const useFetch = (url) => {
      const [data, setData] = useState(null);
      const [fetching, setFetching] = useState(false);
      useEffect(() => {
          setFetching(true);
          fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.log(err))
          .finally(() => setFetching(false))
      }, [url]);
      return [data, fetching];
};
export default useFetch;