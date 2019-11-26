import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: '#ff9900' };
    else return { color: '#ffffff' };
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark border-bottom border-warning">
            <li className="nav-item">
                <Link className="nav-link font-weight-bold" style={isActive(history, '/')} to="/">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className={history.location.pathname === '/users' ? 'active nav-link font-weight-bold' : 'not-active nav-link font-weight-bold'}
                    to="/users"
                    style={isActive(history, `/users`)}
                >
                    Users
                </Link>
            </li>

            <li className="nav-item">
                <Link to={`/post/create`} style={isActive(history, `/post/create`)} className="nav-link font-weight-bold">
                    Create Post
                </Link>
            </li>

            {!isAuthenticated() && (
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold" style={isActive(history, '/signin')} to="/signin">
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link font-weight-bold" style={isActive(history, '/signup')} to="/signup">
                            Sign Up
                        </Link>
                    </li>
                </React.Fragment>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 'admin' && (
                <li className="nav-item">
                    <Link to={`/admin`} style={isActive(history, `/admin`)} className="nav-link font-weight-bold">
                        Admin
                    </Link>
                </li>
            )}

            {isAuthenticated() && (
                <React.Fragment>
                    {/* <li className="nav-item">
                        <Link to={`/findpeople`} style={isActive(history, `/findpeople`)} className="nav-link">
                            Find People
                        </Link>
                    </li> */}

                    <li className="nav-item">
                        <Link
                            to={`/user/${isAuthenticated().user._id}`}
                            style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                            className="nav-link font-weight-bold"
                        >
                            {`${isAuthenticated().user.name}'s profile`}
                        </Link>
                    </li>

                    <li className="nav-item">
                        <span
                            className="nav-link font-weight-bold"
                            style={{ cursor: 'pointer', color: '#fff' }}
                            onClick={() => signout(() => history.push('/'))}
                        >
                            Sign Out
                        </span>
                    </li>
                </React.Fragment>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);
