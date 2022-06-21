package com.connect.service;


import com.connect.model.BenXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IBenXeService {
    Page<BenXe> findAll(Pageable pageable);

//    Page<BenXe> findAllandSearch(Pageable diemDen, Pageable pageable);


    void save(BenXe benXe);

    BenXe findBenXeById(String id);

    void delete(String id);

}
