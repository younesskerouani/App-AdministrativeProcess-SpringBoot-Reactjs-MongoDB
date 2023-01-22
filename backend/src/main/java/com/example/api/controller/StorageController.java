package com.example.api.controller;


import com.example.api.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/document")
@CrossOrigin("http://localhost:3000")
public class StorageController {

    @Autowired
    private StorageService storageService;


    @PostMapping
    public ResponseEntity<?> uploadDocumentToFIleSystem(@RequestParam("document") MultipartFile file) throws IOException {
        String uploadImage = storageService.uploadDocToFileSystem(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<?> downloadDocumentFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData=storageService.downloadDocumentFromFileSystem(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("document/png"))
                .body(imageData);

    }


}
