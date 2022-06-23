package com.connect.repository;

import com.connect.model.BenXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IBenXeRepository extends JpaRepository<BenXe, String> {
    //    Page<BenXe> findAllByDiemDen(Pageable diemDen, Pageable pageable);
    Page<BenXe> findAll(Pageable pageable);

    Page<BenXe> findAllByDiemDenContaining(@Param("diemDen") String diemDen, Pageable p);


//    List<BenXe> findAllById(String id);

}
