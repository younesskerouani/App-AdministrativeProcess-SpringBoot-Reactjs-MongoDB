package com.example.api.repository;

import com.example.api.model.Demande;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DemandeRepository extends MongoRepository<Demande,String> {
   Demande findDemandeByDemandeId(String demandeId);
}
