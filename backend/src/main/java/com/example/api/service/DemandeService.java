package com.example.api.service;

import com.example.api.model.Demande;
import com.example.api.model.Jeton;
import com.example.api.repository.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import java.util.List;
import java.util.UUID;

@Service
public class DemandeService {

    @Autowired
    private DemandeRepository demandeRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Demande createDemande(Demande demande){
        demande.setDemandeId(UUID.randomUUID().toString().split("-")[0]);
        demande.setStatus("pending");
        return demandeRepository.save(demande);
    }

    public List<Demande> getDemandeByCin(String cin){
                 Query query = new Query();
             query.addCriteria(Criteria.where("cin").is(cin));
              return mongoTemplate.find(query, Demande.class);
    }

    public void accepterDemande(String demandeId){
        Query query = new Query();
        query.addCriteria(Criteria.where("demandeId").is(demandeId));
        Update update = new Update();
        update.set("status", "accepted");
        mongoTemplate.upsert(query,update,Demande.class);

        Jeton jeton = new Jeton();

        List<Demande> demandes = mongoTemplate.find(query,Demande.class);
        Demande demande = demandes.get(0);

        jeton.setJetonId(UUID.randomUUID().toString().split("-")[0]);
        jeton.setCin(demande.getCin());
        jeton.setDemandeId(demandeId);
        mongoTemplate.save(jeton);
    }

    public void refuserDemande(String demandeId){
        Query query = new Query();
        query.addCriteria(Criteria.where("demandeId").is(demandeId));
        Update update = new Update();
        update.set("status", "rejected");
        mongoTemplate.upsert(query,update,Demande.class);
    }

    public void archiverDemande(String demandeId){
           Demande demande = demandeRepository.findDemandeByDemandeId(demandeId);
           String status = demande.getStatus();

           if(status.equals("finished") || status.equals("rejected")){
               mongoTemplate.insert(demande,"Archive_des_Demandes");
               Query query = new Query();
               query.addCriteria(Criteria.where("demandeId").is(demandeId));
               mongoTemplate.findAndRemove(query,Demande.class,"demande");
           }
    }

    public List<Demande>getAllDemande(){
         return demandeRepository.findAll();
    }

    public List<Demande>getAllArchivedDemande(){
        return mongoTemplate.findAll(Demande.class,"Archive_des_Demandes");
    }

    public Demande getDemandeByJeton(String jeton){
        Query query1 = new Query();
        query1.addCriteria(Criteria.where("jetonId").is(jeton));
       List<Jeton> jetonFound = mongoTemplate.find(query1,Jeton.class);
       Jeton jeton2 = jetonFound.get(0);

        Query query2 = new Query();
        query2.addCriteria(Criteria.where("demandeId").is(jeton2.getDemandeId()));
        List<Demande> demandeFound = mongoTemplate.find(query2,Demande.class);
        return demandeFound.get(0);

    }
}
