export default {
  getRandomLinks(number) {
    const allLinks = [
      ...links.team,
      ...links['project/product'],
      ...links.organization,
      ...links.scrum,
    ];

    const resultLinks = [];
    while (allLinks.length > 0 && resultLinks.length < number) {
      const randomIndex = Math.floor(Math.random() * allLinks.length);
      resultLinks.push(allLinks[randomIndex]);
      allLinks.splice(randomIndex, 1);
    }

    return resultLinks;
  },
};


const links = {
  team: [
    {
      title: 'On Story Points and Distributions',
      url: 'http://theagilepirate.net/archives/1386',
      abstract: 'If you ask someone to estimate how long a bug will take to fix, without historic data you’ll get a '
                + '“how long is a piece of string” type answer...',
    },
    {
      title: 'Challenging Team Agility using White Elephant Principles',
      url: 'https://nomad8.com/articles/challenging-team-agility-using-white-elephant-principles',
      abstract: 'Here’s a handy way to collectively challenge each other to improve in a constructive way. '
                + 'This can be used as a retrospective activity, a team reset activity...',

    },
    {
      title: 'Useful metrics for agile teams',
      url: 'https://www.neilkillick.com/articles/useful-metrics-for-agile-teams',
      abstract: 'Here are some useful things for agile software development teams to be measuring in order to '
                + 'understand how effective they are being...',
    },
    {
      title: 'Why do we hold retrospectives?',
      url: 'https://www.silverstripe.org/blog/retrospectives-just-talk-therapy/',
      abstract: 'bout 2 minutes before commencing a recent retrospective, a team member '
                + 'challenged the need for the team to go into "talk therapy every 2 weeks”. He groaned...',
    },
    {
      title: 'Fun retrospective ideas',
      url: 'http://www.funretrospectives.com',
      abstract: 'The 3Ls is a great data gathering activity which emphasizes learning, '
                + 'one of the 3 Ls. The other Ls stand for: liked,  and lacked. Running the activity...',
    },
    {
      title: 'Approaches to estimating velocity',
      url: 'https://www.mountaingoatsoftware.com/blog/three-approaches-to-estimating-impact-of-holidays-and-time-off-on-velocity',
      abstract: 'Velocity can be a very useful predictor of how much work an agile team will complete '
                + 'in the future. It can be especially helpful...',
    },
    {
      title: 'Team Charter - build a better team together',
      url: 'https://www.boost.co.nz/blog/2017/04/team-charter-building-better-teams',
      abstract: 'Government of the team, by the team, for the team—that’s the Agile Team Charter.'
                + 'At Boost we usually wrap up our Project Kick-off workshops...',
    },
    {
      title: 'Leading high-performing teams',
      url: 'https://www.scrum.org/resources/blog/leading-high-performing-teams',
      abstract: 'The team could handle massive, unpredictable waves of customers and work under '
                + 'incredibly intense pressure for prolonged periods of time...',
    },
    {
      title: 'Upgrade your sprint planning',
      url: 'https://www.scrum.org/resources/blog/upgrade-your-sprint-planning-gain-engagement-your-development-team',
      abstract: 'In some teams around the world, Sprint Planning is seen as the most'
                + ' dreaded Scrum event and because of this reason, they’re thinking to drop Sprints...',
    },
    {
      title: 'Retrospective ideas',
      url: 'https://retromat.org/',
      abstract: ' Planning your next agile retrospective? Start with a random plan, change it to'
                + ' fit the team\'s situation, print it and share the URL. Or browse around for new ideas...',
    },
    {
      title: 'Spotify Rythm: How to create focus',
      url: 'https://blog.crisp.se/wp-content/uploads/2016/06/Spotify-Rhythm-Agila-Sverige.pdf',
      abstract: 'Agile techniques can be used to lead a company. Autonomy only scales if leaders'
                + 'provide high-level context. Use different time scales at different levels...',
    },
    {
      title: 'Atlassian: Leadership Team Health Monitor',
      url: 'https://www.atlassian.com/team-playbook/health-monitor/leadership-teams',
      abstract: 'With your team, read the definition of each attribute (displayed below) of healthy, high-performing teams out loud... ',
    },

  ],
  'project/product': [
    {
      title: 'Writing “As a User” does not make it a user story',
      url: 'https://gojko.net/2013/09/30/writing-as-a-user-does-not-make-it-a-user-story/',
      abstract: 'I got a question from one of the blog readers on how I would describe a spec with examples '
                + 'for a user-interface specific user story...',
    },
    {
      title: 'Project risk reduction with agile transparency',
      url: 'https://www.boost.co.nz/blog/2018/11/agile-transparency-reduces-project-risk',
      abstract: 'In our post on reducing software development risk with Agile prioritisation...',
    },
    {
      title: 'User story basics',
      url: 'https://www.boost.co.nz/blog/2018/06/user-stories-in-scrum',
      abstract: 'A user story in Scrum is an evolving description of something your customer '
                + 'will do when using your product.  At its heart is...',
    },
    {
      title: 'User story prioritisation',
      url: 'https://www.boost.co.nz/blog/2017/05/prioritise-user-stories',
      abstract: 'As a team, you’ll decide which of the stories deliver the most value, most quickly.'
                + 'Next you’ll find the smallest collection of these stories...',
    },
    {
      title: 'Beyond the UX tipping point (video)',
      url: 'https://player.vimeo.com/video/209323782',
      abstract: 'For the longest time, making a great experience for the user was a business-strategy luxury item. '
                + 'A great product only had to work and ship... ',
    },
    {
      title: 'Defining a project\'s "Good Enough"',
      url: 'https://medium.com/user-interface-22/the-back-up-question-defining-a-projects-good-enough-4ae29e72052b',
      abstract: 'There was thinking. There were discussions. That all'
                + ' happened before they came to us. Somewhere in there, they honed in on their solution...',
    },
    {
      title: 'Why Your Product Backlog Should Look Like an Iceberg',
      url: 'https://www.mountaingoatsoftware.com/blog/why-your-product-backlog-should-look-like-an-iceberg',
      abstract: 'At any given time, an agile product backlog will contain a prioritized list of desired features...',
    },
    {
      title: 'Atlassian: Leadership Project Health Monitor',
      url: 'https://www.atlassian.com/team-playbook/health-monitor/project-teams',
      abstract: 'A Health Monitor grid is where you record the team ratings for each attribute. It is best'
                + ' to keep a reference of past Health Monitor ratings so you can see...',
    },
    {
      title: 'Continuous Integration',
      url: 'https://less.works/less/technical-excellence/continuous-integration.html',
      abstract: 'With CI, developers gradually grow a stable system by working in small batches and short cycles–a lean theme. '
                + 'This enables teams to work on shared code and increases...',
    },
    {
      title: 'Estimating is often helpful. Estimates are often not.',
      url: 'http://www.estherderby.com/2012/03/estimating-is-often-helpful-estimates-are-often-not.html',
      abstract: 'Estimating helps when the process of estimating builds shared understanding among the people '
                + 'who want the work done and the people doing the work...',
    },

  ],
  organization: [
    {
      title: '8 signs of an agile organisation',
      url: 'https://www.neilkillick.com/articles/8-signs-of-an-agile-organisation',
      abstract: 'When we think about what makes Agile such an effective approach to software product development,'
                + ' we think about a single team, working toward a single product vision...',
    },
    {
      title: 'Why aren\'t we getting results from our agile transition?',
      url: 'https://www.neilkillick.com/articles/why-aren-t-we-getting-results-from-our-agile-transition',
      abstract: 'In my work as an independent agile consultant, senior or middle managers from companies... ',
    },
    {
      title: '8 ways to "go agile" without an "Agile transformation"',
      url: 'https://www.neilkillick.com/articles/8-ways-to-go-agile-without-an-agile-transformation',
      abstract: 'Many organisation are embarking on an “Agile Transformation” nowadays...',
    },
    {
      title: 'Build trust with one-on-one meetings',
      url: 'https://www.boost.co.nz/blog/2017/11/build-trust-with-one-on-ones',
      abstract: 'Do you feel like you’re not fully engaged with your team? Are you only having catch-ups when '
                + 'there’s a problem or when their performance review comes up...',
    },
    {
      title: 'Agile mastery for organisations',
      url: 'https://www.silverstripe.org/blog/agile-mastery-the-dreyfus-model-in-practice/',
      abstract: 'One of the most common comments I hear when talking Agile practices with organisations is that they '
                + '‘have tried Agile but it didn’t work’...',
    },
    {
      title: 'Three Questions to Determine If an Organization Is Agile',
      url: 'https://www.mountaingoatsoftware.com/blog/three-questions-to-determine-if-an-organization-is-agile',
      abstract: 'Assessing whether an organization is agile is difficult. An organization could be agile...',
    },
    {
      title: 'McKinsey: Leading agile Transformation',
      url: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/organization/our%20insights/leading%20agile%20transformation%20the%20new%20capabilities%20leaders%20need%20to%20build/leading-agile-transformation-the-new-capabilities-leaders-need-to-build-21st-century-organizations.ashx',
      abstract: 'To survive and thrive today, many organizations are undertaking the fundamental'
                + ' shift from a traditional organizational model designed...',
    },
    {
      title: 'Scaling Agile at Spotify',
      url: 'https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf',
      abstract: 'Dealing with multiple teams in an product development organization is always a challenge.'
                + 'One of the most impressive example we\'ve seen today is Spotify...',
    },
    {
      title: 'Spotify Engineering Culture (Video)',
      url: 'https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/',
      abstract: 'This is a journey in progress, not a journey completed, and there’s a lot of variation from squad to squad...',
    },
    {
      title: 'Evolving agile leadership (video)',
      url: 'https://www.youtube.com/watch?v=aCsGsX9YXJc',
      abstract: '',
    },
    {
      title: 'Modern agile',
      url: 'https://www.youtube.com/watch?v=rhCCxx0CXEc',
      abstract: '',
    },
    {
      title: 'Team performance / management',
      url: 'http://www.estherderby.com/2012/02/but-are-they-working-hard.html',
      abstract: '',
    },

  ],
  scrum: [
    {
      title: 'Commitment vs. Forecast',
      url: 'https://www.scrum.org/resources/commitment-vs-forecast',
      abstract: 'One of the most controversial updates to the 2011 Scrum Guide '
                + 'has been the removal of the term “commit” in favor of “forecast”... ',
    },
    {
      title: 'Scrum Master Advice',
      url: 'https://www.scrum.org/resources/blog/path-scrum-mastery-avoiding-5-common-scrum-master-traps',
      abstract: 'In my career, I have had the great privilege to witness different '
                + 'companies undergo many different phases of agile transformations...',
    },
    {
      title: 'How to run a sprint planning',
      url: 'https://nomad8.com/articles/how-to-run-a-sprint-planning-meeting-the-way-i-like-it',
      abstract: 'This is a sample agenda for a sprint planning meeting. '
                + 'Depending on your context you will have to change the details...',
    },
    {
      title: 'Ways to measure impact of a scrum coach',
      url: 'https://illustratedagile.com/2016/04/25/8-ways-measure-impact-agile-coach/',
      abstract: 'For those of us who are practicing Agile coaches, you know the truth in this quote.'
                + ' We are often gifted with a short window of time to be a catalyst...',
    },
    {
      title: 'The Role of a Product Owner: Responsibilities & Characteristics',
      url: 'https://www.frontrowagile.com/blog/posts/74-the-role-of-a-product-owner-responsibilities-and-characteristics',
      abstract: 'In the Scrum framework, the product owner is the voice of the customer...',
    },
  ],
};
