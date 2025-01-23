pipeline {
      agent {
            docker { image 'semgrep/semgrep:latest' }
      }
      environment {
        SEMGREP_APP_TOKEN = "29af6223e028131f32f2a125bc534773c58287affe1df9f897f858f9c549d244"
        SEMGREP_BASELINE_REF = "origin/develop01"
        HOME = "${env.WORKSPACE}"
      }
    stages {
        stage('Semgrep Scan') {
            steps {
                sh """
                     semgrep --version
                     #Additional params: --verbose | --debug | --max-memory=1024 --max-target-bytes=1500000
                     semgrep scan --max-memory=1024 --json-output=semgrep.json --verbose
                   """
            }
        }
    }
}
