import React from 'react';
import injectSheet from 'react-jss';


const styles = {
    card: {
        height: '333px',
    },
    linkSection:{
        marginTop: '40px',
    }
};

const Link = props => {

    const {classes, linkArray} = props;

    return (
        <div className={classes.linkSection}>
            <h3> <span className='color-primary'>Find more about Agile</span></h3>
            <ul className="medium-block-grid-2 large-block-grid-3">
                {
                    linkArray.map((item, i) =>
                        (<li className={`zue-box-outer ${classes.card}`} key={`${item.title}_${i}`}>
                            <a className="zue-box-cta font-opensans-bold"
                               onClick={()=> window.open(item.url, "_blank")}>
                                <div className="zue-box-inner">
                                    <div className="zue-box-content box-padding-medium">
                                        <h4 className="font-opensans">{item.title}</h4>
                                        <p className="teaser-text color-white">
                                            <span className="text-small-up">{item.abstract}</span>
                                            <span className="text-medium-up">{item.abstract}</span>
                                            <span className="text-large-up">{item.abstract}</span>
                                        </p>
                                        Discover now
                                    </div>
                                </div>
                            </a>
                        </li>)
                    )
                }
            </ul>
        </div>);

};

export default injectSheet(styles)(Link);

