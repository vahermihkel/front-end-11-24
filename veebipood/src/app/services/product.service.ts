import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  tooted: Toode[] = [
    {nimi: 'Nobe', hind: 25, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'BMW', hind: 55, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Tesla', hind: 85, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Volvo', hind: 65, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Ford', hind: 45, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Saab', hind: 50, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Bentley', hind: 125, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Nissan', hind: 35, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Toyota', hind: 55, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/2023/06/how-to-create-a-car-NewBlogCover.png"}
  ];

  esindused = [
    {nimi: 'Kristiine', telefon: 98130100, aadress: 'Endla 45, 10615 Tallinn', xCoord: 59.427, yCoord: 24.723},
    {nimi: 'Ülemiste', telefon: 98130100, aadress: 'Suur-Sõjamäe tn 4, 11415 Tallinn', xCoord: 59.422, yCoord: 24.793, href: "https://www.google.com/maps/place/%C3%9Clemiste+Centre/@59.4219418,24.7912921,17z/data=!3m1!4b1!4m6!3m5!1s0x4692eb54f4edfe43:0x206e6dcbdf41435e!8m2!3d59.4219391!4d24.793867!16s%2Fm%2F0hrdb05?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D"},
    {nimi: 'Rocca al mare', telefon:98130100, aadress: ' Paldiski mnt 102, 13522 Tallinn', xCoord: 1, yCoord: 1},
    {nimi: 'Vesse', telefon: 98130100, aadress: 'Vesse 14607-1', xCoord: 1, yCoord: 1},
    {nimi: 'Järveotsa', telefon: 98130100, aadress: 'Järveotsa tee 35b, Tallinn', xCoord: 1, yCoord: 1},
    {nimi: 'Mustamäe', telefon: 98130100, aadress: ' A. H. Tammsaare tee 104a', xCoord: 1, yCoord: 1},
    {nimi: 'Viru keskus', telefon: 98130100, aadress: ' Viru väljak 4-6, 10111 Tallinn', xCoord: 1, yCoord: 1},
    {nimi: 'Solaris', telefon: 98130100, aadress: 'Estonia pst 9, 11314 Tallinn', xCoord: 1, yCoord: 1}
  ]

  // esindused: nimi, tel, aadress
  // Models kausta andmemudel
  // kus neid välja kuvan ---> aadressi tähemärkide kokkuarvutus

  // töötajad: nimi, ametikoht, tel
  // Models kausta andmemudel
  // kus neid välja kuvan ---> ametikohtade tähemärkide kokkuarvutus

  constructor() {}
}
