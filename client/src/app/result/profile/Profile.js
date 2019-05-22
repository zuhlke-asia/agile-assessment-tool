import React from 'react';
import profileInformation from './profileInformation';

const profilePics = require.context('../../../assets/images/profile', true);

export default () => (
  <div className="contacts">
    <div className="sectionName">
      <h3><span className="color-primary"> Our experts</span></h3>
      <p>
Find out how Zuhlke can help your organisation get to the next level. Contact one of our experienced
                consultants today.
      </p>
    </div>
    <div className="wrapper">
      {
        profileInformation
          .filter((p, i) => i < 2)
          .map((profileInfo, i) => {
            const img = profilePics(profileInfo.pic);
            return (
              <div className="profile" key={`${profileInfo}_${i}`}>
                <div>
                  <img src={img} alt={`${profileInfo.name}`} />
                </div>
                <div className="info">
                  <h5 className="name">{profileInfo.name}</h5>
                  <p className="position">{profileInfo.position}</p>
                  <p className="contactInfo">
                    <i className="icon-E-mail" />
                    <span>{profileInfo.email}</span>
                  </p>
                  {profileInfo.phone
                                    && (
                                      <p className="contactInfo">
                                        <i className="icon-Phone" />
                                        <span>{profileInfo.phone}</span>
                                      </p>
                                    )}
                  <ul className="our-experts-social-icons zue-plain-list zue-social-list">
                    {profileInfo.linkedin
                                        && (
                                          <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={profileInfo.linkedin}
                                            title="Linkedin"
                                          >
                                            <i className="icon-Linkedin" />
                                          </a>
                                        )}
                  </ul>
                </div>
              </div>
            );
          })
      }
    </div>
  </div>
);
