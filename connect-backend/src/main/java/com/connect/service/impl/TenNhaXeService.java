package com.connect.service.impl;

import com.connect.model.TenNhaXe;
import com.connect.repository.ILoaiXeRepository;
import com.connect.repository.ITenNhaXeRepository;
import com.connect.service.ITenNhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TenNhaXeService implements ITenNhaXeService {
    @Autowired
    private ITenNhaXeRepository iTenNhaXeRepository;

    @Override
    public List<TenNhaXe> findAll() {
        return iTenNhaXeRepository.findAll();
    }
}
