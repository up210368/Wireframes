package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import com.example.backend.dto.ProductDTO;
import com.example.backend.model.Product;

public interface ProductService {
    // Read
    List<Product> getAllProducts();

    Optional<Product> getProductById(int id);

    List<ProductDTO> getAllProductsDtos();

    Optional<ProductDTO> getProductDtoById(int id);

    // Create
    Product saveProduct(Product product);

    ProductDTO createProduct(ProductDTO productDTO);

    // Update
    Product updateProduct(int id, Product productDetails);

    ProductDTO updateProduct(int id, ProductDTO productDTO);

    // Delete
    void deleteProduct(int id);

}
