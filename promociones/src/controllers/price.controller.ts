// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import { Count, Filter, repository, Where } from '@loopback/repository';
import { del, get, getModelSchemaRef, param, patch, post, put, requestBody } from '@loopback/rest';
import { response } from '@loopback/rest';
import {Price} from '../models';
import {PriceRepository} from '../repositories';


export class PriceController {

  @repository(PriceRepository)
  priceRepository: PriceRepository;
  constructor() {}


  @post('/Price')
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Price),
        },
      },
    })
    price: Price,
  ): Promise<Price> {
    return this.priceRepository.create(price);
  }

  @get('/Price')
  async find(
    @param.filter(Price) filter?: Filter<Price>,
  ): Promise<Price[]> {
    return this.priceRepository.find(filter);
  }

  @patch('/Price')
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Price, {partial: true}),
        },
      },
    })
    price: Price,
    @param.where(Price) where?: Where<Price>,
  ): Promise <Count>{
    return this.priceRepository.updateAll(price, where);
  }

  @put('/Price/{id}')
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() price: Price,
  ): Promise<void> {
    await this.priceRepository.replaceById(id, price);
  }

  @del('/Price/{id}')
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.priceRepository.deleteById(id);
  }
}
