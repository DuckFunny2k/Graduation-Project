package com.restaurant_management.controllers;

import com.restaurant_management.dtos.CategoryDto;
import com.restaurant_management.exceptions.DataExitsException;
import com.restaurant_management.payloads.responses.CategoryResponse;
import com.restaurant_management.services.interfaces.CategoryService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Tag(name = "Category")
@RequestMapping("/api/v1/dashboard/category")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN') or hasRole('EMPLOYEE')")
    public ResponseEntity<PagedModel<EntityModel<CategoryResponse>>> getAllCategories(
            @RequestParam int pageNo,
            @RequestParam int pageSize,
            @RequestParam String sortBy) throws DataExitsException {
        return ResponseEntity.ok(categoryService.getAllCategories(pageNo, pageSize, sortBy));
    }

    @GetMapping("/get-by-id/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('EMPLOYEE')")
    public ResponseEntity<CategoryResponse> getCategoryById(@PathVariable String id) throws DataExitsException {
        return ResponseEntity.ok(categoryService.getCategoryById(id));
    }

    @PostMapping("/add-category")
    @PreAuthorize("hasRole('ADMIN') or hasRole('EMPLOYEE')")
    public ResponseEntity<?> addCategory(@RequestBody CategoryDto categoryDto) throws DataExitsException {
        return ResponseEntity.ok(categoryService.addCategory(categoryDto));
    }

    @PutMapping("/update-category")
    @PreAuthorize("hasRole('ADMIN') or hasRole('EMPLOYEE')")
    public ResponseEntity<?> updateCategory(@RequestBody CategoryDto categoryDto) throws DataExitsException {
        return ResponseEntity.ok(categoryService.updateCategory(categoryDto));
    }

    @DeleteMapping("/delete-category/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('EMPLOYEE')")
    public ResponseEntity<?> deleteCategory(@PathVariable String id) throws DataExitsException {
        return ResponseEntity.ok(categoryService.deleteCategory(id));
    }
}
