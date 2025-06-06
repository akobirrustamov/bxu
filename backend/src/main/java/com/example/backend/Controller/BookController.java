package com.example.backend.Controller;

import com.example.backend.DTO.NewsDto;
import com.example.backend.Entity.Attachment;
import com.example.backend.Entity.Book;
import com.example.backend.Entity.News;
import com.example.backend.Entity.Newspaper;
import com.example.backend.Repository.AttachmentRepo;
import com.example.backend.Repository.BookRepo;
import com.example.backend.Services.NewspaperService.NewspaperService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/book")
@RequiredArgsConstructor
public class BookController {
    private final BookRepo newsRepo;
    private final AttachmentRepo attachmentRepo;

    @PostMapping
    public HttpEntity<?> addNews(@RequestBody NewsDto news) {
        // Validate mainPhoto
        if (news.getMainPhoto() == null) {
            return ResponseEntity.badRequest().body("Main photo ID is required");
        }

        // Check if the main photo exists
        Optional<Attachment> mainPhotoOpt = attachmentRepo.findById(news.getMainPhoto());
        if (mainPhotoOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Main photo not found");
        }
        Attachment mainPhoto = mainPhotoOpt.get();

        // Find and validate other photos
        List<Attachment> photos = news.getPhotos().stream()
                .map(attachmentRepo::findById)
                .filter(Optional::isPresent)
                .map(Optional::get)
                .collect(Collectors.toList());

        // Create and save the book entity
        Book newsEntity = new Book(news.getTitle(), news.getDescription(), mainPhoto, photos);
        newsRepo.save(newsEntity);
        return ResponseEntity.ok(newsEntity);
    }


    @GetMapping
    public HttpEntity<?> getAllNews() {
        List<Book> newsList = newsRepo.findAllByOrderByCreatedAtDesc();
        return ResponseEntity.ok(newsList);
    }
    @GetMapping("/all")
    public HttpEntity<?> getAllNewsAll() {
        List<Book> newsList = newsRepo.findAllByOrderByCreatedAtDesc();
        return ResponseEntity.ok(newsList);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteNews(@PathVariable Integer id) {
        newsRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
