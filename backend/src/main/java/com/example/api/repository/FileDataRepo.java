package com.example.api.repository;

import com.example.api.model.FileData;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface FileDataRepo extends MongoRepository<FileData, String> {
    Optional<FileData> findByName(String fileName);
}
