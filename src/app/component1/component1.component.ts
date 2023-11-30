import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServeiComp1i2Service} from "../servei-comp-1i2.service";
// @ts-ignore
import {countWords, changeSize, yellowSubmarine, addImage} from '../funcions.js';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component implements OnInit{
  dom1:any
  divServei:any
  constructor(private s: ServeiComp1i2Service) {
    this.dom1 = document.URL

  }
  ngOnInit() {
    let idTitol = document.getElementById('titol')!;
    idTitol.innerHTML = idTitol.innerHTML.toUpperCase();
    yellowSubmarine('titol');
    changeSize();
    countWords('contarParagraf', 'numParaules');
    addImage();

    this.divServei = document.getElementById('divServei');
    this.divServei.innerHTML = "Hola, bones aquest es el text de dins del DIV del component1";
    this.s.num = this.divServei.innerHTML;
  }
}
