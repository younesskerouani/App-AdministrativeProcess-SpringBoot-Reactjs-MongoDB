package com.example.api.service;

import com.example.api.model.FileData;
import com.example.api.repository.FileDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class StorageService {

    @Autowired
    private FileDataRepo fileDataRepo;

    private final String FOLDER_PATH="E:/study/hafidi/atelier/documents/";

    public String uploadDocToFileSystem(MultipartFile file) throws IOException {

        String filePath=FOLDER_PATH+file.getOriginalFilename();

        FileData fileData=fileDataRepo.save(FileData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .filePath(filePath).build());

        file.transferTo(new File(filePath));

        if (fileData != null) {
            return "file uploaded successfully : " + filePath;
        }
        return null;
    }

    public byte[] downloadDocumentFromFileSystem(String fileName) throws IOException {
        Optional<FileData> fileData = fileDataRepo.findByName(fileName);
        String filePath=fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }

}
