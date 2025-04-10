@Library("Shared") _
pipeline {
    agent { label "manish" }

    stages {
        stage("Hello") {
            steps {
                script {
                    
                    hello()  // Call the method defined in hello.groovy
                }
            }
        }
        stage('Code') {
            steps {
                script{
                    clone("https://github.com/tiwari02122003/django-notes-app.git","main")
                }
            }
        }
        stage('Build') {
            steps {
                script{
                     docker_build("notes-app","latest","mkv4540")             
                }

            }
        }
        stage('Push on DockerHub') {
            steps {
                script{
                    docker_push("notes-app","latest","mkv4540")
                }    
            }
            
        }
        stage('Deploy') {
            steps {
                echo 'This is the Deployment stage'
                sh 'docker compose up -d'  // Ensure docker-compose.yml exists
            }
        }
    }
}
