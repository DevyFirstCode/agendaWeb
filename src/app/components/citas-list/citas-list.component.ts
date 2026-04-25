import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../models/citas.interfaces';
@Component({
  selector: 'app-citas-list',
  imports: [CommonModule],
  templateUrl: './citas-list.component.html',
  styleUrl: './citas-list.component.scss'
})
export class CitasListComponent implements OnInit {
  citas: Cita[] = [];

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.citasService.getCitas().subscribe(data => {
      this.citas = data;
    });
  }
}
