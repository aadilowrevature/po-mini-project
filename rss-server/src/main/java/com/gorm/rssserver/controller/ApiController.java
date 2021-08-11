package com.gorm.rssserver.controller;

import com.gorm.rssserver.service.RssService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ApiController {

    @Autowired
    private RssService rssService; //should make this an interface and class combo

    @GetMapping("/test")
    public String returnTest(){
        System.out.println("Api Controller test hit");
        return "test sent";
    }

}
