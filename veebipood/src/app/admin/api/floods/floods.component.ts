import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-floods',
  standalone: true,
  imports: [],
  templateUrl: './floods.component.html',
  styleUrl: './floods.component.css'
})
export class FloodsComponent {
  yleujutused: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://environment.data.gov.uk/flood-monitoring/id/floods').subscribe(res => {
        this.yleujutused = res.items;
    })
  }
}
