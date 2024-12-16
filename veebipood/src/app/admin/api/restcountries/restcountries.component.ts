import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-restcountries',
  standalone: true,
  imports: [],
  templateUrl: './restcountries.component.html',
  styleUrl: './restcountries.component.css'
})
export class RestcountriesComponent {
  riigid: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://restcountries.com/v3.1/all?fields=name,capital,languages,flags').subscribe(res => {
        this.riigid = res;
    })
  }
}
