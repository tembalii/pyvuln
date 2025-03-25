pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
metadata:
  name: semgrep-scanner
spec:
  containers:
  - name: semgrep
    image: semgrep/semgrep:latest
    command: ["cat"]
    tty: true
'''
        }
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Run Semgrep') {
            steps {
                container('semgrep') {
                    script {
                        echo "Running Semgrep full scan..."
                        sh 'semgrep scan --config auto'
                    }
                }
            }
        }
    }
}
