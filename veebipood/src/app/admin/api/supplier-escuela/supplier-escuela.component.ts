import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-escuela',
  standalone: true,
  imports: [],
  templateUrl: './supplier-escuela.component.html',
  styleUrl: './supplier-escuela.component.css'
})
export class SupplierEscuelaComponent {
  tooted: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://api.escuelajs.co/api/v1/products').subscribe(res => {
        this.tooted = res;
    })
  }
}
