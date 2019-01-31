import React from 'react';

export default () => (

    <div className="" id="outer">
        <header id="site-header" role="banner">

            <div className="grid-contain">
                <a href="http://www.zuehlke.com/" className="zue-logo-head" rel="noopener">&nbsp;</a>
            </div>

            <nav className="zue-meta-nav" role="navigation">
                <ul>
                    <li>
                        <a href="http://www.zuehlke.com/" rel="noopener">Zühlke Website</a>
                    </li>
                    <li>
                        <a href="http://www.zuehlke.com/jobs/" rel="noopener">Jobs</a>
                    </li>
                    <li>
                        <a href="http://blog.zuehlke.com/en/" rel="noopener">Blog</a>
                    </li>
                </ul>
            </nav>

            <div id="top-bar">
                <div id="top-bar-inner">
                    <nav id="zue-main-nav" role="navigation">
                        <ul>
                            <li className="child sibling">
                                <a ui-sref="main.contributions">Contributions</a>
                            </li>

                            <li className="child sibling">
                                <a ui-sref="main.people">People</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>


        <div className="zue-brick zue-branding zue-branding-image">
            <div className="zue-branding-inner">
                <h2 className="headersize-1 no-margin  ">We have created a super awesome and cool agile self assessment
                tool which allows you to self assess your agileness in a couple of minutes, this is such a great sentence
                I'm sorry I just need to use some space.</h2>
            </div>
        </div>

    </div>

);