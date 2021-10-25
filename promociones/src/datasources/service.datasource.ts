import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import { operation } from '@loopback/openapi-v3';
import {juggler} from '@loopback/repository';

const config = {
  name: 'service',
  connector: 'rest',
  baseURL: 'https://services.com',
  crud: false,
  options:{
    headers:{
      accept: 'application/json',
      'content-type': 'application/json'
    }
  },
  operations:[
    {
      template:{
        method: "GET",
        url: "https://services.com/zone/{postalcode}"//definir parametros
      },
      funtions:{
        zone:["postalcode"]// comunicacion de servicio
      } 
    },
    {
      template:{
        method: "POST",
        url: "https://services.com/zone",
        forms:{
          "zone": "^{zone}",
          "price": "^{price}",
        }
      },
      funtions:{
        price:["Price", "zone"]
      } 
    }
  ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ServiceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'service';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.service', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
