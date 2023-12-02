import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

// @ts-ignore
import { MouseEvent, KeyboardEvent } from 'react';


@Component({
  selector: 'app-componentex11',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentex11.component.html',
  styleUrl: './componentex11.component.css'
})
export class Componentex11Component implements OnInit{

  constructor() {
  }
  ngOnInit() {

    const form: HTMLElement | null = document.getElementById('formId');

    const item: HTMLElement | null = document.getElementById('item');

    if (form) {
      form.addEventListener('click', youClicked);
    }

    function youClicked(e: MouseEvent): void {
      e.preventDefault();
      const value: string = (document.getElementById('value') as HTMLInputElement).value;
      if (value === "") {
        alert('ENTER VALID VALUE');
      } else {
        const li: HTMLLIElement = document.createElement('li');

        li.className = 'itemContent';

        li.appendChild(document.createTextNode(value));

        const but: HTMLButtonElement = document.createElement('button');

        but.className = 'but';

        but.appendChild(document.createTextNode('X'));

        li.appendChild(but);
        if (item) {
          item.appendChild(li);
        }

        console.log(item);
      }
    }

    const del: HTMLElement | null = document.getElementById('item');

    if (del) {
      del.addEventListener('click', remove);
    }

    function remove(e: MouseEvent): void {
      if (e.target.classList.contains('but')) {
        if (confirm('Are you sure ?')) {
          const delParent: HTMLElement | null = e.target.parentElement;
          if (del && delParent) {
            del.removeChild(delParent);
          }
        }
      }
    }

    const hell: HTMLElement | null = document.getElementById('search');

    if (hell) {
      hell.addEventListener('keyup', searchfn);
    }

    function searchfn(e: KeyboardEvent): void {
      const text: string = (e.target as HTMLInputElement).value.toLowerCase();

      // @ts-ignore
      const items: HTMLCollectionOf<HTMLLIElement> = item?.getElementsByTagName('li') || [];

      Array.from(items).forEach(function (item) {
        const itemName: string = item.firstChild?.textContent || "";
        if (itemName.toLowerCase().indexOf(text) !== -1) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

  }

}
