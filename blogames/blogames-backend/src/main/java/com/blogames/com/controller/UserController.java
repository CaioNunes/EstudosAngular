package com.blogames.com.controller;

import com.blogames.com.model.User;
import com.blogames.com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController @CrossOrigin("*")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping(value = "/user/save")
    public void save(@RequestBody User user){
        userRepository.save(user);
    }
}
