import React from 'react';

export default () => (

    <div className="" id="outer">
        <header id="site-header" role="banner">

            <div className="grid-contain">
                <a href="http://www.zuehlke.com/" className="zue-logo-head" target="_blank"></a>
                <div id="mob-nav-toggler" data-offcanvas-trigger-class="sl_offcanvas-open-right"
                     ng-click="showSidebar()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
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

            <div id="top-bar" ng-include="'components/navbar/navbar.html'"></div>

        </header>


        <div className="zue-brick zue-branding zue-branding-image">
            <div className="zue-branding-inner">
                <h2 className="headersize-1 no-margin  ">We have created a super awesome and cool agile self assessment
                tool which allows you to self assess your agileness in a couple of minutes, this is such a great sentence
                I'm sorry I just need to use some space.</h2>
            </div>
        </div>

        <div id="pagecontent" ui-view="pagecontent"></div>
        <div className="zue-brick zue-col-area bg-gray-light zue-oss-header">
            <div className="row">
                <div>
                    <h5 className="font-opensans"></h5>
                    <div className="columns">
                        <p className="headersize-6"><span>Zühlke is a </span> <strong> service provider for innovation
                            projects</strong>. By combining both <strong>business and technology expertise</strong>, we
                            create solutions that satisfy our customers. We develop <strong>financially successful
                                products, services and business models</strong> for today’s digital world – from coming
                            up with the initial idea through to the implementation and operation. </p>


                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div ng-include="'components/footer/footer.html'" className="row"></div>
        </footer>

        <a id="sl_offcanvas-overlay"></a>
    </div>

);