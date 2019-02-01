[![Build Status](https://travis-ci.com/enpayne/agile-assessment-tool.svg?token=XM7zo21DjfuY5wpehaVz&branch=develop)](https://travis-ci.com/enpayne/agile-assessment-tool)

# agile-assessment-tool
Agile Assessment Tool Zuhlke Singapore. This tool serves the purpose to assess the customer's knowledge
about the agile methodology and also provide an entry point for Zuhlke's business.

## Development Guide

### Prerequisites
You will need Docker installed.

For Docker, please refer to [Mac Install](https://docs.docker.com/docker-for-mac/install/) and [Windows Install](https://docs.docker.com/docker-for-windows/install/). 


### Development Workflow

1. Clone the repository to you local repository and navigate to the project folder.

2. Start the docker containers by typing `$ docker-compose up`  in the terminal. Use `Ctrl + c` to shutdown the docker containers.

3. Go to a browser to look at *localhost:3000* to see the start page.

### Deployment Workflow

1. It is currently necessary to build the application locally in order to release it. This is because 
azure can't handle the amount of files installed by npm, it would take forever with the plan we have. Travis CI can and should be used for
this in the future.
```
$ cd server/  
$ npm run build:prod
```  
2. Push the changes to your feature branch.

3. Open a pull request to merge into develop branch. You won't be able to merge it before all tests have passed on Travis.

4. Azure is connected to the git repo and will take care of the deployment.

5. Go the [Zuhlke Agile Assessment Tool Website](https://agileassessment-prod.azurewebsites.net) to verify the change.

