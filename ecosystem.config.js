module.exports = {
  apps : [{
    name      : 'COCA-HOUSE-CTRL',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    },
    env_staging : {
      // ENVIRONMENT VARIABLES FOR STAGING
    }
  }],

  deploy : {
    staging : {
      user : 'deploy',
      host : '192.168.1.199',
      ref  : 'origin/testing',
      repo : 'git@github.com:master312/coca-house-ctrl.git',
      path : '/home/deploy/coca-house-ctrl',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    
    production : {
      user : 'deploy',
      host : '192.168.1.199',
      ref  : 'origin/origin',
      repo : 'git@github.com:master312/coca-house-ctrl.git',
      path : '/home/deploy/coca-house-ctrl',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
