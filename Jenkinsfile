pipeline {
    agent any
// set env variables for k8s cluster
    environment {
        PROJECT_ID = 'jenkins-cicd-340413'
        CLUSTER_NAME = 'k8s-cluster'
        LOCATION = 'us-central1-c'
        CREDENTIALS_ID = 'gke'
    }
// get code from scm(Github)
    stages {
        stage("Checkout code") {
            steps {
                checkout scm
            }
        }
// Building dockerfile from repo using Docker pipeline plugin and push to dockerhub
        stage("Build image") {
            steps {
                script {
                    myapp = docker.build("paavithrav07/gitsearch:${env.BUILD_ID}")
                }
            }
        }
        stage("Push image") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            myapp.push("latest")
                            myapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }

// deploy the container from dokcerhub to k8s cluster on GKE using Google kubernetes plugin
        stage('Deploy to GKE') {
            steps{
                sh 'ls -ltr'
                sh 'pwd'
                sh "sed -i 's/gitsearch:latest/gitsearch:${env.BUILD_ID}/g' deployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
    }
}