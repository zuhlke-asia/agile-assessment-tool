# agile-assessment-tool
Agile Assessment Tool Zuhlke Singapore. THis tool servers the purpose to assess the customer's knowledge
about the agile methodology and also provide an entry point for Zuhlke's business.

## Development Guild

### Prerequisites
You will need Docker and Node installed.

For Docker, please refer to [Mac Install](https://docs.docker.com/docker-for-mac/install/) and [Windows Install](https://docs.docker.com/docker-for-windows/install/). 

For Node, Please refer to [Node Install](https://nodejs.org/en/).

### Development Workflow

1. Clone the repository to you local and navigate to the project folder.

2. Start the docker images by typing `$ docker-compose up`  in the terminal. Use `Ctrl + c` to shutwon the docker machine.

3. Go to a browser to look at *localhost:8080* to see the start page.



### Deployment Workflow

1. Locally build the client project: 
```
$ cd server/  
$ npm run build:prod
```  
2. Push the changes to your feature branch.

3. Start a pull request to merge into develop branch. Azure is connected to the git repo and will take care of the deployment.


