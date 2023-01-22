package com.example.api.model;

import org.springframework.data.annotation.Id;

public class employe {

    @Id
    private String employeId;
    private String cin;
    private String nom;
    private String prenom;
    private String password;
    private String profilePic;
}
