import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Coupon extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Discount: number;

  @property({
    type: 'number',
    required: true,
  })
  min_amount: number;

  @property({
    type: 'number',
    required: true,
  })
  Zone: number;

  @property({
    type: 'date',
  })
  Expiration?: string;

  @property({
    type: 'number',
  })
  lim_use?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Coupon>) {
    super(data);
  }
}

export interface CouponRelations {
  // describe navigational properties here
}

export type CouponWithRelations = Coupon & CouponRelations;
