import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-file-saver',
  imports: [FileSaverComponent],
  templateUrl: './file-saver.component.html',
  styleUrl: './file-saver.component.css',
})
export class FileSaverComponent {
  //https://www.npmjs.com/package/file-saver

  //npm install file-saver @types/file-saver ngx-filesaver --save

  saveFile() {
    const blob = new Blob(['Hello, world!'], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, 'hello world.txt');
  }

  saveImage() {
    var canvas: any = document.getElementById('stage');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = '#D74022';
      ctx.fillRect(25, 25, 150, 150);

      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.clearRect(60, 60, 120, 120);
      ctx.strokeRect(90, 90, 80, 80);
    }

    canvas.toBlob(function (blob: any) {
      saveAs(blob, 'pretty image.png');
    });
  }
}
