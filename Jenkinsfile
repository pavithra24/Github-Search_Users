pipeline {

    environment {
        dockerregistry = 'https://registry.hub.docker.com'
        dockerhuburl = "klimenta/chitchat"
        githuburl = "klimenta/chitchat"
        dockerhubcrd = 'dockerhub'
    }

    agent any

    tools {nodejs "node"}

    stages {

        stage('Clone git repo') {
            steps {
                git 'https://github.com/' + githuburl
            }
        }

        stage('Install Node.js dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build image') {
          steps{
            script {
              dockerImage = docker.build(dockerhuburl + ":$BUILD_NUMBER")
            }
          }
        }

        stage('Test image') {
            steps {
                sh 'docker run -i ' + dockerhuburl + ':$BUILD_NUMBER npm test'
            }
        }

        stage('Deploy image') {
          steps{
            script {
              docker.withRegistry(dockerregistry, dockerhubcrd ) {
                dockerImage.push("${env.BUILD_NUMBER}")
                dockerImage.push("latest")
              }
            }
          }
        }

        stage('Remove image') {
          steps{
            sh "docker rmi $dockerhuburl:$BUILD_NUMBER"
          }
        }
    }
}
EOF