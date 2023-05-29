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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalPriceRequest = exports.TotalPriceResponse = exports.UpdateCountRequest = exports.UpdateCountResponse = exports.AddToCardResponse = exports.GetAllResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class ShoppingCartItem {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ShoppingCartItem.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aliquid alias.' }),
    __metadata("design:type", String)
], ShoppingCartItem.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2500 }),
    __metadata("design:type", Number)
], ShoppingCartItem.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://loremflickr.com/640/480/technics?random=849581742306099411950399951214',
    }),
    __metadata("design:type", String)
], ShoppingCartItem.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    __metadata("design:type", Number)
], ShoppingCartItem.prototype, "in_stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Salmon' }),
    __metadata("design:type", String)
], ShoppingCartItem.prototype, "parts_manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Henry' }),
    __metadata("design:type", String)
], ShoppingCartItem.prototype, "boiler_manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ShoppingCartItem.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ShoppingCartItem.prototype, "partId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", Number)
], ShoppingCartItem.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    __metadata("design:type", Number)
], ShoppingCartItem.prototype, "total_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-03-19T12:45:51.240Z' }),
    __metadata("design:type", String)
], ShoppingCartItem.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-03-19T12:45:51.240Z' }),
    __metadata("design:type", String)
], ShoppingCartItem.prototype, "updatedAt", void 0);
class GetAllResponse extends ShoppingCartItem {
}
exports.GetAllResponse = GetAllResponse;
class AddToCardResponse extends ShoppingCartItem {
}
exports.AddToCardResponse = AddToCardResponse;
class UpdateCountResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UpdateCountResponse.prototype, "count", void 0);
exports.UpdateCountResponse = UpdateCountResponse;
class UpdateCountRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UpdateCountRequest.prototype, "count", void 0);
exports.UpdateCountRequest = UpdateCountRequest;
class TotalPriceResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    __metadata("design:type", Number)
], TotalPriceResponse.prototype, "total_price", void 0);
exports.TotalPriceResponse = TotalPriceResponse;
class TotalPriceRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000 }),
    __metadata("design:type", Number)
], TotalPriceRequest.prototype, "total_price", void 0);
exports.TotalPriceRequest = TotalPriceRequest;
//# sourceMappingURL=index.js.map