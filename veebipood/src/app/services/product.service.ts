import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  tooted: Toode[] = [
    {nimi: 'Nobe', hind: 25000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'BMW', hind: 55000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Tesla', hind: 85000, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Volvo', hind: 65000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Ford', hind: 45000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Saab', hind: 50000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Bentley', hind: 125000, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Nissan', hind: 35000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Toyota', hind: 55000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"}
  ];

  // esindused: nimi, tel, aadress
  // Models kausta andmemudel
  // kus neid välja kuvan ---> aadressi tähemärkide kokkuarvutus

  // töötajad: nimi, ametikoht, tel
  // Models kausta andmemudel
  // kus neid välja kuvan ---> ametikohtade tähemärkide kokkuarvutus

  constructor() {}
}
