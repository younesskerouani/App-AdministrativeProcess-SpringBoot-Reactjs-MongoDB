package com.example.api.exception;

public class PostNotFoundException extends RuntimeException{

    public  PostNotFoundException(String id){
        super("Could not found the Post with id "+id);
    }
}
