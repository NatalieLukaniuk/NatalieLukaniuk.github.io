import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  anchors = [
    {
      name: 'Experience',
      href: 'experience'
    },
    {
      name: 'Contacts',
      href: 'contacts'
    },
  ];

  isMainPage = true;

  constructor(private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer, private router: Router) {
    this.addIcons();
    this.subscribeNavigation()
  }


  addIcons() {
    this.iconRegistry.addSvgIcon(
      'telegram',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/telegram-ion.svg')
    );
    this.iconRegistry.addSvgIcon(
      'viber',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/viber.svg')
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/linkedin.svg')
    );
    this.iconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/github.svg')
    );
    this.iconRegistry.addSvgIcon(
      'email',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/email.svg')
    );
    this.iconRegistry.addSvgIcon(
      'home',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/home.svg')
    );
  }

  subscribeNavigation() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMainPage = event.url.includes('main')
      }
    })
  }

  goAnchor(elId: string) {
    if (this.isMainPage) {
      this.scrollTo(elId);
    } else {
      this.router.navigate(['main']);
      const waitForNavigationEnd = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this.scrollTo(elId);
            waitForNavigationEnd.unsubscribe();
          }, 100)
        }
      })
    }
  }

  scrollTo(elId: string) {
    if (elId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else {
      const element = document.getElementById(elId);
      window.scrollTo({
        top: element?.offsetTop,
        behavior: "smooth"
      })
    }

  }

  go(link: string) {
    this.router.navigate([link])
  }
}
