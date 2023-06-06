import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, [searchTerm]);

  const handleShowClick = (showId) => {
    navigate(`/show/${showId}`);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.search.value);
  };

  return (
    <div>
      <h1>TV Shows</h1>
      <form onSubmit={handleSearch}>
        <div className='search'>
          <input className='input' type="text" name="search" placeholder="Search..." />
          <button className='submit' type="submit">Search</button>
        </div>
        
      </form>
      <ul>
        {shows.map(({ show }) => (
          <li className="list" key={show.id} >
            {show.name}
            <button onClick={() => handleShowClick(show.id)}> Know more </button>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default ShowList;
