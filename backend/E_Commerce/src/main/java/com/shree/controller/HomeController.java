package com.shree.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {

    @GetMapping("/")
    public String HomeController(){
        return "ECommerce is running!!";
    }
}
