import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonngoDbDataSource} from '../datasources';
import {Price, PriceRelations} from '../models';

export class PriceRepository extends DefaultCrudRepository<
  Price,
  typeof Price.prototype.Id,
  PriceRelations
> {
  constructor(
<<<<<<< Updated upstream
    @inject('datasources.monngoDB') dataSource: MonngoDbDataSource,
=======
    @inject('datasources.mongodb') dataSource: MonngoDbDataSource,
>>>>>>> Stashed changes
  ) {
    super(Price, dataSource);
  }
}
