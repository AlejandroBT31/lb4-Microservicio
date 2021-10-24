// Uncomment these imports to begin using these cool features!

//import {inject} from '@loopback/rest';
import { Count, Filter, repository, Where } from '@loopback/repository';
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { response } from '@loopback/rest';
import {MethodPay} from '../models';
import {MethodPayRepository} from '../repositories';


export class MethodpayController {

  constructor(
    @repository(MethodPayRepository)
    public methodPayRepository : MethodPayRepository,
  ) {}

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