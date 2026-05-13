package com.tarifvergleich.electricity.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tarifvergleich.electricity.model.EmailRequestType;
import com.tarifvergleich.electricity.service.admin.AdminEmailRequestTypeService;

@RestController
@RequestMapping("/admin/email-category")
public class AdminEmailRequestTypeController {

    @Autowired
    private AdminEmailRequestTypeService service;

    @PostMapping("/save")
    public EmailRequestType save(
            @RequestBody EmailRequestType requestType) {

        return service.save(requestType);
    }

    @GetMapping("/list")
    public List<EmailRequestType> getAll() {

        return service.getAll();
    }
}