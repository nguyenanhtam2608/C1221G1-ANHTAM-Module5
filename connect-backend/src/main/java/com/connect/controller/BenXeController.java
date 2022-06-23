package com.connect.controller;

import com.connect.model.BenXe;
import com.connect.service.IBenXeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
//@CrossOrigin("http://localhost:4200")
public class BenXeController {
    @Autowired
    private IBenXeService iBenXeService;
//    @Autowired
//    private ILoaiXeService iLoaiXeService;
//    @Autowired
//    private ITenNhaXeService iTenNhaXeService;


    @GetMapping(value = "/list")
    public ResponseEntity<Page<BenXe>> getList(@RequestParam Optional<String> sort,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "2") int size,
                                               @RequestParam("diemDen") Optional<String> diemDen
    ) {
        String diemDenn = diemDen.orElse("");
        Pageable paging = PageRequest.of(page, size);
        Page<BenXe> benXePage = this.iBenXeService.findAllandSearch(diemDenn, paging);

        if (!benXePage.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(benXePage, HttpStatus.OK);
    }


    @PostMapping(value = "/create")
    public ResponseEntity<BenXe> create(@RequestBody BenXe benXe) {
        this.iBenXeService.save(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "/update/{id}")
    public ResponseEntity<BenXe> update(@RequestBody BenXe benXe, @PathVariable String id) {
        this.iBenXeService.save(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/find/{id}")
    public ResponseEntity<BenXe> findBenXeById(@PathVariable String id) {
        BenXe benXe = this.iBenXeService.findBenXeById(id);

        if (benXe == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(benXe, HttpStatus.OK);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<BenXe> deleteBenXe(@PathVariable String id) {
        BenXe benXe = iBenXeService.findBenXeById(id);
        if (benXe == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iBenXeService.delete(id);
        return new ResponseEntity<>(benXe, HttpStatus.NO_CONTENT);
    }


}
