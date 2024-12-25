import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileSaverComponent } from './file-saver/file-saver.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FileSaverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'file-saver';
}
