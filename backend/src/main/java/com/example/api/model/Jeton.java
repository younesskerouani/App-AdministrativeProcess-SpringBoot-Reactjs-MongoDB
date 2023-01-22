package com.example.api.model;

import lombok.*;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Jeton {

    @Id
    private String jetonId;
    private String demandeId;
    private String cin;

}
