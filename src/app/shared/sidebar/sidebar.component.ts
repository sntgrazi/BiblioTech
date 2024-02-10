import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  isSidebarOpen = true;
  
  @Output() toggleSidebar = new EventEmitter<string>();

  emitToggleSidebar(className: string): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggleSidebar.emit(className);
  }
}
