package com.connect.service.impl;

import com.connect.model.BenXe;
import com.connect.repository.IBenXeRepository;
import com.connect.service.IBenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BenXeService implements IBenXeService {
    @Autowired
    private IBenXeRepository iBenXeRepository;


    @Override
    public Page<BenXe> findAll(Pageable pageable) {
        return iBenXeRepository.findAll(pageable);
    }
}
