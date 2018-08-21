import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import placeholder_large from '../../assets/img/placeholder_large.png';
import placeholder_thumbnail from '../../assets/img/placeholder_thumbnail.png';
import './ProfilePicture.css';

const ProfilePicture = ({ bird, size, classNames, asLink, isDead }) => {
  /* Helper function for displaying profile pictures in all cases */

  // Create container class array
  var containerClassNames = ['ProfilePicture'];

  // Define default images
  var src = '';

  if (size === 'large') src = placeholder_large;
  else if (size === 'thumbnail') src = placeholder_thumbnail;
  else src = placeholder_thumbnail;

  // Find out if bird has profile picture(s)
  var profilePictures = [];

  // Check if bird (SightedBirds won't always have a bird object)
  if (bird) {
    if (bird.bird_extended && bird.bird_extended.profile_picture) {
      profilePictures = bird.bird_extended.profile_picture;
    }

    // Override default images if profile picture(s) found
    if (size in profilePictures) {
      src = profilePictures[size];
    }

    // Define alt text
    var alt = bird.name;

    if (isDead) {
      containerClassNames.push('isDead');
    }
  }

  // Create image object
  const image = <img
    src={ src }
    alt={ alt }
    className={ classNames.join(' ') }
  />;

  return (
    <div className={ containerClassNames.join(' ') }>
      { asLink ? <Link to={ '/birds/' + bird.slug }>{ image }</Link> : image }
      { isDead &&
        <span className="deadIndicator"><i className="fas fa-times fa-3x"></i></span>
      }
    </div>
  );

};

ProfilePicture.propTypes = {
  bird: PropTypes.object,
  size: PropTypes.string.isRequired,
  classNames: PropTypes.array.isRequired,
  asLink: PropTypes.bool.isRequired,
  isDead: PropTypes.bool.isRequired
}

ProfilePicture.defaultProps = {
  size: 'thumbnail',
  classNames: [''],
  asLink: false,
  isDead: false
}

export default ProfilePicture;
