package com.connect.model;


import javax.persistence.*;

@Entity
@Table(name = "ben_xe")
public class BenXe {
    @Id
    private java.lang.String id;
    private String diemDen;
    private String diemDi;
    private String soDienThoai;
    private String avatar;
    private String email;
    @Column(columnDefinition = "TIME")
    private String gioKhoiHanh;
    @Column(columnDefinition = "TIME")
    private String gioDen;
    @ManyToOne
    @JoinColumn(name = "id_ten_nha_xe", referencedColumnName = "id")
    public TenNhaXe tenNhaXe;

    @ManyToOne
    @JoinColumn(name = "id_loai_xe", referencedColumnName = "id")
    public LoaiXe loaiXe;


    public BenXe() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioKhoiHanh() {
        return gioKhoiHanh;
    }

    public void setGioKhoiHanh(String gioKhoiHanh) {
        this.gioKhoiHanh = gioKhoiHanh;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }

    public TenNhaXe getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(TenNhaXe tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public LoaiXe getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(LoaiXe loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
