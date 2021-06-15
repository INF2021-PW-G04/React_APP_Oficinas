import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Automovel } from '../models';
import { AutomovelRepository } from '../repositories';
export declare class AutomovelController {
    automovelRepository: AutomovelRepository;
    constructor(automovelRepository: AutomovelRepository);
    create(automovel: Automovel): Promise<Automovel>;
    count(where?: Where<Automovel>): Promise<Count>;
    find(filter?: Filter<Automovel>): Promise<Automovel[]>;
    updateAll(automovel: Automovel, where?: Where<Automovel>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Automovel>): Promise<Automovel>;
    updateById(id: number, automovel: Automovel): Promise<void>;
    replaceById(id: number, automovel: Automovel): Promise<void>;
    deleteById(id: number): Promise<void>;
}
