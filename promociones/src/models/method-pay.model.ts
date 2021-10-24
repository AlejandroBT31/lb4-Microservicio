import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MethodPay extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'boolean',
  })
  paypal?: boolean;

  @property({
    type: 'boolean',
  })
  Visa?: boolean;

  @property({
    type: 'boolean',
  })
  Mastercard: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MethodPay>) {
    super(data);
  }
}

export interface MethodPayRelations {
  // describe navigational properties here
}

export type MethodPayWithRelations = MethodPay & MethodPayRelations;
