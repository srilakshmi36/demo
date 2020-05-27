export class IProduct {
    id?: number;
    name: string;
    price: string;
    
}

export class Product implements IProduct {
    id ?= null;
    name = '';
    price = '';
   
}
