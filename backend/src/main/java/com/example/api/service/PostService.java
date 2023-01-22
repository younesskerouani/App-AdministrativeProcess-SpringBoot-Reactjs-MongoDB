package com.example.api.service;


import com.example.api.exception.PostNotFoundException;
import com.example.api.exception.UserNotAllowedToModify;
import com.example.api.exception.UserNotFoundException;
import com.example.api.model.Post;
import com.example.api.model.User;
import com.example.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    // Create Post
    public Post createPost(Post post){
        post.setPostId(UUID.randomUUID().toString().split("-")[0]);
        return postRepository.save(post);
    }

    // Update Post
//    public Post updatePost(Post newPost,String id){
//        Optional<Post> oldPost = postRepository.findById(id);
//        Post post1 = oldPost.get();
//
//        if(post1.getUsername().equals(newPost.getUsername())){
//
//            return postRepository.findById(id)
//                    .map(post -> {
//                        post.setTitle(newPost.getTitle());
//                        post.setDesc(newPost.getDesc());
//                        post.setPhoto(newPost.getPhoto());
//                        post.setCategories(newPost.getCategories());
//                        return postRepository.save(post);
//                    }).orElseThrow(() -> new PostNotFoundException(id));
//
//        }else{
//            throw new RuntimeException("You're not Allowed to modify a post not yours");
//        }
//    }
//
//    // Delete Post
//        public String deletePost(String username, String id){
//
//            Optional<Post> oldPost = postRepository.findById(id);
//            Post post1 = oldPost.get();
//
//            if(post1.getUsername().equals(username)) {
//
//                postRepository.deleteById(id);
//                return id + " Post deleted successfully ";
//
//            }else {
//                throw new RuntimeException("you can't Delete the other user account");
//            }
//        }
//
//        //Get Post
        public Optional<Post> getPostById(String id){
            return postRepository.findById(id);
        }
//
//        //Get Posts by username
//            public List<Post> getPostsByusername(String username){
//                Query query = new Query();
//                query.addCriteria(Criteria.where("username").is(username));
//
//                return mongoTemplate.find(query, Post.class);
//            }
//
//         // Get Posts by Category
//            public List<Post> getPostsByCategory(String Category){
//                Query query = new Query();
//                query.addCriteria(Criteria.where("categories").regex(Category, "i"));
//                return mongoTemplate.find(query, Post.class);
//            }
//
        //GET All Posts
         public List<Post> getAllPosts(){
            return postRepository.findAll();
         }
}
