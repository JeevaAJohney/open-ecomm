export type ProductCreateDto = {
    name: string;
    price: number;
    category: string;
    available_stock?: number;
    description?: string;
}