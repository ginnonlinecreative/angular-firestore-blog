import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {FlexLayoutModule} from '@angular/flex-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}