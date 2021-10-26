import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {ServicepDataSource} from '../datasources';

export interface Servicep {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  zone(postalcode: string): Promise<object>; //
}

export class ServicepProvider implements Provider<Servicep> {
  constructor(
    // servicep must match the name property in the datasource json file
    @inject('datasources.servicep')
    protected dataSource: ServicepDataSource = new ServicepDataSource(),
  ) {}

  value(): Promise<Servicep> {
    return getService(this.dataSource);
  }
}
