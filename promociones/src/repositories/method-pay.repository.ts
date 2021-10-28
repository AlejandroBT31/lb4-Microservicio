import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonngoDbDataSource} from '../datasources';
import {MethodPay, MethodPayRelations} from '../models';

export class MethodPayRepository extends DefaultCrudRepository<
  MethodPay,
  typeof MethodPay.prototype.Id,
  MethodPayRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MonngoDbDataSource,
  ) {
    super(MethodPay, dataSource);
  }
}
