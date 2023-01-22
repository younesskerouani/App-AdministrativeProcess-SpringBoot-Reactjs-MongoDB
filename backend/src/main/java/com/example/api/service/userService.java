package com.example.api.service;

import com.example.api.exception.UserNotAllowedToModify;
import com.example.api.exception.UserNotFoundException;
import com.example.api.model.User;
import com.example.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class userService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    // create User
    public User createUser(User user){
        user.setUserId(UUID.randomUUID().toString().split("-")[0]);
        return userRepository.save(user);
    }

    // Login
    public User LoginUser(User user1){

        String CIN = user1.getCin();
        String password = user1.getPassword();

        Query query = new Query();
        query.addCriteria(Criteria.where("cin").is(CIN));

        List<User> users = mongoTemplate.find(query, User.class);
        User user2 = users.get(0);

        if(user2.getPassword().equals(password)){
            return user2;
        }else{
            return  null;
        }
    }


     //GET USER
//            public Optional<User> getUserById(String id){
//                return userRepository.findById(id);
//            }
}
