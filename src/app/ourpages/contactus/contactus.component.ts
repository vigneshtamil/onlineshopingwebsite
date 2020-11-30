import { Component, OnInit } from '@angular/core';
import { ContactformService } from '../../shared/services/contactform.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  providers: [ContactformService]
})
export class ContactusComponent implements OnInit {
  constructor(public email:ContactformService) { 
    email.buildForm(); }

  ngOnInit(): void {
  }
}
