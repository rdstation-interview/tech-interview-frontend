/**
 * In this file you can customize your micro frontend.
 * To know all the options, access the documentation:
 * https://front-hub.rdstation.com.br/docs/config
 */
module.exports = {
  version: 'auto',
  context: {},
  metadata: {
    maintainers: [],
    applicationHosts: [],
  },
  log: {
    level: 'debug',
  },
  intl: {
    language: 'pt-BR',
    fallbackLng: 'pt-BR',
    debug: false,
  },
  features: [''],
  rbac: {
    role: () => '',
    permission: {},
    grants: {},
  },
  events: {
    listeners: [],
    emitters: [],
  },
  services: [
    {
      name: 'workflow-service',
      rootDir: '<rootDir>/src/api/mock',
      endpoints: {
        development: '/',
        production: 'https://api.my-project.com',
      },
    },
  ],
}
