package com.connect.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "loai_xe")
public class LoaiXe {
    @Id
    private int id;
    private String name;
    @JsonBackReference
    @OneToMany(mappedBy = "loaiXe")
    private List<BenXe> benXes;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<BenXe> getBenXes() {
        return benXes;
    }

    public void setBenXes(List<BenXe> benXes) {
        this.benXes = benXes;
    }
}
