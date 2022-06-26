import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TenNhaXe} from '../model/ten-nha-xe';
import {LoaiXe} from '../model/loai-xe';
import {TenNhaXeService} from '../service/ten-nha-xe.service';
import {LoaiXeService} from '../service/loai-xe.service';
import {BenXe} from '../model/ben-xe';
import {BenXeService} from '../service/ben-xe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from '@angular/common';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  tenNhaXe: TenNhaXe[] = [];
  loaiXe: LoaiXe[] = [];
  benXeUpdate: FormGroup;
  selectedImage: any = null;

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  constructor(private tenNhaXeService: TenNhaXeService,
              private loaiXeService: LoaiXeService,
              private benXeService: BenXeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.benXeUpdate = new FormGroup({
      id: new FormControl(''),
      loaiXe: new FormControl('', [Validators.required]),
      tenNhaXe: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      soDienThoai: new FormControl('', [Validators.required, Validators.pattern(/^(090|093|097)+([0-9]{7}$)/)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      gioKhoiHanh: new FormControl('', [Validators.required, Validators.min(5)]),
      gioDen: new FormControl('', [Validators.required, Validators.max(23)]),
      avatar: new FormControl('')
    });

  }

  ngOnInit(): void {
    this.loaiXeService.getAllLoaiXe().subscribe(loaiXe => {
      this.loaiXe = loaiXe;
    });
    this.tenNhaXeService.getAllTenNhaXe().subscribe(nhaXe => {
      this.tenNhaXe = nhaXe;
    });
    this.getBenXe(this.id);
  }

  getBenXe(id: string) {
    return this.benXeService.findById(id).subscribe(benXe => {
      this.benXeUpdate.patchValue(benXe);
    });
  }

  onSubmit(id: string) {


    const benXe = this.benXeUpdate.value;
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(finalize(() => {
      fileRef.getDownloadURL().subscribe(url => {

        this.benXeUpdate.patchValue(benXe.avatar = url);

        this.benXeService.updateBenXe(id, benXe).subscribe(() => {
            alert('Thanh Cong');
            this.router.navigateByUrl('');
          },
          error => {
            alert('Chưa update được');
            this.router.navigateByUrl('');
          });

      });
    })).subscribe();
  }


  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }


  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }
}
