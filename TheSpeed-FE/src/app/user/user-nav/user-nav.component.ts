import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_ICONS, SPEED_LOGO } from 'src/app/shared/constants';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {


  LOGO_NAME = SPEED_LOGO.NAME;
  LOGO_NAV = SPEED_LOGO.NAV;
  NAV_HOME = NAV_ICONS.NAV_HOME;
  NAV_CREATE = NAV_ICONS.NAV_CREATE;
  NAV_EVENTS = NAV_ICONS.NAV_EVENTS;
  NAV_PROFILE = NAV_ICONS.NAV_PROFILE;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.router.navigate(['/']);
  }

}
