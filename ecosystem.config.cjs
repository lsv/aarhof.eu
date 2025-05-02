module.exports = {
  apps: [
    {
      name: 'aarhof.eu',
      port: '3006',
      exec_mode: 'cluster',
      instances: 2,
      script: './.output/server/index.mjs',
    },
  ],
}
