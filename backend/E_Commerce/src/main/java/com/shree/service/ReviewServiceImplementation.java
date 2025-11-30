package com.shree.service;

import com.shree.exception.ProductException;
import com.shree.model.Product;
import com.shree.model.Review;
import com.shree.model.User;
import com.shree.repository.RatingsRepository;
import com.shree.repository.ReviewRepository;
import com.shree.request.ReviewRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImplementation implements ReviewService{

    private ReviewRepository reviewRepository;
    private ProductService productService;

    public ReviewServiceImplementation(ReviewRepository reviewRepository,
                                       ProductService productService){
        this.reviewRepository=reviewRepository;
        this.productService=productService;
    }
    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
        Product product=productService.findProductById(req.getProductId());

        Review review=new Review();
        review.setReview(req.getReview());
        review.setUser(user);
        review.setProduct(product);
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {


        return reviewRepository.getAllProductReviews(productId);
    }
}
