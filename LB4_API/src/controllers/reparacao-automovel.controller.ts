import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Automovel, Reparacao
} from '../models';
import {ReparacaoRepository} from '../repositories';

export class ReparacaoAutomovelController {
  constructor(
    @repository(ReparacaoRepository)
    public reparacaoRepository: ReparacaoRepository,
  ) { }

  @get('/reparacaos/{id}/automovel', {
    responses: {
      '200': {
        description: 'Automovel belonging to Reparacao',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Automovel)},
          },
        },
      },
    },
  })
  async getAutomovel(
    @param.path.number('id') id: typeof Reparacao.prototype.id,
  ): Promise<Automovel> {
    return this.reparacaoRepository.Automovel(id);
  }
}
