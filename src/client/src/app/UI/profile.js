import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    roundButton: {
        display: 'inline-block',
        width: '47px',
        height: '47px',
        color: 'white',
        fontSize: '1.875rem',
        lineHeight: '47px',
        textAlign: 'center',
        backgroundColor: '#ff820a',
        borderRadius: '1000px',
    },
    contactLinks: {
        width: '100%',
    }
};

const profilePics = require.context('../../assets/images/profile', true);

const Profile = props => {

    const {classes, profileInfo} = props;

    const img = profilePics(profileInfo.pic);
    return (
        <div className="small-12 columns zue-box-contact zue-box-contact--citation">
            <div className="row">

                <div className="small-12 medium-4 columns col-1">
                    <div className="contact-portrait">
                        <img
                            src={img}
                            alt="profile pic" width="100%"/>
                    </div>
                </div>

                <div className="small-12 medium-8 large-4 columns col-1">
                    <div className="contact-details-outer box-padding-medium">
                        <div className="contact-details space-3">
                            <h3 className="contact-name">{profileInfo.name}</h3>
                            <p>
                                <span className="contact-function">{profileInfo.position}</span>
                                <br/>
                                <span className="contact-dept color-primary">{profileInfo.department}</span>
                            </p>
                        </div>

                        <div>
                            <a href={`mailto:${profileInfo.email}`}
                               className={`button track track-contact track-email ${classes.contactLinks}`}>
                                <i className="icon-E-mail"/> Send a message</a>
                            <a href={`tel:${profileInfo.phone}`}
                               className={`button track track-contact track-tel ${classes.contactLinks}`}><i
                                className="icon-Phone"/> {profileInfo.phone}</a>

                        </div>

                        <div className="contact-social-links">
                            <a target='_blank' rel="noopener noreferrer"
                               className={`round-icon track track-contact track-link ${classes.roundButton}`}
                               href={profileInfo.linkedin} title="Linkedin">
                                <i className="icon-Linkedin"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="small-12 medium-4 columns col-1 hide-for-medium-down"/>
            </div>
        </div>)

};


export default injectSheet(styles)(Profile);