pipeline {
    agent any
    stages {
        stage('Semgrep-Scan') {
            steps {
                script {
                    echo "Semgrep full scans"
                    sh """     
                       docker run  --rm -v "\${PWD}:/src" semgrep/semgrep semgrep scan --max-memory=1024 --json-output=semgrep.json --debug || true
                      """
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

