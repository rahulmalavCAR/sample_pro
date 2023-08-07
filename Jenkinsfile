pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/rahulmalavCAR/sample_pro.git'
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
                // Deploy your app (e.g., to a testing environment)
                // You can use tools like Fastlane or AppCenter
            }
        }
    }
}
