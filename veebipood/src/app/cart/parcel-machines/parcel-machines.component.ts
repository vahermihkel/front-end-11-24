import { Component } from '@angular/core';
import { ParcelMachinesService } from './parcel-machines.service';

@Component({
  selector: 'app-parcel-machines',
  standalone: true,
  imports: [],
  templateUrl: './parcel-machines.component.html',
  styleUrl: './parcel-machines.component.css'
})
export class ParcelMachinesComponent {
  parcelMachines: any[] = [];

  constructor(private pmService: ParcelMachinesService) {}

  ngOnInit(): void {
    this.getPMByCountry("EE");
  }

  getPMByCountry(country: string) {
    this.pmService.getParcelMachines().subscribe(res => {
      this.parcelMachines = res.filter(pm => pm.A0_NAME === country);
    })
  }
}
