package com.connect.controller;

import com.connect.model.LoaiXe;
import com.connect.service.ILoaiXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class LoaiXeController {
    @Autowired
    ILoaiXeService iLoaiXeService;

    @GetMapping(value = "/loaiXe")
    public ResponseEntity<List<LoaiXe>> getAllLoaiXe() {
        List<LoaiXe> loaiXes = this.iLoaiXeService.findAll();
        if (loaiXes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(loaiXes, HttpStatus.OK);
    }
}
