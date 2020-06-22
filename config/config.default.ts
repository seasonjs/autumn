import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.webpackURL = 'http://localhost:3000/index.html';
  config.basePath = '/';
  config.keys = appInfo.name + '_1592565834039_7294';
    /**
   *
   * @member {Object} Config#cluster
   * @property {Object} listen - listen options, see {@link https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback}
   * @property {String} listen.path - set a unix sock path when server listen
   * @property {Number} listen.port - set a port when server listen
   * @property {String} listen.hostname - set a hostname binding server when server listen
   */
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '',
    },
  };

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
