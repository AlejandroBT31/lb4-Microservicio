// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/core';
import { Count, Filter, repository, Where } from '@loopback/repository';
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { response } from '@loopback/rest';
import { promises } from 'dns';
import {Coupon} from '../models';
import {CouponRepository} from '../repositories';
import{
  Servicec
} from '../services'


export class CouponController {

  @repository(CouponRepository)
  couponRepository : CouponRepository;

  constructor(
    @inject('services.Servicec') //injecta servicio de coupon
    protected service: Servicec
  ) {}

<<<<<<< Updated upstream
  @get('/ServiceCoupon/ MASTER')
=======
  /*@get('/ServiceCoupon/ MASTER') //Obtemos cupon 
>>>>>>> Stashed changes
  async couponMaster(): Promise<String>{
    const coupon = await this.service.coupon(.20)// porcentaje o cantidad ?
    console.log(coupon);
    return "Cupon Master20"
  }

  @get('/ServiceCoupon/ PERRITOFELI')
  async couponPerritofeli(): Promise<String>{
    const coupon = await this.service.coupon(.15)// porcentaje o cantidad ?
    console.log(coupon);
    return "Cupon PERRITOFELI"
  }

  @get('/ServiceCoupon/ NOJADO')
  async couponNojado(): Promise<String>{
    const coupon = await this.service.coupon(.10)// porcentaje o cantidad ?
    console.log(coupon);
    return "Cupon Nojado"
  }
<<<<<<< Updated upstream

=======
*///hacer uno con los cupones 
>>>>>>> Stashed changes
  //CRUD

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
