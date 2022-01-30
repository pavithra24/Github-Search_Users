pipeline {
    agent any
    environment {
        registry = "paavithrav07/github-search_users"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    stages {
         stage('Lint files') {
              steps {
                  sh 'make lint'
              }
         }
         stage('Building image') {
            steps{
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Upload Image to Docker hub') {
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Remove Unused docker image') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }

    }
}