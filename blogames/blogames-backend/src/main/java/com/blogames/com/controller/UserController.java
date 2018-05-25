package com.blogames.com.controller;

import com.blogames.com.model.User;
import com.blogames.com.repository.UserRepository;
import com.blogames.com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController @CrossOrigin("*")
@RequestMapping()
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/user/register")
    public String registerUser(@RequestBody User user){
        userService.registerUser(user);
        return "";
    }
}
