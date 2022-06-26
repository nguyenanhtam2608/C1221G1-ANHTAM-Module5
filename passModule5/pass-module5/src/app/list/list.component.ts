import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BenXe} from '../model/ben-xe';
import {BenXeService} from '../service/ben-xe.service';

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
  sizeImageW: number;
  sizeImageH: number;

  @ViewChild('nameSearch') nameSearch: ElementRef;

  constructor(private benXeService: BenXeService) {
  }

  ngOnInit(): void {
    this.getBenXe({page: '0', size: '2', diemDen: ''});

  }

  private getBenXe(request) {
    this.benXeService.searchBenXeDiemDen(request).subscribe(
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

  private nextPage(event: PageEvent) {
    const request = {
      page: undefined,
      size: undefined,
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

  searchDiemDen() {
    console.log(this.nameSearch.nativeElement.value);
    this.benXeService.searchBenXeDiemDen({page: 0, size: 2, diemDen: this.nameSearch.nativeElement.value}).subscribe(benXe => {
        // @ts-ignore
        this.benXe = benXe.content;
      }
    );

  }



}
