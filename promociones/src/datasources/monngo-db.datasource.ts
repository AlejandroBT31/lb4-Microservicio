import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'monngoDB',
  connector: 'mongodb',
  url: 'mongodb://abaltazar:jtRlp69WYhcA3g@147.182.187.121:27017/abaltazar_production?authSource=admin',
  host: '147.182.187.121',
  port: 27017,
  user: 'abaltazar',
  password: 'jtRlp69WYhcA3g',
  database: 'abaltazar_production',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MonngoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'monngoDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.monngoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
