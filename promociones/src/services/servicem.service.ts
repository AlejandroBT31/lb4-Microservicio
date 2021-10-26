import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import { promises } from 'fs';
import {ServicemDataSource} from '../datasources';

export interface Servicem {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  method(methotd: string): Promise<object>;//bool si es un metodo de pago 
}

export class ServicemProvider implements Provider<Servicem> {
  constructor(
    // servicem must match the name property in the datasource json file
    @inject('datasources.servicem')
    protected dataSource: ServicemDataSource = new ServicemDataSource(),
  ) {}

  value(): Promise<Servicem> {
    return getService(this.dataSource);
  }
}
