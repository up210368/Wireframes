package com.ecommerce.e_commerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.ecommerce.e_commerce.model.Product;
import com.ecommerce.e_commerce.service.ProductService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class ProductController {
    private final ProductService productService;

    public ProductController(@Autowired ProductService productService) {
        this.productService = productService;
    }

    // Crear productos
    @GetMapping({ "/createproduct" })
    public String Create(Model model) {
        model.addAttribute("product", new Product());
        return "crud";
    }

    @PostMapping("/createproduct")
    public String save(@Valid Product product, BindingResult br) {
        if (br.hasErrors()) {
            return "crud";
        }
        productService.saveProduct(product);
        return "redirect:/"; // cambiar a la vista de productos
    }

    // Leer productos
    @GetMapping({ "/allproducts" })
    public ResponseEntity<List<Product>> Read() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping("/eliminar/{id}")  // Eliminar Boton
    public String deleteProduct(@PathVariable Long id ) {
        if (id > 0 ) {
            productService.deleteProduct(id);
        }
        return "redirect:/";   // equivalente a  @GetMapping ("/listado")
    } 

    @GetMapping("/update/{id}")
    public ResponseEntity<Optional<Product>> updateProduct(@PathVariable Long id){
        return ResponseEntity.ok(productService.getProduct(id));
    }
    

}
