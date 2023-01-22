package com.example.api.exception;

public class UserNotAllowedToModify extends RuntimeException{

    public  UserNotAllowedToModify(String id){
        super("you'r not allowed to modify the User with id: "+id);
    }
}
