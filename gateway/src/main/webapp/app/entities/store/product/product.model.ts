export interface IProduct {
  id?: number;
  title?: string;
  price?: number;
  imageContentType?: string;
  image?: string;
}

export class Product implements IProduct {
  constructor(public id?: number, public title?: string, public price?: number, public imageContentType?: string, public image?: string) {}
}
