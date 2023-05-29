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
exports.ShoppingCartController = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const shopping_cart_service_1 = require("./shopping-cart.service");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("./types");
const add_to_cart_dto_1 = require("./dto/add_to_cart.dto");
let ShoppingCartController = class ShoppingCartController {
    constructor(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    getAll(userId) {
        return this.shoppingCartService.findAll(userId);
    }
    addToCar(addToCartDto) {
        return this.shoppingCartService.add(addToCartDto);
    }
    updateCount({ count }, partId) {
        return this.shoppingCartService.updateCount(count, partId);
    }
    updateTotalPrice({ total_price }, partId) {
        return this.shoppingCartService.updateTotalPrice(total_price, partId);
    }
    removeOne(partId) {
        return this.shoppingCartService.remove(partId);
    }
    removeAll(userId) {
        return this.shoppingCartService.removeAll(userId);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: [types_1.GetAllResponse] }),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingCartController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.AddToCardResponse }),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_to_cart_dto_1.AddToCartDto]),
    __metadata("design:returntype", void 0)
], ShoppingCartController.prototype, "addToCar", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.UpdateCountResponse }),
    (0, swagger_1.ApiBody)({ type: types_1.UpdateCountRequest }),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Patch)('/count/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ShoppingCartController.prototype, "updateCount", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.TotalPriceResponse }),
    (0, swagger_1.ApiBody)({ type: types_1.TotalPriceRequest }),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Patch)('/total-price/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ShoppingCartController.prototype, "updateTotalPrice", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Delete)('/one/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingCartController.prototype, "removeOne", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Delete)('/all/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingCartController.prototype, "removeAll", null);
ShoppingCartController = __decorate([
    (0, common_1.Controller)('shopping-cart'),
    __metadata("design:paramtypes", [shopping_cart_service_1.ShoppingCartService])
], ShoppingCartController);
exports.ShoppingCartController = ShoppingCartController;
//# sourceMappingURL=shopping-cart.controller.js.map