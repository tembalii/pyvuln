pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
metadata:
  name: semgrep-scanner
  labels:
    name: semgrep-scanner
spec:
  containers:
  - name: semgrep
    image: semgrep/semgrep:latest
    command:
    - sleep
    args:
    - 99d
'''
        }
    }
    stages {
        stage('Run Semgrep') {
            steps {
                container('semgrep') {
                    script {
                        echo "Running Semgrep full scan..."
                        sh 'semgrep'
                    }
                }
            }
        }
    }
}
