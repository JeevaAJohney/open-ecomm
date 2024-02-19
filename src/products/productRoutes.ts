import express from 'express'
import { create, getAll, getById } from './controller/productcontroller';


const router = express.Router();

router.get('/:id', getById);

router.get('/', getAll);

router.post('/', create);

export default router