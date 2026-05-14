package com.tarifvergleich.electricity.service.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tarifvergleich.electricity.model.EmailRequestType;
import com.tarifvergleich.electricity.repository.EmailRequestTypeRepository;

@Service
public class AdminEmailRequestTypeServiceImpl
        implements AdminEmailRequestTypeService {

    @Autowired
    private EmailRequestTypeRepository repository;

    @Override
    public EmailRequestType save(EmailRequestType requestType) {

        return repository.save(requestType);
    }

    @Override
    public List<EmailRequestType> getAll() {

        return repository.findAll();
    }
}