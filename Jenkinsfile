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
  - name: jnlp
    image: semgrep/semgrep:latest
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
                container('jnlp') {
                    script {
                        echo "Running Semgrep full scan..."
                        sh 'semgrep scan --config auto'
                    }
                }
            }
        }
    }
}
