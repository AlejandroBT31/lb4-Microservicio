import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'servicem',
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
        url: "https://services.com/methodpay/{method}"//definir parametros
      },
      funtions:{
        method:["method"]// comunicacion de servicio
      } 
    },
    {
      template:{
        method: "POST",
        url: "https://services.com/method",
        forms:{
          "method": "^{method}",
          "price": "^{price}",
          "amount": "^{amount}"
        }
      },
      funtions:{
        price:["Price", "method", "amount"]
      } 
    }
  ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ServicemDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'servicem';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.servicem', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
