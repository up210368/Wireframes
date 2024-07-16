package com.ecommerce.e_commerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class loginController {
  @GetMapping("/")
  public String saludar() {
    return "login";
  }
}
