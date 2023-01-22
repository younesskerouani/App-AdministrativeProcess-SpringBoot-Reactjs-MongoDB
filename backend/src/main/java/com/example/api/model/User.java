package com.example.api.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "user")
public class User {

    @Id
    private String userId;
    private String cin;
    private String nom;
    private String prenom;
    private String password;
    private Boolean isAdmin = false ;
    private String profilePic;
}
