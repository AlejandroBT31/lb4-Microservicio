import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {ServiceDataSource} from '../datasources';

export interface Service {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  zone(postalcode: string): Promise<object>;
}

export class ServiceProvider implements Provider<Service> {
  constructor(
    // service must match the name property in the datasource json file
    @inject('datasources.service')
    protected dataSource: ServiceDataSource = new ServiceDataSource(),
  ) {}

  value(): Promise<Service> {
    return getService(this.dataSource);
  }
}
