package com.shree.controller;

import com.shree.exception.ProductException;
import com.shree.exception.UserException;
import com.shree.model.Review;
import com.shree.model.User;
import com.shree.request.ReviewRequest;
import com.shree.service.ReviewService;
import com.shree.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private UserService userService;

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req,
                                               @RequestHeader("Authorization") String jwt) throws UserException, ProductException{
        User user=userService.findUserprofileByJwt(jwt);
        Review review=reviewService.createReview(req,user);

        return new ResponseEntity<Review>(review, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productid}")
    public ResponseEntity<List<Review>> getProductReviews(@PathVariable Long productId,
                                                          @RequestHeader("Authorization") String jwt) throws UserException,ProductException{
        User user=userService.findUserprofileByJwt(jwt);
        List<Review> reviews=reviewService.getAllReview(productId);

        return new ResponseEntity<>(reviews,HttpStatus.ACCEPTED);
    }
}
