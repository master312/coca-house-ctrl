module.exports = {
  apps : [{
    name      : 'COCA-HOUSE-CTRL',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
      PORT: 3000
    },
    env_staging : {
      NODE_ENV: 'staging'
      PORT: 3001
    }
  }],

  deploy : {
    staging : {
      user : 'deploy',
      host : '192.168.1.199',
      ref  : 'origin/testing',
      repo : 'https://github.com/master312/coca-house-ctrl.git',
      path : '/home/deploy/coca-house-ctrl',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    
    production : {
      user : 'deploy',
      host : '192.168.1.199',
      ref  : 'origin/origin',
      repo : 'https://github.com/master312/coca-house-ctrl.git',
      path : '/home/deploy/coca-house-ctrl',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
