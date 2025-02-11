pipeline {
    agent any
    stages {
        stage('Semgrep-Scan') {
            steps {
                script {
                    echo "Semgrep full scans"
                    sh """     
                       docker run  --rm -v "\${PWD}:/src" semgrep/semgrep semgrep scan || true
                      """
                }
            }
        }
    }
}
