import React from 'react';
import profiles from './profiles';

const profilePics = require.context('../../../assets/images/profile', true);

export default () => (
  <div className="contacts">
    <div className="experts">
      <h3 className="color-primary">Our experts</h3>
      <p>
        Find out how Zuhlke can help your organisation get to the next level. Contact one of our
        experienced consultants today.
      </p>
    </div>
    <div className="profiles">
      {profiles.map((profile) => (
        <div className="profile" key={profile.name}>
          <div>
            <img src={profilePics(profile.pic)} alt={`${profile.name}`} />
          </div>
          <div className="info">
            <h5 className="name">{profile.name}</h5>
            <p className="position">{profile.position}</p>
            <p className="contactInfo">
              <i className="icon-E-mail" />
              <span>{profile.email}</span>
            </p>
            {profile.phone && (
              <p className="contactInfo">
                <i className="icon-Phone" />
                <span>{profile.phone}</span>
              </p>
            )}
            <ul className="our-experts-social-icons zue-plain-list zue-social-list">
              {profile.linkedin && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profile.linkedin}
                  title="Linkedin"
                >
                  <i className="icon-Linkedin" />
                </a>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);
