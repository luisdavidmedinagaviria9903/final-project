import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-queries',
  templateUrl: './health-queries.component.html',
  styleUrls: ['./health-queries.component.css']
})
export class HealthQueriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'size'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Paciente 1', weight: 60, size: '60.5cm'},
  {position: 2, name: 'Paciente 2', weight: 78, size: '70.8cm'},
  {position: 3, name: 'Paciente 3', weight: 100, size: '100.10cm'},
];


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  size: string;
}
