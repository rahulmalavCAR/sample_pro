pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps{
              git branch: 'main', url:'https://github.com/rahulmalavCAR/sample_pro.git'
          }
        }
        stage('Build') {
            steps {
                // Build your React Native app
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // depoly here
            }
        }
    }
}
