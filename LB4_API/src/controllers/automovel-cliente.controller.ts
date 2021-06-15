import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Automovel,
  Cliente
} from '../models';
import {AutomovelRepository} from '../repositories';

export class AutomovelClienteController {
  constructor(
    @repository(AutomovelRepository)
    public automovelRepository: AutomovelRepository,
  ) { }

  @get('/automovels/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Automovel',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Automovel.prototype.id,
  ): Promise<Cliente> {
    return this.automovelRepository.Cliente(id);
  }
}
