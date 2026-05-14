package com.tarifvergleich.electricity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tarifvergleich.electricity.model.EmailRequestType;

public interface EmailRequestTypeRepository
        extends JpaRepository<EmailRequestType, Long> {
}