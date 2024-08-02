package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    // Consulta para encontrar productos por nombre
    @Query("SELECT p FROM Product p WHERE p.productName = :productName")
    List<Product> findByProductName(@Param("productName") String productName);

    // Consulta para encontrar productos con precio mayor al especificado
    @Query("SELECT p FROM Product p WHERE p.productPrice > :price")
    List<Product> findProductsByPriceGreaterThan(@Param("price") float price);

    // Consulta para encontrar productos por rango de cantidad
    @Query("SELECT p FROM Product p WHERE p.productQTY BETWEEN :minQty AND :maxQty")
    List<Product> findProductsByQuantityRange(@Param("minQty") int minQty, @Param("maxQty") int maxQty);
}
