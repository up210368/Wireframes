package com.ecommerce.e_commerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.e_commerce.model.Product;
import com.ecommerce.e_commerce.repository.ProductRepository;

@Service
public class ProductService {
    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public List<Product> getProducts(){ //obtener todos los productos
        return productRepository.findAll();
    }
    //obtener por id
    public Optional<Product> getProduct(Long id){
        return productRepository.findById(id);
    }
    //delete product
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }
    //create and update product
    public void saveProduct(Product product){
        productRepository.save(product);
    }
    //update product
}
