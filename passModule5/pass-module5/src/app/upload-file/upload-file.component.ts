import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  selectedFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  listIMG: Array<string> = [];
  myMap = new Map();
  checkUploadAvatar = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {
    console.log(this.getTimeNow());
  }

  // khi upload file qua thẻ input dưới dạng 1 hoăc nhiều file thì tệp đó thông
  // qua event change được kích hoạt và all file
  // sẽ lưu trữ trong $event.target.files
  onfileChange($event) {
    this.selectedFile = $event.target.files[0];
  }

  public onUpload() {
    this.checkUploadAvatar = true;
    const id = this.selectedFile.name + this.getTimeNow();
    // Tạo ra 1 cái name riêng để hiển thị trên DB của FB
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
        // Tra ve  1 cai chuoi sieu van ban luu tren FB
      })
      .then(downloadURL => {
        // cHUYEN Value tu component cha sang con
        this.downloadURL = downloadURL;
        this.giveURLtoCreate.emit(this.downloadURL);
        this.checkUploadAvatar = false;
        this.listIMG.push(downloadURL);
        console.log('LIST ==> ', this.listIMG);
        for (let i = 0; i < this.listIMG.length; i++) {
          this.myMap.set(i, this.listIMG[i]);
        }
        console.log('map ---> ', this.myMap);
        return downloadURL;
      })
      .catch(error => {
        console.log(`Failed to upload avatar and get link ${error}`);
      });
  }

  getTimeNow() {
    const now = new Date();
    return now.toISOString();
  }
}
