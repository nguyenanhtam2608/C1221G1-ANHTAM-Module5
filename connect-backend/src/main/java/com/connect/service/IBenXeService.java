package com.connect.service;


import com.connect.model.BenXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBenXeService {
    Page<BenXe> findAll(Pageable pageable);
}
