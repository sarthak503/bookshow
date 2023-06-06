import React from 'react';
import ShowDetails from './ShowDetails';

const ShowDetailsPage = ({ match, history }) => {
  return (
    <div>
      <h1>Show Details Page</h1>
      <ShowDetails match={match} history={history} />
    </div>
  );
};

export default ShowDetailsPage;
