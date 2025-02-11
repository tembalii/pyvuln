pipeline {
    agent any
    environment {
        SEMGREP_BASELINE_REF = "origin/develop01"
        SEMGREP_APP_TOKEN = "29af6223e028131f32f2a125bc534773c58287affe1df9f897f858f9c549d244"
    }
    stages {
        stage('Semgrep-Scan') {
            steps {
                script {
                    echo "Semgrep full scans"
                    sh '''docker run \
                        -e SEMGREP_APP_TOKEN=$SEMGREP_APP_TOKEN \
                        -v "$(pwd):$(pwd)" --workdir $(pwd) \
                        semgrep/semgrep semgrep ci'''
                }
            }
        }
    }
}
