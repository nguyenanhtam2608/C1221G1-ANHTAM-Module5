package com.connect.controller;

import com.connect.model.BenXe;
import com.connect.service.IBenXeService;
import com.connect.service.ILoaiXeService;
import com.connect.service.ITenNhaXeService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin
public class BenXeController {
    @Autowired
    private IBenXeService iBenXeService;
//    @Autowired
//    private ILoaiXeService iLoaiXeService;
//    @Autowired
//    private ITenNhaXeService iTenNhaXeService;


    @GetMapping(value = "/list")
    public ResponseEntity<Page<BenXe>> getList(@RequestParam Optional<String> sort,
//                                               @PageableDefault(value = 1 ) Pageable pageable,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "1") int size) {


        Pageable paging = PageRequest.of(page, size);
        Page<BenXe> benXePage = this.iBenXeService.findAll(paging);
        if (!benXePage.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(benXePage, HttpStatus.OK);


    }


}
