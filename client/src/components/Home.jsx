import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData[0]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const getCookie = (name) => {
      const cookieArray = document.cookie.split("; ");
      const cookie = cookieArray.find((row) => row.startsWith(name + "="));
      return cookie ? cookie.split("=")[1] : null;
    };
    const name = getCookie("name");
    const email = getCookie("email");
    const password = getCookie("password");
  
    console.log("User Data:", { name, email, password });
  
    setUserData({ name, email, password });
  }, []);
  
  
    useEffect(() => {
      async function getApi() {
        try {
          const res = await axios.get("http://localhost:3000/");
          console.log(res.data);
          setData(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      getApi();
    }, []);
  
    const clearCookie = (name) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };
  
    const handleLogout = (e) => {
      clearCookie("name");
      clearCookie("email");
      clearCookie("password");
      console.log("Updated Cookies:", document.cookie);
    };

  return (
<div className='home'>

<nav>
  <h2>Welcome</h2>
  {userData.name && <p>Name: {userData.name}</p>}
  {userData.email && <p>Email: {userData.email}</p>}
  {userData.password && <p>Password: {userData.password}</p>}
  <Link to="/login">
    <button onClick={handleLogout} className='logout'>Logout</button>
</Link>
</nav>

      <h1>Home</h1>
      <h2>
        <Link to="/create">Click here </Link> to add a new event
      </h2>
      
      <p>Some rampwalk failures will be shown in this website.</p>
      <div className="img"> image</div>
      <p>For more information, please refer to the README file.</p>
      <p>Thank you for using this website.</p>

      <button className='update'><Link to={`/update/${data}`}>Update</Link></button>

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
