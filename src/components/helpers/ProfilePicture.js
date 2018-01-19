import React, { Component } from 'react';
import PropTypes from 'prop-types';

import placeholder_large from '../../assets/img/placeholder_large.png';
import placeholder_thumbnail from '../../assets/img/placeholder_thumbnail.png';

import './ProfilePicture.css';

class ProfilePicture extends Component {
  /* Provide bird profile picture, given a profile picture object and size. Returns placeholder otherwise. */

  render() {
    const { profilePicture, size, isThumbnail, isCircle, isDead } = this.props;

    var selectedPicture = '';
    var alt = '';
    var classNames = ['img-responsive'];

    if (size in profilePicture) {
      selectedPicture = profilePicture[size];
      alt = this.props.alt;
    }
    else {
      selectedPicture = (size === 'large' ? placeholder_large : placeholder_thumbnail);
      alt = 'Placeholder';
    }

    if (isThumbnail) {
      classNames.push('img-thumbnail');
    }
    if (isCircle) {
      classNames.push('img-circle');
    }
    if (isDead) {
      classNames.push('isDead');
    }

    return(
      <div className="profile-picture">
        <img
          src={ selectedPicture }
          alt={ alt }
          className={ classNames.join(' ') }
        />
      </div>
    );
  }
}

ProfilePicture.propTypes = {
  profilePicture: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isThumbnail: PropTypes.bool.isRequired,
  isCircle: PropTypes.bool.isRequired,
  isDead: PropTypes.bool.isRequired
}

ProfilePicture.defaultProps = {
  profilePicture: {},
  size: 'thumbnail',
  alt: '',
  isThumbnail: false,
  isCircle: false,
  isDead: false
}

export default ProfilePicture;

// { has_profile_picture
//   ? <img src={ bird.bird_extended.profile_picture.large } alt={ bird.name } className="img-thumbnail img-responsive" />
//   : <img src={ placeholder } alt="placeholder" className="img-thumbnail img-responsive" />
// }

// var profile_picture = placeholder;
// var profile_picture_alt = 'placeholder';
//
// if (bird.bird_extended) {
//   const profile_picture = bird.bird_extended.profile_picture;
//   if ('large' in profile_picture) {
//     has_profile_picture = true;
//   }
// }
