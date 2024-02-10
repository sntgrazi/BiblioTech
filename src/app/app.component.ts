import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca';

  isSidebarOpen = true;

  toggleSidebar(className: string): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.addOrRemoveClass('sidebar', className);
  }

  private addOrRemoveClass(elementId: string, className: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.toggle(className);
    }
  }
}
