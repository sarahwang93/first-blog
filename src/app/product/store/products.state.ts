import { Product } from '../product.model' 

export interface ProductState {
    productLst: Product[]
}

export const initProductState = {
    productLst:[] as Product[]
}