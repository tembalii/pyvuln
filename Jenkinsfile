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
'''
        }
    }

    stages {
        stage('Semgrep-Scan') {
            steps {
                container('jnlp') {
                    script {
                        echo "Running Semgrep full scan..."
                        sh '''
                            semgrep
                        '''
                    }
                }
            }
        }
    }
}
