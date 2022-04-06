import React from 'react';
import Metadata from '../../components/Layouts/Metadata';
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Metadata title={'profile'} />
          <div className="container container-fluid">
            <h2 className="mt-5 ml-5">My Profile</h2>
            <div className="row justify-content-around mt-5 user-info">
              <div className="col-12 col-md-3">
                <figure className="avatar avatar-profile">
                  <img
                    className="rounded-circle img-fluid"
                    src={user.avatar.url}
                    alt={user.userName}
                  />
                </figure>
                <Link
                  to="/profile/update"
                  id="edit_profile"
                  className="btn btn-primary btn-block my-5"
                >
                  Edit Profile
                </Link>
              </div>

              <div className="col-12 col-md-5">
                <h4>Full Name</h4>
                <p>{user.userName}</p>

                <h4>Email Address</h4>
                <p>{user.email}</p>

                <h4>Joined On</h4>
                <p>{String(user.createAt).substring(0, 10)}</p>
                {user.role !== 'admin' && (
                  <Link
                    to="/orders/me"
                    className="btn btn-danger btn-block mt-5"
                  >
                    My Orders
                  </Link>
                )}

                <Link
                  to="password/update"
                  className="btn btn-primary btn-block mt-3"
                >
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;