import {LoaiXe} from './loai-xe';
import {TenNhaXe} from './ten-nha-xe';

export interface BenXe {
  id: string;
  loaiXe: LoaiXe;
  tenNhaXe: TenNhaXe;
  avatar: string;
  diemDen: string;
  diemDi: string;
  soDienThoai: string;
  email: string;
  gioKhoiHanh: string;
  gioDen: string;


}
