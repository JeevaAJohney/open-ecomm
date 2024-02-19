import { getConnection } from "typeorm";
import { ProductCreateDto } from "../../dto/product.dto";
import { Products } from "../../entities/products.entity";


export const getProductById = async (id: string): Promise<Products | null> => {
    const productRepository = getConnection().getRepository(Products);
    const product = await productRepository.findOne({ where: { id }})
    return product;
};

export const getAllProducts = async (): Promise<Products[]> => {
    const productRepository = getConnection().getRepository(Products);
    const products = await productRepository.find();
    return products;
};

export const createProduct = async (createDto: ProductCreateDto): Promise<Products | null> => {
    const { name, price, category, available_stock, description } =  createDto;
    const productRepository = getConnection().getRepository(Products);
    const productEntity = productRepository.create({
        name,
        price,
        category,
        available_stock,
        description 
    });
    const newProduct = await productRepository.save(productEntity);
    return newProduct;
};