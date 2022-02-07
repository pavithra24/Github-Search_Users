# Github-Search_Users
This application will search the git hub users and list all public repos

Repo consistes of CI/CD pipeline setup code, which will trigger the Jenkins pipeline automatically if there's any new commit in the code using webhook

**Prerequisites**
   > Have an active Google Cloud Platform project and administrator credentials for this project.
   > Have at least one multi-node Kubernetes cluster running on Google Kubernetes Engine (GKE) available on free tier account.
   > Have a GitHub account.
   > Have a Docker Hub account.
   > Create VM instance on GCP(Ubuntu 18.04) install Jenkins, Docker, Kubectl.
   > Install suggested plugins along with Docker plugin and Google kubernets plugin on jenkins.
   > Add dockerhub credentials and GKE JSON key of the service account to your Jenkins Credentials.
    

Application service is written in Javascript and HTML, which is **app.js** and **index.html** that utilizes data provided by the Github API.

**Jenkinsfile**
  > Jenkins will use to build and deploy your application on kubernets GKE cluster.
  > Replace the PROJECT-ID, CLUSTER-NAME, CLUSTER-LOCATION and DOCKER-HUB-USERNAME placeholders in the script below with your Google Compute Project project identifier, Kubernetes cluster name, Kubernetes cluster location and Docker Hub username respectively.
  
**Dockerfile**
 > Deploying a Static HTML Site with Nginx.
  
**** Deployment.yaml****
  > Defines how the built container should be deployed on Kubernetes. Replace the DOCKER-HUB-USERNAME in the definition below with your Docker Hub username.
  > Definition pulls the built container from Docker Hub and creates a new deployment with it in your Kubernetes cluster. It also creates a LoadBalancer service     so that the deployment can be accessed from outside the cluster.

**gitsearch.js**
  > simple k6 script to chek the performance of the applictaion for 1000 users for 1 minute, replace the your loadbalancer ip to run the script.
        Note: Install k6 to run this script 
 
 **Result analysis of Production Ready Application.docx**
  > Result analysis document with target architecture, recommended sizing.


  
  





