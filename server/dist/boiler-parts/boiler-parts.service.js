"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoilerPartsService = void 0;
const common_1 = require("@nestjs/common");
const boiler_parts_model_1 = require("./boiler-parts.model");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
let BoilerPartsService = class BoilerPartsService {
    constructor(boilerPartsModel) {
        this.boilerPartsModel = boilerPartsModel;
    }
    async paginateAndFilter(query) {
        const limit = +query.limit;
        const offset = +query.offset * 20;
        return this.boilerPartsModel.findAndCountAll({
            limit,
            offset,
        });
    }
    async bestSellers() {
        return this.boilerPartsModel.findAndCountAll({
            where: { bestseller: true },
        });
    }
    async new() {
        return this.boilerPartsModel.findAndCountAll({
            where: { new: true },
        });
    }
    async findOne(id) {
        return this.boilerPartsModel.findOne({
            where: { id },
        });
    }
    async findOneByName(name) {
        return this.boilerPartsModel.findOne({
            where: { name },
        });
    }
    async searchByString(str) {
        return this.boilerPartsModel.findAndCountAll({
            limit: 20,
            where: { name: { [sequelize_2.Op.like]: `%${str}%` } },
        });
    }
};
BoilerPartsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(boiler_parts_model_1.BoilerParts)),
    __metadata("design:paramtypes", [Object])
], BoilerPartsService);
exports.BoilerPartsService = BoilerPartsService;
//# sourceMappingURL=boiler-parts.service.js.map