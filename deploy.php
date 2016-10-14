<?php
require __DIR__ . '/vendor/deployer/deployer/recipe/common.php';

server('prod', 'aarhof.eu', 22)
    ->user('root')
    ->forwardAgent()
    ->stage('production')
    ->env('deploy_path', '/ext/aarhof.eu/prod')
    ->env('env', 'prod')
;

task('gulprun', function() {
    runLocally('rm -rf dist');
    runLocally('yarn install');
    runLocally('node_modules/.bin/gulp build');
    upload(__DIR__ . '/dist', '{{release_path}}');
});

/**
 * Main task
 */
task('deploy', [
    'deploy:prepare',
    'deploy:release',
    'gulprun',
    'deploy:symlink',
    'cleanup',
])->desc('Deploy your project');

after('deploy', 'success');
