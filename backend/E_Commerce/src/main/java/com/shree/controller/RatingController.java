package com.shree.controller;

import com.shree.exception.ProductException;
import com.shree.exception.UserException;
import com.shree.model.Rating;
import com.shree.model.User;
import com.shree.request.RatingRequest;
import com.shree.service.RatingService;
import com.shree.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
   private UserService userService;

    @Autowired
   private RatingService ratingService;

    @PostMapping("/create")
    public ResponseEntity<Rating> createRating(@RequestBody RatingRequest req,
                                               @RequestHeader("Authorization") String jwt) throws UserException, ProductException
    {
        User user=userService.findUserprofileByJwt(jwt);
        Rating rating=ratingService.createRating(req,user);
        return new ResponseEntity<Rating>(rating, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductRatings(@PathVariable Long productId,
                                                          @RequestHeader("Authorization") String jwt) throws UserException,ProductException{
        User user=userService.findUserprofileByJwt(jwt);
        List<Rating> ratings=ratingService.getProductRatings(productId);
        return new ResponseEntity<>(ratings,HttpStatus.ACCEPTED);
    }
}

