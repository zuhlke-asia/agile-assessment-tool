[![Build Status](https://travis-ci.com/enpayne/agile-assessment-tool.svg?token=XM7zo21DjfuY5wpehaVz&branch=develop)](https://travis-ci.com/enpayne/agile-assessment-tool)

# agile-assessment-tool
Agile Assessment Tool Zuhlke Singapore. This tool serves the purpose to assess the customer's knowledge
about the agile methodology and also provide an entry point for Zuhlke's business.

## Development Guide

### Prerequisites
You will need Docker installed.

For Docker, please refer to [Mac Install](https://docs.docker.com/docker-for-mac/install/) and [Windows Install](https://docs.docker.com/docker-for-windows/install/). 


### Local Development Workflow

1. Clone the repository to you local repository and navigate to the project folder.

2. Start the docker containers by typing `$ docker-compose up`  in the terminal. Use `Ctrl + c` to shutdown the docker containers.

3. Go to a browser to look at *localhost:3000* to see the start page.

### Deployment Workflow

1. Travis will build & deploy the application for us. This happens automatically after a pull request
is merged to develop. 

1. Go the [Zuhlke Agile Assessment Tool Website](https://agileassessment-prod.azurewebsites.net) to verify the change.
