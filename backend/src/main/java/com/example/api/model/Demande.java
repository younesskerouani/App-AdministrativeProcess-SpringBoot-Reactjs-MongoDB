package com.example.api.model;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Demande {

    @Id
    private String demandeId;
    private String title;
    private String cin;
    private String status;
    private List<String> documents;
}
