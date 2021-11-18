import React, { useState, useEffect, Fragment } from "react";

export default function App() {
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    // URL Ganti dengan alamat github atau API kamu
    fetch("https://api.github.com/users/zidniryi")
      .then((response) => response.json())
      // Jika sukses
      .then((data) => {
        console.log(data.login);
        setdata(data);
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
        <div className="app" style={{ marginLeft: "5em" }}>
          <h1>Tutorial Get API React Hooks</h1>
          <img
            src={data.avatar_url}
            alt="img"
            width="256"
            style={{ marginTop: "2em", borderRadius: 128 }}
          />
          <hr />
          <h2>Name: {data.name}</h2>
          <h2>
            Web : <a href={data.blog}>{data.blog}</a>{" "}
          </h2>
          <h2>Join Github : {new Date(data.created_at).getFullYear()}</h2>
          <h2>Bio: {data.bio}</h2>
          <h2>Location: {data.location}</h2>
        </div>
      </Fragment>
    );
  else {
    return <h1>Something Went Wrong</h1>;
  }
}