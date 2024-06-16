// import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import '@angular/localize/init';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // title = 'Multi-Language';

  title = 'i18nDemo';

  languageList = [
    { code: 'hi', label: 'हिंदी' },
    { code: 'es', label: 'Espanol' },
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) {}

  ngOnInit(): void {
    // Register the Spanish locale data
    registerLocaleData(localeEs, 'es');

    // Bootstrap the Angular AppModule
    //   platformBrowserDynamic()
    //     .bootstrapModule(AppModule)
    //     .catch((err) => console.error(err));
    // }
  }
}
