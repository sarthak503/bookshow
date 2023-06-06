import React from 'react';
import ShowList from './ShowList';

const ShowListPage = ({ history }) => {
  return (
    <div>
      <h1>Show List Page</h1>
      <ShowList history={history} />
    </div>
  );
};

export default ShowListPage;
