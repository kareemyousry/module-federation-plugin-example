import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authInfo } from '@demo/auth';
import { connectRouter } from './connect-router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  selector: 'mfe3-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {

  pid = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.pid)) {
      connectRouter();
    }
  }

  ngOnInit(): void {
    console.log('userName', authInfo.userName);
  }
}
