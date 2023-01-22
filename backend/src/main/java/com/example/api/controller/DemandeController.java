package com.example.api.controller;


import com.example.api.model.Demande;
import com.example.api.model.Post;
import com.example.api.service.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/demande")
@CrossOrigin("http://localhost:3000")
public class DemandeController {

    @Autowired
    private DemandeService demandeService;

     //Create Demande
      @PostMapping
     Demande newDemande(@RequestBody Demande demande){ return demandeService.createDemande(demande);}

     //Get All demande by Cin
      @GetMapping("/{cin}")
      public List<Demande> GetAllUserDemande(@PathVariable String cin){
            return demandeService.getDemandeByCin(cin);
        }

       //accept Demande
     @PostMapping("/accepter/{demandeId}")
    public void accepterDemande(@PathVariable String demandeId){
          demandeService.accepterDemande(demandeId);
     }

     //refuser Demande
    @PostMapping("/rejeter/{demandeId}")
     public void refuserDemande(@PathVariable String demandeId){
         demandeService.refuserDemande(demandeId);
     }

     //archiver Demande
    @PostMapping("/archiver/{demandeId}")
    public void archiverDemande(@PathVariable String demandeId){
          demandeService.archiverDemande(demandeId);
    }

    //get All demande with their status
    @GetMapping("/All")
    public List<Demande> getAllDemande(){
      return demandeService.getAllDemande();
    }

    @GetMapping("/archivedDemande")
    public List<Demande> getAllArchivedDemande(){
        return demandeService.getAllArchivedDemande();
    }

    //get Demande by jeton
    @GetMapping("/{jeton}")
    public Demande getDemandeByjeton(@PathVariable String jeton){
      return demandeService.getDemandeByJeton(jeton);
    }



}
