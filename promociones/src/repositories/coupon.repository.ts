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
<<<<<<< Updated upstream
    @inject('datasources.monngoDB') dataSource: MonngoDbDataSource,
=======
    @inject('datasources.mongodb') dataSource: MonngoDbDataSource,
>>>>>>> Stashed changes
  ) {
    super(Coupon, dataSource);
  }
}
