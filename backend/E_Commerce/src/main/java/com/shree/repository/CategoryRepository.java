package com.shree.repository;

import com.shree.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    // find a top-level category (parent is null) by name (case-insensitive)
    Optional<Category> findByNameIgnoreCaseAndParentCategoryIsNull(String name);

    // find category by name (case-insensitive) and parent category entity
    Optional<Category> findByNameIgnoreCaseAndParentCategory(String name, Category parent);

    // convenience: find by name and parent id (if you prefer IDs somewhere)
    Optional<Category> findByNameIgnoreCaseAndParentCategory_Id(String name, Long parentId);
}
