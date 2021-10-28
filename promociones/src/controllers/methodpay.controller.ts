// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import { Count, Filter, repository, Where } from '@loopback/repository';
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { response } from '@loopback/rest';
import {MethodPay} from '../models';
import {MethodPayRepository} from '../repositories'
/*import{
  Servicem
} from "../services"*/


export class MethodpayController {

  @repository(MethodPayRepository)
  methodPayRepository : MethodPayRepository

  constructor(
  //@inject('services.servicep') //injecta servicio de price
 // protected service: Servicem    
  ) {}

 /* @get("/ServiceMethod / Mastercard") //Obetenmos el metodo de pago 
  async methodMastercard(): Promise<String>{//string or bool
    const method = await this.service.method("") // true si es bool 
    console.log(method);
    return "Mastercard"
  }
  @get("/ServiceMethod / Visa")
  async methodVisa(): Promise<String>{//string or bool
    const method = await this.service.method("") // true si es bool 
    console.log(method);
    return "Visa"
  }
  @get("/ServiceMethod / Paypal")
  async methodPaypald(): Promise<String>{//string or bool
    const method = await this.service.method("") // true si es bool 
    console.log(method);
    return "Paypal"
  }
*/

// CRUD
  @post('/MethodPay')
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MethodPay),
        },
      },
    })
    methodPay: MethodPay,
  ): Promise<MethodPay> {
    return this.methodPayRepository.create(methodPay);
  }

  @get('/methodPay')
  async find(
    @param.filter(MethodPay) filter?: Filter<MethodPay>,
  ): Promise<MethodPay[]> {
    return this.methodPayRepository.find(filter);
  }

  @patch('/methodPay')
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MethodPay, {partial: true}),
        },
      },
    })
    methodPay: MethodPay,
    @param.where(MethodPay) where?: Where<MethodPay>,
  ): Promise<Count> {
    return this.methodPayRepository.updateAll(methodPay, where);
  }

  @put('/methodPay/{id}')
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() methodPay: MethodPay,
  ): Promise<void> {
    await this.methodPayRepository.replaceById(id, methodPay);
  }

  @del('/methodPay/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.methodPayRepository.deleteById(id);
  }

}