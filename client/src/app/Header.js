import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ showBanner }) => (
  <div>
    <header id="site-header" role="banner">
      <div className="grid-contain">
        <a href="https://www.zuehlke.com/asia/en/" className="zue-logo-head" rel="noopener">
          &nbsp;
        </a>
      </div>

      <nav className="zue-meta-nav" role="navigation">
        <ul>
          <li>
            <a href="https://www.zuehlke.com/asia/en/" rel="noopener">
              Zühlke Website
            </a>
          </li>
          <li>
            <a href="http://www.zuehlke.com/jobs/" rel="noopener">
              Jobs
            </a>
          </li>
          <li>
            <a href="http://blog.zuehlke.com/en/" rel="noopener">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <div id="top-bar">
        <div id="top-bar-inner">
          <nav id="zue-main-nav" role="navigation">
            <ul>
              <li className="child sibling">
                <a href="https://www.zuehlke.com/asia/en/">Zuhlke Singapore</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <div className="zue-brick zue-branding zue-branding-image">
      <div className="zue-branding-inner" style={showBanner ? { opacity: 1 } : { opacity: 0 }}>
        <h2 className="headersize-1 no-margin">
          <span>
            Our self-assessment tool will provide some insights into the agility of your
            organisation. Be honest - we won&apos;t judge!
          </span>
          <br />
          <span>It shouldn&apos;t take any longer than 5-10 minutes.</span>
        </h2>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  showBanner: PropTypes.bool.isRequired,
};

export default Header;
