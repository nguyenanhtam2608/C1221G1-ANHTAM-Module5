package com.connect.service.impl;

import com.connect.model.LoaiXe;
import com.connect.repository.ILoaiXeRepository;
import com.connect.service.ILoaiXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiXeService implements ILoaiXeService {
    @Autowired
    private ILoaiXeRepository iLoaiXeRepository;


    @Override
    public List<LoaiXe> findAll() {
        return iLoaiXeRepository.findAll();
    }
}
