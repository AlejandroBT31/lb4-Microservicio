import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'servicem', //Service MethodPAy
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
        url: "https://services.com/methodpay/{method}"//definimos el methodo de pago -> visa mastercard paypal y coupon 
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
          "method": "^{method}", // visa, paypal mastercard
          "zone": "^{zone}", // zona 
          "amount": "^{amount}", // monto 
          "coupon": "^{coupon}" //si se llega a poner cupon para descuento
        }
      },
      funtions:{
        price:["method", "zone", "amount", "coupon"]
      } 
    }*/
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
