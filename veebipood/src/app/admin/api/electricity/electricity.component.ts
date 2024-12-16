import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-electricity',
  standalone: true,
  imports: [],
  templateUrl: './electricity.component.html',
  styleUrl: './electricity.component.css'
})
export class ElectricityComponent {
  elektrihinnad: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://dashboard.elering.ee/api/nps/price').subscribe(res => {
        this.elektrihinnad = res.data.ee;
    })
  }
}
