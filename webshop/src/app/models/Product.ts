export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public category: string,
    public description: string,
    public image: string,
    public rating: Rating
  ) {}
}

class Rating {
  constructor(
    public rate: number,
    public count: number
  ) {}
}