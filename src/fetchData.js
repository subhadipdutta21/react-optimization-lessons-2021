import React, { useEffect, useState } from "react";

const FetchData = ({ count }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(`%c Data fetched--`, "color: #bada60");
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <ul>
      {count}
      {loading && "Loading please wait.........."}
      {!loading && data?.map((itm) => <li key={itm.id}>{itm.title}</li>)}
    </ul>
  );
};

export default FetchData;
