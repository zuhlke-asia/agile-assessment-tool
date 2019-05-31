import React from 'react';
import linkProvider from './linkProvider';

export default () => {
  const linksToDisplay = linkProvider.getRandomLinks(4);
  return (
    <div className="linkSection">
      <h3 className="color-primary">Find out more about Agile</h3>
      <ul className="medium-block-grid-2">
        {
          linksToDisplay.map((item, i) => (
            <li className="zue-box-outer card" key={`${item.title}_${i}`}>
              <a
                className="zue-box-cta font-opensans-bold"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="zue-box-inner">
                  <div className="zue-box-content box-padding-medium">
                    <h4 className="font-opensans">{item.title}</h4>
                    <p className="teaser-text color-white">
                      <span className="text-small-up">{item.abstract}</span>
                      <span className="text-medium-up">{item.abstract}</span>
                      <span className="text-large-up">{item.abstract}</span>
                    </p>
                    <span>Discover now</span>
                  </div>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
