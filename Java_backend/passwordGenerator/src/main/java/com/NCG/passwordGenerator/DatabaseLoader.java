package com.NCG.passwordGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component 
public class DatabaseLoader {
    @SuppressWarnings(value = "unused")
    private final passKeyRepository repository;

    @Autowired
    public DatabaseLoader(passKeyRepository repository) {
        this.repository = repository;
    } 
}
