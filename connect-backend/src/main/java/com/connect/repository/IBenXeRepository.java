package com.connect.repository;

import com.connect.model.BenXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBenXeRepository extends JpaRepository<BenXe, String> {
    //    Page<BenXe> findAllByDiemDen(Pageable diemDen, Pageable pageable);
    Page<BenXe> findAll(Pageable pageable);


//    List<BenXe> findAllById(String id);

}
