import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cita } from '../models/citas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  
  // Datos de prueba
  private citas: Cita[] = [
    { id: 1, nombre: 'Cita médica', fecha: new Date('2024-04-26') },
    { id: 2, nombre: 'Reunión trabajo', fecha: new Date('2024-04-27') },
    { id: 3, nombre: 'Dentista', fecha: new Date('2024-04-28') }
  ];

  getCitas(): Observable<Cita[]> {
    return of(this.citas);
  }
}