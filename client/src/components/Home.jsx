import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState({});
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('All')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getUserDataFromCookies = () => {
      const getCookie = (name) => {
        const cookieArray = document.cookie.split('; ');
        const cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
      };

      const name = getCookie('name');
      const email = getCookie('email');
      const password = getCookie('password');
      
      setUserData({ name, email, password });
    };

    getUserDataFromCookies();
  }, []);

  const handleDropDown=(e)=>{
    setSort(e.target.value)
  }
  const Sorted = sort === 'All' ? data : data.filter((item) => item.location === sort);
 

  const handleLogout = () => {
    document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setUserData({});
  };

  return (
    <div className="home">
      <nav>
        <h2>Welcome</h2>
        {userData.name && <p>Name: {userData.name}</p>}
        {userData.email && <p>Email: {userData.email}</p>}
        {userData.password && <p>Password: {userData.password}</p>}
        <button onClick={handleLogout} className="logout">Logout</button>
      
      </nav>
      


      <h1>Home</h1>
      
      <h2><Link to="/create">Click here</Link> to add a new event</h2>
      
      <p>Some rampwalk failures will be shown in this website.</p>
      <div className="img">image</div>
      <p>For more information, please refer to the README file.</p>
      <p>Thank you for using this website.</p>


      <button className="update">
  {data.length > 0 && (
    <Link to={`/update/${data[0]._id}`}>Update</Link>
  )}
</button>
<select  onChange={handleDropDown} value={sort} className="sort">
          <option value="All">All</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Jaipur">Jaipur</option>
        </select>



      {data[0]?.events?.map((item, index) => (
        <div className="data" key={index}>
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

