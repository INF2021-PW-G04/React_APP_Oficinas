import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Oficina } from '../models';
import { OficinaRepository } from '../repositories';
export declare class OficinaController {
    oficinaRepository: OficinaRepository;
    constructor(oficinaRepository: OficinaRepository);
    create(oficina: Omit<Oficina, 'id'>): Promise<Oficina>;
    count(where?: Where<Oficina>): Promise<Count>;
    find(filter?: Filter<Oficina>): Promise<Oficina[]>;
    updateAll(oficina: Oficina, where?: Where<Oficina>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Oficina>): Promise<Oficina>;
    updateById(id: number, oficina: Oficina): Promise<void>;
    replaceById(id: number, oficina: Oficina): Promise<void>;
    deleteById(id: number): Promise<void>;
}
