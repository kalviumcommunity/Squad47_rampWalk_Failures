import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='home'>
      <h1>Home</h1>
      <h2>
        <Link to="/create">Click here </Link> to add a new event
      </h2>
      <p>Some rampwalk failures will be shown in this website.</p>
      <div className="img"> image</div>
      <p>For more information, please refer to the README file.</p>
      <p>Thank you for using this website.</p>

      {data["events"] &&
        data["events"].map((item, index) => (
          <div className='data' key={index}>
            <h1>{item.Id}</h1>
            <h1>{item.Event}</h1>
            <h3>Likes: {item.Likes}</h3>
            <h3>Rating: {item.Rating}</h3>
            <h3>Views: {item.Views}</h3>

            
          </div>
        ))}
    </div>
  );
};

export default Home;
