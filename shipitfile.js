module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/website',
      deployTo: '/src/website',
      repositoryUrl: 'https://github.com/agreen757/personalsite.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 4,
      key: '/Users/adriangreen/.ssh/id_rsa',
      shallowClone: true
    },
    staging: {
      servers: 'agreen@54.158.234.53'
    }
  });
};