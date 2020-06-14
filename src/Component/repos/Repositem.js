import React from 'react';
import PropTypes from 'prop-types';

export const Repositem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

Repositem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default Repositem;
