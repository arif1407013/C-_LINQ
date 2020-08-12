import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public emailForm = new FormControl('');
  constructor() { }

  /**
   * rettro
i   */
  public rettro(i) {
    console.log(i);
  }

  /**
   * setEmail
   */
  public setEmail() {
    this.emailForm.setValue('lody');
  }

  formGroups = new FormGroup({
    City: new FormControl(''),
    Country: new FormControl(''),
    Authority: new FormGroup({
      Mayor: new FormControl(''),
      CityCorp: new FormControl(''),
    })
  });

  /**
   * showAddress
   */
  public showAddress() {
    console.log(this.formGroups);
  }

  ngOnInit(): void {
  }

}
