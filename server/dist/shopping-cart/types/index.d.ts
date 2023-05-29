declare class ShoppingCartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    in_stock: number;
    parts_manufacturer: string;
    boiler_manufacturer: string;
    userId: number;
    partId: number;
    count: number;
    total_price: number;
    createdAt: string;
    updatedAt: string;
}
export declare class GetAllResponse extends ShoppingCartItem {
}
export declare class AddToCardResponse extends ShoppingCartItem {
}
export declare class UpdateCountResponse {
    count: number;
}
export declare class UpdateCountRequest {
    count: number;
}
export declare class TotalPriceResponse {
    total_price: number;
}
export declare class TotalPriceRequest {
    total_price: number;
}
export {};
