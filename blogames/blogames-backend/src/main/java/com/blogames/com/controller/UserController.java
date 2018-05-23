package com.blogames.com.controller;

import com.blogames.com.model.User;
import com.blogames.com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController @CrossOrigin("*")
@RequestMapping()
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping(value = "/user/save")
    public String save(@RequestBody User user){
        userRepository.save(user);
        return "";
    }
}
