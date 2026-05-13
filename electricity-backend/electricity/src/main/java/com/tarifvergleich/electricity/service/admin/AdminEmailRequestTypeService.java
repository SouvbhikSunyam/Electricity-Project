package com.tarifvergleich.electricity.service.admin;

import java.util.List;

import com.tarifvergleich.electricity.model.EmailRequestType;

public interface AdminEmailRequestTypeService {

    EmailRequestType save(EmailRequestType requestType);

    List<EmailRequestType> getAll();
}