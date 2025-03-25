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
  - name: jnlp
    image: semgrep/semgrep:latest
    command:
    - sleep
    args:
    - 99d
'''
        }
    }

node(POD_LABEL) {
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
