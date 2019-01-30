# agile-assessment-tool
Agile Assessment Tool Zuhlke Singapore. This tool servers the purpose to assess the customer's knowledge
about the agile methodology and also provide an entry point for Zuhlke's business.

## Development Guide

### Prerequisites
You will need Docker installed.

For Docker, please refer to [Mac Install](https://docs.docker.com/docker-for-mac/install/) and [Windows Install](https://docs.docker.com/docker-for-windows/install/). 


### Development Workflow

1. Clone the repository to you local and navigate to the project folder.

2. Start the docker images by typing `$ docker-compose up`  in the terminal. Use `Ctrl + c` to shutdown the docker container.

3. Go to a browser to look at *localhost:3000* to see the start page.

### Deployment Workflow

1. Locally build the client project: 
```
$ cd server/  
$ npm run build:prod
```  
2. Push the changes to your feature branch.

3. Start a pull request to merge into develop branch. Azure is connected to the git repo and will take care of the deployment.

4. Go the [Zuhlke Agile Assessment Tool Website](https://agileassessment-prod.azurewebsites.net) to verify the change.

