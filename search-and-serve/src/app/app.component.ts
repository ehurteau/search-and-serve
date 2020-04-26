import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search and Serve';

  ngAfterViewChecked() {
    (<any>$('[data-toggle="tooltip"]')).tooltip({
      trigger: 'hover'
    });
    $('[data-toggle="tooltip"]').on('mouseleave', function () {
      (<any>$(this)).tooltip('dispose');
    });
    $('[data-toggle="tooltip"]').on('click', function () {
      (<any>$(this)).tooltip('dispose');
    });
  }
  
}
