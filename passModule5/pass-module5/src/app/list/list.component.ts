import {Component, OnInit} from '@angular/core';
import {BenXe} from './ben-xe';
import {BenXeService} from '../service/ben-xe.service';
import {TenNhaXeService} from '../service/ten-nha-xe.service';
import {LoaiXeService} from '../service/loai-xe.service';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benXe: BenXe[] = [];
  p: number;
  id: string;
  tenNhaXe: string;
  totalElements: number = 0;


  constructor(private benXeService: BenXeService) {
  }

  ngOnInit(): void {
    this.getBenXe({page: '0', size: '2'});

  }

  private getBenXe(request) {
    this.benXeService.getAll(request).subscribe(
      benXe => {
        console.log(benXe);
        this.benXe = benXe['content'];
        this.totalElements = benXe['totalElements'];
        console.log(this.benXe);
      },
      error => {
        alert('Thao tác qua nhanh');
      }
    );
  }

  nextPage(event: PageEvent) {
    const request = {
      page: undefined,
      size: undefined
    };
    request.page = event.pageIndex.toString();
    request.size = event.pageSize.toString();
    this.getBenXe(request);
  }


  showDeleteModal(id: string, name: string) {
    this.id = id;
    this.tenNhaXe = name;
  }

  deleteBenXe(idT: string) {
    this.benXeService.deleteBenXe(idT).subscribe(() => {
        this.ngOnInit();
      }, error => alert('ERROR')
    );
    // this.route.navigateByUrl('/customer/list');
  }
}
