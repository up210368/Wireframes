package com.example.backend.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.ProductDTO;
import com.example.backend.mapper.ProductMapper;
import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import com.example.backend.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, ProductMapper productMapper) {
        this.productRepository = productRepository;
        this.productMapper = productMapper;
    }

    // Read
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<ProductDTO> getAllProductsDtos() {
        return productRepository.findAll().stream()
                .map(productMapper::toProductDTO)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public Optional<ProductDTO> getProductDtoById(int id) {
        return productRepository.findById(id)
                .map(productMapper::toProductDTO);
    }

    // Create
    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = productMapper.toProduct(productDTO);
        Product savedProduct = productRepository.save(product);
        return productMapper.toProductDTO(savedProduct);
    }

    // Update
    @Override
    public Product updateProduct(int id, Product productDetails) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setProductName(productDetails.getProductName());
                    product.setDescription(productDetails.getDescription());
                    product.setProductPrice(productDetails.getProductPrice());
                    product.setProductQTY(productDetails.getProductQTY());
                    product.setImg1(productDetails.getImg1());
                    product.setImg2(productDetails.getImg2());
                    product.setImg3(productDetails.getImg3());
                    return productRepository.save(product);
                }).orElse(null);
    }

    @Override
    public ProductDTO updateProduct(int id, ProductDTO productDTO) {
        return productRepository.findById(id)
                .map(existingProduct -> {
                    existingProduct.setProductName(productDTO.getProductName());
                    existingProduct.setDescription(productDTO.getDescription());
                    existingProduct.setProductPrice(productDTO.getProductPrice());
                    existingProduct.setProductQTY(productDTO.getProductQTY());
                    existingProduct.setImg1(productDTO.getImg1());
                    existingProduct.setImg2(productDTO.getImg2());
                    existingProduct.setImg3(productDTO.getImg3());
                    Product updatedProduct = productRepository.save(existingProduct);
                    return productMapper.toProductDTO(updatedProduct);
                }).orElse(null);
    }

    // Delete
    @Override
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
}
