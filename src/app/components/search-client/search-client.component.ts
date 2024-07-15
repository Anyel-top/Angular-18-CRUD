import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-client',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './search-client.component.html',
  styleUrl: './search-client.component.scss'
})
export class SearchClientComponent {
  public usuario:any;
  public nombre: string = "";
  public cedula: string = "";
  public telefono: string = "";
  public correo: string = "";
  public direccion: string = "";

  
}
