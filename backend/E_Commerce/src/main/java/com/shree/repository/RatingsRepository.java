package com.shree.repository;

import com.shree.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingsRepository extends JpaRepository<Rating,Long> {

    @Query("Select r from Rating r where r.product.id=:productId")
    public List<Rating> getProductRatings(@Param("productId") Long productId);
}
