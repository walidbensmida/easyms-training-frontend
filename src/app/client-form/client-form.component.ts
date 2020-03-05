import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClientService  } from "../service/client.service";
import { Client } from "../model/client";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client:Client

  constructor(private route:ActivatedRoute,
    private router:Router,
    private clientService:ClientService) {
      this.client=new Client();
     }
onSubmit() {
  console.log("On submit form");
  this.clientService.createClient(this.client).subscribe(result => this.gotoClientList())
  }
  ngOnInit() {
    
  }

  gotoClientList() {
    this.router.navigate(['/clients']);
  }

}
