import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Component1Component} from "./component1/component1.component";
import {Component2Component} from "./component2/component2.component";
import {Componentex11Component} from "./componentex11/componentex11.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Component1Component, Component2Component, Componentex11Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDOMNadirElHaidouri';
}
