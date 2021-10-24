// Uncomment these imports to begin using these cool features!

//import {inject} from '@loopback/rest';
import { Count, Filter, repository, Where } from '@loopback/repository';
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { response } from '@loopback/rest';
import {Coupon} from '../models';
import {CouponRepository} from '../repositories';


export class CouponController {

  constructor(
    @repository(CouponRepository)
    public couponRepository : CouponRepository, //public
  ) {}

  @post('/Coupon')
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coupon),
        },
      },
    })
    coupon: Coupon,
  ): Promise<Coupon> {
    return this.couponRepository.create(coupon);
  }

  @get('/Coupon')
  async find(
    @param.filter(Coupon) filter?: Filter<Coupon>,
  ): Promise<Coupon[]> {
    return this.couponRepository.find(filter);
  }

  @patch('/Coupon')
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Coupon, {partial: true}),
        },
      },
    })
    coupon: Coupon,
    @param.where(Coupon) where?: Where<Coupon>,
  ): Promise<Count> {
    return this.couponRepository.updateAll(coupon, where);
  }

  @put('/Coupon/{id}')
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() coupon: Coupon,
  ): Promise<void> {
    await this.couponRepository.replaceById(id, coupon);
  }

  @del('/Coupon/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.couponRepository.deleteById(id);
  }
}
