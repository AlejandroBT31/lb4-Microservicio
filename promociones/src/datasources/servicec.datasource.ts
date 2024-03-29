import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'servicec',//Service Coupon 
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
    /*{
      template:{
        method: "GET",
        url: "https://services.com/coupon/{amount}"// parametro amoutn para hacer el descuento
      },
      funtions:{
        coupon:["amount"]// comunicacion de servicio //amount or price ?
      } 
    },
    {
      template:{
        method: "POST",
        url: "https://services.com/coupon",
        forms:{
          "zone": "^{zone}",
          "price": "^{price}", // ?existe
          "amount": "^{amount}"
        }
      },
      funtions:{
        price:["Price", "zone", "amount"]
      } 
    }*/
  ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ServicecDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'servicec';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.servicec', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
