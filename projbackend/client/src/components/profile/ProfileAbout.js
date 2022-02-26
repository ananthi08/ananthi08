import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({ profile : {
    height,
    mothertongue,
    age,
    religion,
    profession : {
            
    },
    user : {
        name
    }
}}) => {
  return (
  <Fragment>
<div class="profile-about bg-light p-2">
          <h2 class="text-primary">Mothertongue </h2>  
          <p>{mothertongue}
          </p>
        <h2 class="text-primary">Religion</h2>
          <div >
              {religion}
          </div>
        </div>
  </Fragment>
  )
};

ProfileAbout.propTypes = {};

export default ProfileAbout;
