import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonngoDbDataSource} from '../datasources';
import {Coupon, CouponRelations} from '../models';

export class CouponRepository extends DefaultCrudRepository<
  Coupon,
  typeof Coupon.prototype.Id,
  CouponRelations
> {
  constructor(
    @inject('datasources.monngoDB') dataSource: MonngoDbDataSource,
  ) {
    super(Coupon, dataSource);
  }
}
