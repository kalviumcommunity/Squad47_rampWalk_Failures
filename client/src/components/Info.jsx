import React, { useEffect, useState } from 'react';

function Info() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData[0]))
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      {data["events"] && data["events"].map((item,index)=>{
        return(
          <div className='data' key={index}>
          <h1>{item.Event}</h1>
          <h3>Likes: {item.Likes}</h3>
          <h3>Rating: {item.Rating}</h3>
          <h3>Views: {item.Views}</h3>
        </div>
        )
      })}
    </>
  );
}

export default Info;
