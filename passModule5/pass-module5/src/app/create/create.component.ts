import {Component, OnInit} from '@angular/core';
import {LoaiXe} from '../model/loai-xe';
import {TenNhaXe} from '../model/ten-nha-xe';
import {LoaiXeService} from '../service/loai-xe.service';
import {TenNhaXeService} from '../service/ten-nha-xe.service';
import {BenXeService} from '../service/ben-xe.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BenXe} from '../model/ben-xe';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benXeCreate: FormGroup;
  benXe: BenXe[] = [];
  tenNhaXe: TenNhaXe [] = [];
  loaiXe: LoaiXe [] = [];


  constructor(private benXeService: BenXeService,
              private tenNhaXeService: TenNhaXeService,
              private loaiXeService: LoaiXeService,
              private router: Router) {

    this.benXeCreate = new FormGroup({
      id: new FormControl(''),
      loaiXe: new FormControl('', [Validators.required]),
      tenNhaXe: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      soDienThoai: new FormControl('', [Validators.required, Validators.pattern(/^(090|093|097)+([0-9]{7}$)/)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      gioKhoiHanh: new FormControl('', [Validators.required, Validators.min(5)]),
      gioDen: new FormControl('', [Validators.required, Validators.max(23)]),
    });

  }

  ngOnInit(): void {
    this.loaiXeService.getAllLoaiXe().subscribe(loaiXe => {
      this.loaiXe = loaiXe;
    });
    this.tenNhaXeService.getAllTenNhaXe().subscribe(nhaXe => {
      this.tenNhaXe = nhaXe;
    });
  }


  onSubmit() {
    const benXe = this.benXeCreate.value;
    console.log(benXe);
    this.benXeService.saveBenXe(benXe).subscribe(() => {
      alert('Tạo thành công ');
      this.router.navigateByUrl('/');
      // tslint:disable-next-line:only-arrow-functions
      // setTimeout(function() {
      //     alert('Tạo thành công');
      //   }, 3000
      // );
      this.benXeCreate.reset();
    });

  }
}
