import React, { useState } from "react";

export default function App(){
  const [isCool, setisCool] = useState(false);

  return (
    <div>
      <h1>{isCool ? <p>Saya Tampan</p> : <p>Apakah saya tampan?</p>}</h1>
      <button onClick={() => setisCool(!isCool)}>
        {isCool ? 'Hore':'Click Me'}
      </button>
    </div>
  );
}