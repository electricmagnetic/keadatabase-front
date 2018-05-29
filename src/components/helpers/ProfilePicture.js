import React from 'react';
import PropTypes from 'prop-types';

import placeholder_large from '../../assets/img/placeholder_large.png';
import placeholder_thumbnail from '../../assets/img/placeholder_thumbnail.png';
import './ProfilePicture.css';

const ProfilePicture = ({ bird, size, classNames }) => {
  /* Helper function for displaying profile pictures in all cases */

  // Define default images
  var src = '';

  if (size === 'large') src = placeholder_large;
  else if (size === 'thumbnail') src = placeholder_thumbnail;
  else src = placeholder_thumbnail;

  // Find out if bird has profile picture(s)
  var profilePictures = [];

  if (bird.bird_extended && bird.bird_extended.profile_picture) {
    profilePictures = bird.bird_extended.profile_picture;
  }

  // Override default images if profile picture(s) found
  if (size in profilePictures) {
    src = profilePictures[size];
  }

  // Define alt text
  var alt = bird.name;

  // Define classes
  // TODO: class logic here

  return (
    <img
      src={ src }
      alt={ alt }
      className={ classNames.join(' ') }
    />
  );
};

ProfilePicture.propTypes = {
  bird: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  classNames: PropTypes.array.isRequired
}

ProfilePicture.defaultProps = {
  size: 'thumbnail',
  classNames: ['']
}

export default ProfilePicture;
