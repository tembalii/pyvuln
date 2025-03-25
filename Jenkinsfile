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
          semgrep scan moment
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
    }
}
