import React, { Fragment, Component } from 'react';
import Spinner from '../Layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getuser(this.props.match.params.login);
    this.props.getuserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    User: PropTypes.object.isRequired,
    Repos: PropTypes.array.isRequired,
    getuser: PropTypes.func.isRequired,
    getuserRepos: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      company,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.User;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          back to search
        </Link>
        hireable: {''}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='roung-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {company && (
                  <Fragment>
                    <strong>username:</strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>website:</strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>followers: {followers}</div>
          <div className='badge badge-success'>following: {following}</div>
          <div className='badge badge-light'>public-repos: {public_repos}</div>
          <div className='badge badge-dark'>public Gists: {public_gists}</div>
        </div>
        <Repos Repos={repos} />
      </Fragment>
    );
  }
}

export default User;
