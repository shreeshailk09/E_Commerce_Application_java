package com.shree.service;

import com.shree.exception.UserException;
import com.shree.model.User;
import org.springframework.stereotype.Service;


public interface UserService {

    public User findUserById(Long userId) throws UserException;

    public User findUserprofileByJwt(String jwt) throws UserException;


}
