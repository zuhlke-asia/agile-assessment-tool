import React from 'react';

export default () => (

    <footer>

        <div className="row">
            <div className="small-12 medium-8 columns">
                <div className="row">
                    <div className="small-12 medium-2 columns">
                        <a href="http://zuehlke.com/" className="zue-logo-foot-wrap">
                            <img className="zue-logo-foot" alt="Zühlke" src={require('../assets/images/logo-zuhlke.svg')} />
                        </a>
                    </div>
                    <div className="small-12 medium-4 columns">
                        <ul className="zue-footer-list">
                            <li>
                                <a href="http://www.zuehlke.com/ch/en/markettrends/" rel="noopener">Markettrends</a>
                            </li>

                            <li>
                                <a href="http://www.zuehlke.com/ch/en/success-stories/" rel="noopener">Success
                                    Stories</a>
                            </li>

                            <li>
                                <a href="http://www.zuehlke.com/ch/en/industries/" rel="noopener">Industries</a>
                            </li>

                            <li>
                                <a href="http://www.zuehlke.com/ch/en/about-us/" rel="noopener">About us</a>
                            </li>

                            <li>
                                <a href="http://www.zuehlke.com/ch/en/about-us/contact/" rel="noopener">Contact</a>
                            </li>

                            <li>
                                <a href="http://www.zuehlke.com/ch/en/legal/" rel="noopener">Legal</a>
                            </li>

                            <li>
                                <a href="http://www.zuehlke.com/ch/en/terms-use/" rel="noopener">Terms of Use</a>
                            </li>

                            <li>
                                <a href="http://www.zuehlke.com/ch/en/privacy-policy/" rel="noopener">Privacy
                                    Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="small-12 medium-6 columns">
                        <ul className="zue-footer-list">
                            Open Source
                            <li>
                                <a href="https://github.com/Zuehlke" rel="noopener">Zühlke Github</a>
                            </li>

                            <li>
                                <a href="http://blog.zuehlke.com/all/" rel="noopener">Zühlke Github.io</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="small-12 medium-4 columns">
                <h6>Stay in touch</h6>
                <ul className="zue-plain-list zue-social-list">
                    <li><a href="http://blog.zuehlke.com/" title="Blog" rel="noopener"><i
                        className="icon-Blog"></i></a></li>
                    <li><a href="https://www.facebook.com/zuehlke.group" title="Facebook" rel="noopener"><i
                        className="icon-Facebook"></i></a></li>
                    <li><a href="https://twitter.com/zuehlke_group" title="Twitter" rel="noopener"><i
                        className="icon-Twitter"></i></a></li>
                    <li><a href="https://www.xing.com/" title="Xing" rel="noopener"><i className="icon-Xing"></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/company/z-hlke-group/" title="LinkedIn" rel="noopener"><i
                        className="icon-Linkedin"></i></a></li>
                    <li><a href="http://www.kununu.com/de/all/de/it/zuehlke-engineering/" title="Kununu"
                           rel="noopener"><i
                        className="icon-Kununu"></i></a></li>
                    <li><a href="http://www.slideshare.net/Zuehlke" title="Slideshare"><i className="icon-Slideshare"
                                                                                          rel="noopener"></i></a></li>
                    <li><a href="https://www.youtube.com/user/zuehlkeengineering" title="Youtube"><i
                        className="icon-Youtube"
                        rel="noopener"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);