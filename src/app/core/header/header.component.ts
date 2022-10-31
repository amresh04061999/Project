import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isOpen = false;
  public menu: boolean = false;

  constructor() {

  }


  ngOnInit(): void {
  }
  public logout() {
    // localStorage.clear();
    // this.route.navigate(['/login'])
  }
  public opneMenu() {
    this.menu = !this.menu
  }
}
