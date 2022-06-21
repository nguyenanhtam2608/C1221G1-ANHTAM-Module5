package com.connect.controller;

import com.connect.model.LoaiXe;
import com.connect.model.TenNhaXe;
import com.connect.service.ILoaiXeService;
import com.connect.service.ITenNhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class TenNhaXeController {
    @Autowired
    ITenNhaXeService iTenNhaXeService;

    @GetMapping(value = "/tenNhaXe")
    public ResponseEntity<List<TenNhaXe>> getAllTenNhaXe() {
        List<TenNhaXe> tenNhaXes = this.iTenNhaXeService.findAll();
        if (tenNhaXes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(tenNhaXes, HttpStatus.OK);
    }
}
