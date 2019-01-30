import React from 'react';

export default () => (
    <header id="site-header" role="banner">

        <div className="grid-contain">
            <a href="http://www.zuehlke.com/" className="zue-logo-head" target="_blank"></a>
        </div>

        <nav className="zue-meta-nav" role="navigation">
            <ul>
                <li>
                    <a href="http://www.zuehlke.com/" target="_blank">Zühlke Website</a>
                </li>

                <li>
                    <a href="http://www.zuehlke.com/jobs/" target="_blank">Jobs</a>
                </li>

                <li>
                    <a href="http://blog.zuehlke.com/en/" target="_blank">Blog</a>
                </li>
            </ul>
        </nav>

    </header>
);