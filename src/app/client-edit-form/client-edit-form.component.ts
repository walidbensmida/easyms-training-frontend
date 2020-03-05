import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from "../model/client";
import { ClientService } from "../service/client.service";
@Component({
  selector: 'app-client-edit-form',
  templateUrl: './client-edit-form.component.html',
  styleUrls: ['./client-edit-form.component.css']
})
export class ClientEditFormComponent implements OnInit {
  id: number;
  client: Client;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {

    let clientId = localStorage.getItem("editClientId");
    console.log("walid"+clientId)

    this.client=new Client();
 
    this.clientService.getClientById(parseInt(clientId, 10))
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.clientService.updateClient(this.client.id, this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoClientList();
  }

  gotoClientList() {
    this.router.navigate(['/clients']);
  }

  onSubmit()
  {
    this.updateEmployee();
  }
}
