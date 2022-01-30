pipeline {

    environment {
        dockerregistry = 'https://registry.hub.docker.com'
        dockerhuburl = "paavithrav07/github-search_users"
        githuburl = "pavithra24/Github-Search_Users"
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

//         stage('Install Node.js dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }


             stage('Building image') {
                steps{
                    script {
                        dockerImage = docker.build dockerhuburl + ":$BUILD_NUMBER"
                    }
                }
            }


                stage('Upload Image to Docker hub') {
                    steps{
                        script {
                            docker.withRegistry( '', dockerhubcrd ) {
                                dockerImage.push()
                            }
                        }
                    }
                }

        stage('Remove Unused docker image') {
                    steps{
                        sh "docker rmi $dockerhuburl:$BUILD_NUMBER"
                    }
                }
    }
}
EOF