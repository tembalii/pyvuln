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
    command:
     - cat
     tty: true
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
                            semgrep scan --max-memory=1024 --json > semgrep.json --debug || true
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'semgrep.json', onlyIfSuccessful: true
        }
    }
}
