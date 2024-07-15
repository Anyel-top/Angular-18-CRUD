import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import {  HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-search-client',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [ClientService], 
  templateUrl: './search-client.component.html',
  styleUrl: './search-client.component.scss'
})
export class SearchClientComponent {
  public nombre: string = "";
  public cedula: string = "";
  public telefono: string = "";
  public correo: string = "";
  public direccion: string = "";

  constructor(private clientService: ClientService) { }

  async getClientByIdentification() {
    try {
      if (this.cedula !== "") {
        const cliente: any = await this.clientService.getClientByIdentification(this.cedula);
        if (cliente.length > 0) {
          const clientData = cliente[0];
          this.nombre = clientData.nombre;
          this.cedula = clientData.cedula;
          this.telefono = clientData.telefono;
          this.direccion = clientData.direccion;
          this.correo = clientData.correo;
        } else {
          // Manejar caso donde no se encontró ningún cliente
          console.log('Cliente no encontrado');
        }
      }
    } catch (error) {
      console.error('Error al obtener cliente:', error);
    }
  }
}