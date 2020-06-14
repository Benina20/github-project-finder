import React from 'react';
import Useritem from './Useritem';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ user, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {user.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  user: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
