pipeline {
    agent any
    environment {
        registry = "paavithrav07/github-search_users"
        registryCredential = 'dockerhub'
        dockerImage = ''
        githuburl = "pavithra24/Github-Search_Users"
    }
    stages {
            stage('Clone git repo') {
                        steps {
                            git 'https://github.com/' + githuburl
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

        stage('Deploy k8s') {
              steps {
                kubernetesDeploy(
                  kubeconfigId: 'k8s',
                  configs: 'master/k8s.yml',
                  enableConfigSubstitution: true
                )
              }
            }

    }
}