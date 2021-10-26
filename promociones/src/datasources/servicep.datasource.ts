import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'servicep',
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
        url: "https://services.com/zone/{postalcode}"//define la zona por medio del codigo postal 
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
export class ServicepDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'servicep';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.servicep', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
