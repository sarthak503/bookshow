import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const { showId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.log(error));
  }, [showId]);

  const handleBookTicket = () => {
    // Handle booking ticket functionality here
    // You can use the show details in the `show` state

    // Example: Redirect to a booking form page with pre-filled show details
    alert("Service Unavailable!")
    navigate(`/`);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <div className='card'>
      <div className='displayImg'>
      <img src={show.image?.medium} alt={show.name} />
      </div>
      <div className='displayP'>
      <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
      </div>
      </div>
      <button className='book' onClick={handleBookTicket}>Book Ticket</button>
      <Footer/>
    </div>
  );
};

export default ShowDetails;
