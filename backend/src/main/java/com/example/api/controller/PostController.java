package com.example.api.controller;


import com.example.api.model.Post;
import com.example.api.model.User;
import com.example.api.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/post")
@CrossOrigin("http://localhost:3000")
public class PostController {

    @Autowired
    private PostService postService;

    // Create Post
    @PostMapping()
    Post newPost(@RequestBody Post post){
        return postService.createPost(post);
    }
//
//    // Update Post
//    @PutMapping("/{id}")
//    Post updatePost(@RequestBody Post newPost , @PathVariable String id) {
//        return postService.updatePost(newPost,id);
//    }
//
//    // Delete Post
//    @DeleteMapping("/{id}")
//    String deleteThePost(@RequestBody String username , @PathVariable String id){
//        return postService.deletePost(username,id);
//    }
//
//    // Get Post
    @GetMapping("/{id}")
    public Optional<Post> getPost(@PathVariable String id){
        return postService.getPostById(id);
    }

    @GetMapping
    public List<Post> getPost(){
        return postService.getAllPosts();
    }


//    @GetMapping
//    public List<Post> getAllPosts(@RequestParam(name = "cat", required = false) String catName ,
//                                  @RequestParam(name = "user",required = false) String username )
//    {
//        List<Post> posts ;
//        if(username!=null){
//            posts = postService.getPostsByusername(username);
//        }else if(catName!=null){
//            posts = postService.getPostsByCategory(catName);
//        }else{
//            posts = postService.getAllPosts();
//        }
//        return posts;
//    }
}
