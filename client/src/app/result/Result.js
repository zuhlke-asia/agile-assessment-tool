import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Evaluation from './evaluation/Evaluation';
import Link from './link/Link';
import Profile from './profile/Profile';
import '../../styles/result.scss';
import Feedback from './feedback/Feedback';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    // since we are not using a router, the scroll position is preserved when we change
    // the view, so we need to reset to the top of the content.
    const contentTop = this.scrollRef.offsetTop;
    const currentTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentTop > contentTop) {
      window.scrollTo(0, contentTop);
    }
  }

  async onSubmitFeedback(feedback) {
    const { surveyId } = this.props;
    await axios.post('api/feedback', { ...feedback, surveyId });
  }

  render() {
    const { evaluations } = this.props;
    return (
      <div
        id="pagecontent"
        ref={(ref) => {
          this.scrollRef = ref;
        }}
      >
        <div className="github-content mobile-padding row zue-teaser-medium-boxes zue-boxes-container ng-scope">
          <div className="result-content">
            <div className="result-left">
              <h3 className="color-primary">Thank you for participating!</h3>
              {evaluations && <Evaluation evaluations={evaluations} />}
              <Feedback onSubmit={(feedback) => this.onSubmitFeedback(feedback)} />
              <Link />
            </div>
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Result;
