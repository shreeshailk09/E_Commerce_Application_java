package com.shree.service;

import com.shree.exception.ProductException;
import com.shree.model.Review;
import com.shree.model.User;
import com.shree.request.ReviewRequest;

import java.util.List;

public interface ReviewService {

    public Review createReview(ReviewRequest req, User user) throws ProductException;

    public List<Review> getAllReview(Long productId);
}
