import React, { useState, useEffect, Fragment } from "react";

import axios from "axios";

import { Helmet } from "react-helmet";

export default function App() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API kamu atau URL API MU
    // Method @{get, post, put, patch, delete}
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=11")
      .then((response) => {
        setdata(response.data);
        setisLoading(false);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
      });
  }, []);
if (isLoading) return <h1>Loading data</h1>;
  else if (data && !isError)
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tutorial ReactJS Konsep Koding 2</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="app" style={{ marginLeft: "5em" }}>
          {data &&
            data.map((item) => (
              <div>
                <hr />
                <h1>{item.name.toUpperCase()}</h1>
                <i>{item.email}</i>
                <h2>{item.body}</h2>
                <hr />
              </div>
            ))}
        </div>
      </Fragment>
    );
  else {
    return <h1>Something Went Wrong</h1>;
  }
}
