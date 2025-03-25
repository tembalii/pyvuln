pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
metadata:
  name: semgrep-scan
spec:
  containers:
    - name: jnlp
      image: semgrep/semgrep
      command: ["/bin/sh", "-c"]
      args:
        - |
          apk add git && \
          git clone https://github.com/sebasrevuelta/moment && \
          semgrep scan --json --output semgrep-results.json moment && \
          echo "Semgrep scan completed. Keeping container alive..." && \
          tail -f /dev/null  # Prevents JNLP container from exiting
  restartPolicy: Never
'''
        }
    }
    
    stages {
        stage('Run Semgrep') {
            steps {
                container('jnlp') {  
                    script {
                        echo "Running Semgrep full scan..."
                    }
                }
            }
        }
        stage('Save Scan Results') {
            steps {
                container('jnlp') {
                    script {
                        sh 'ls -l'  # Debugging: Check files in the workspace
                    }
                    archiveArtifacts artifacts: 'semgrep-results.json', fingerprint: true
                }
            }
        }
    }
}
