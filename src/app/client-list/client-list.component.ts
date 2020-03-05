import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client  } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(private route:ActivatedRoute,
    private router:Router,private clientService:ClientService) { }

  ngOnInit() {
    
    this.clientService.getClients()
    .subscribe(data => {
      this.clients = data;
    });
    
  }

  deleteClient(client: Client): void {
    console.log("delete client");
    this.clientService.deleteClient(client.id).subscribe( data => {
      this.clients = this.clients.filter(u => u !== client);
    })
  }
  updateClient(client:Client){
    console.log("update client");
    localStorage.removeItem("editClientId");
    localStorage.setItem("editClientId", client.id.toString());
    this.router.navigate(['/editClient']);
  }

  
}
