package com.shree.service;

import com.shree.exception.ProductException;
import com.shree.model.Rating;
import com.shree.model.User;
import com.shree.request.RatingRequest;

import java.util.List;

public interface RatingService {

    public Rating createRating(RatingRequest req, User user) throws ProductException;

    public List<Rating> getProductRatings(Long productId);

}
