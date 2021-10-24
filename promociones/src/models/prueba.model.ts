import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Prueba extends Entity {
  @property({
    type: 'boolean',
    default: 1,
  })
  mastercard?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Prueba>) {
    super(data);
  }
}

export interface PruebaRelations {
  // describe navigational properties here
}

export type PruebaWithRelations = Prueba & PruebaRelations;
