pipeline {
    agent {
        docker {
            image 'semgrep/semgrep:latest'
            args '--rm -v ${WORKSPACE}'
        }
    }
    environment {
        SEMGREP_APP_TOKEN = "29af6223e028131f32f2a125bc534773c58287affe1df9f897f858f9c549d244"
        SEMGREP_BASELINE_REF = "origin/develop01"
        HOME = "${WORKSPACE}"
    }
    stages {
        stage('Semgrep Scan') {
            steps {
                sh """
                    semgrep --version
                    semgrep scan --max-memory=1024 --json-output=semgrep.json --verbose || true
                """
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'semgrep.json', onlyIfSuccessful: true
        }
    }
}

