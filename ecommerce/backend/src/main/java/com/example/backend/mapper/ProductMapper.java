package com.example.backend.mapper;

import org.springframework.stereotype.Component;

import com.example.backend.dto.ProductDTO;
import com.example.backend.model.Product;

@Component
public class ProductMapper {
    public ProductDTO toProductDTO(Product product) {
        if (product == null) {
            return null;
        }

        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductID(product.getProductID());
        productDTO.setProductName(product.getProductName());
        productDTO.setRating(product.getRating());
        productDTO.setDescription(product.getDescription());
        productDTO.setProductPrice(product.getProductPrice());
        productDTO.setProductQTY(product.getProductQTY());
        productDTO.setImg1(product.getImg1());
        productDTO.setImg2(product.getImg2());
        productDTO.setImg3(product.getImg3());
        return productDTO;
    }

    public Product toProduct(ProductDTO productDTO) {
        if (productDTO == null) {
            return null;
        }

        Product product = new Product();
        product.setProductID(productDTO.getProductID());
        product.setProductName(productDTO.getProductName());
        product.setRating(product.getRating());
        product.setDescription(productDTO.getDescription());
        product.setProductPrice(productDTO.getProductPrice());
        product.setProductQTY(productDTO.getProductQTY());
        product.setImg1(productDTO.getImg1());
        product.setImg2(productDTO.getImg2());
        product.setImg3(productDTO.getImg3());
        return product;
    }
}
