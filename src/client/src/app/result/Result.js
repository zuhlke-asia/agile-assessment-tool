import React from 'react';
import Evaluation from './evaluation/Evaluation';
import Link from './link/Link';
import Profile from './profile/Profile';
import '../../styles/result.scss';

export default class Result extends React.Component {

    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
    }

    componentDidMount() {
        // since we are not using a router, the scroll position is preserved when we change
        // the view, so we need to reset to the top of the content.
        const contentTop = this.scrollRef.offsetTop;
        const currentTop = document.documentElement.scrollTop;

        if (currentTop > contentTop) {
            window.scrollTo(0, contentTop);
        }

    }

    render() {
        return (
            <div id="pagecontent" ref={ (ref) => this.scrollRef = ref }>
                <div className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
                    <div className="result-content">
                        <div className="result-left">
                            <h3 className="color-primary">Thank you for participating!</h3>
                            <Evaluation evaluations={this.props.evaluations}/>
                            <Link/>
                        </div>
                        <Profile/>
                    </div>
                </div>
            </div>
        );
    }

}