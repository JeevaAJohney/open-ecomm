import { Request, Response } from 'express'
import { getProductById, getAllProducts, createProduct } from '../service/productservice';


export const getById = async (req: Request, res: Response ) => {
    const productId = req.params.id
    const product = await getProductById(productId);
    if(product) {
        res.status(200).json({message: 'Received Product succesfully', product})
    } else {
        res.status(401).json({message: 'Invalid productId'})
    }
};

export const create = async (req: Request, res: Response ) => {
    const newProduct = await createProduct(req.body);
    if(newProduct) {
        res.status(200).json({message: 'Product created Successfully', product: newProduct})
    } else {
        res.status(401).json({message: 'Error creating product'})
    }
};

export const getAll = async (req: Request, res:Response ) => {
    const products = await getAllProducts();
    res.status(200).json({
        message: "Success",
        products
    })
};