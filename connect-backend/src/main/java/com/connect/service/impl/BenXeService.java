package com.connect.service.impl;

import com.connect.model.BenXe;
import com.connect.repository.IBenXeRepository;
import com.connect.service.IBenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BenXeService implements IBenXeService {
    @Autowired
    private IBenXeRepository iBenXeRepository;


    @Override
    public Page<BenXe> findAll(Pageable pageable) {
        return iBenXeRepository.findAll(pageable);
    }

//    @Override
//    public Page<BenXe> findAllandSearch(Pageable diemDen, Pageable pageable) {
//        return iBenXeRepository.findAllByDiemDen(diemDen, pageable);
//    }

    @Override
    public void save(BenXe benXe) {
        iBenXeRepository.save(benXe);
    }

    @Override
    public BenXe findBenXeById(String id) {
        return iBenXeRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(String id) {
        iBenXeRepository.deleteById(id);
    }


}
