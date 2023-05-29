import { BoilerParts } from './boiler-parts.model';
import { IBoilerPartsQuery } from './types';
export declare class BoilerPartsService {
    private boilerPartsModel;
    constructor(boilerPartsModel: typeof BoilerParts);
    paginateAndFilter(query: IBoilerPartsQuery): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
    bestSellers(): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
    new(): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
    findOne(id: number): Promise<BoilerParts>;
    findOneByName(name: string): Promise<BoilerParts>;
    searchByString(str: string): Promise<{
        count: number;
        rows: BoilerParts[];
    }>;
}
