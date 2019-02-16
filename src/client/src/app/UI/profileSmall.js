import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    contacts:{
        margin: '40px 0px'
    },
    wrapper: {
        margin: '20px 0px',
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent:'space-between',
        '@media screen and (max-width: 962px)': {
            '&': {
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center',
            },
        },
    },
    info: {
        margin: '0px 20px',
    },
    profile:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        '& img':{
            width: '160px',
            height: '160px',
            objectFit: 'cover',
            maxWidth: 'none',
            borderRadius: '100%',
        },
        '@media screen and (max-width: 497px)': {
            '&': {
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center',
            },
        },
    },
    name: {
        marginTop: '10px',
        marginBottom: 0,
        color: '#ff820a',
        fontSize: '26px',
    },
    position: {
        fontSize: '14px',
        color: '#9B9B9B',
    },
    contactInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '7px',
        color: '#ff820a',
        fontWeight: 'bold',
        '& i': {
            display: 'flex',
            fontSize: '21px',
            marginBottom: '-4px',
        },
        '& span': {
            display: 'flex',
            marginLeft: '8px',
            fontSize: '15px',
        }
    }
};

const profilePics = require.context('../../assets/images/profile', true);

const ProfileSmall = props => {

    const {classes, profileArray} = props;
    return (
        <div className={classes.contacts}>
            <div className={classes.wrapper}>
                {
                    profileArray.map((profileInfo, i) => {
                        const img = profilePics(profileInfo.pic);
                        return (<div className={classes.profile} id={`${profileInfo}_${i}`}>
                                <div>
                                    <img src={img} alt={`${classes.name}`}/>
                                </div>
                                <div className={classes.info}>
                                    <h5 className={classes.name}>{profileInfo.name}</h5>
                                    <p className={classes.position}>{profileInfo.position}</p>
                                    <p className={classes.contactInfo}>
                                        <i className="icon-E-mail"/>
                                        <span>{profileInfo.email}</span>
                                    </p>
                                    <p className={classes.contactInfo}>
                                        <i className="icon-Phone"/>
                                        <span>{profileInfo.phone}</span>
                                    </p>
                                    <ul className="our-experts-social-icons zue-plain-list zue-social-list">
                                        <a target="_blank" rel="noopener noreferrer" href={profileInfo.linkedin}
                                           title="Linkedin">
                                            <i className="icon-Linkedin"/>
                                        </a>
                                    </ul>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
};

export default injectSheet(styles)(ProfileSmall);