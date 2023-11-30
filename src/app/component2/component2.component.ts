import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServeiComp1i2Service} from "../servei-comp-1i2.service";

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component implements OnInit{
  serveiComp:any
  constructor(private s: ServeiComp1i2Service) {

  }
  ngOnInit() {
    this.serveiComp = this.s.num
  }
}
