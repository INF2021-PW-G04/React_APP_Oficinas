import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Reparacao} from './reparacao.model';

@model()
export class Automovel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    unique: true,
    jsonSchema: {
      maxLength: 10,
      minLength: 9,
    },
  })
  matricula: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
  })
  modelo?: string;

  @property({
    type: 'number',
  })
  ano?: number;

  @property({
    type: 'string',
  })
  cor?: string;

  @belongsTo(() => Cliente, {name: 'Cliente'})
  idCliente: number;

  @hasMany(() => Reparacao, {keyTo: 'idAutomovel'})
  reparacoes: Reparacao[];

  @hasMany(() => Reparacao, {keyTo: 'idAutomovel'})
  reparacaos: Reparacao[];

  constructor(data?: Partial<Automovel>) {
    super(data);
  }
}

export interface AutomovelRelations {
  // describe navigational properties here
}

export type AutomovelWithRelations = Automovel & AutomovelRelations;
