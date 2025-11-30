package com.shree.service;

import com.shree.exception.ProductException;
import com.shree.model.Product;
import com.shree.model.Rating;
import com.shree.model.User;
import com.shree.repository.RatingsRepository;
import com.shree.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImplementation implements RatingService {

    private RatingsRepository ratingsRepository;
    private ProductService productService;

    public RatingServiceImplementation(RatingsRepository ratingsRepository,
                                       ProductService productService){
        this.ratingsRepository=ratingsRepository;
        this.productService=productService;
    }


    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {
        Product product=productService.findProductById(req.getProductId());

        Rating rating=new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setRating(req.getRating());
        rating.setCreatedAt(LocalDateTime.now());


        return ratingsRepository.save(rating);
    }

    @Override
    public List<Rating> getProductRatings(Long productId) {
        return ratingsRepository.getProductRatings(productId);
    }
}
