package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "kitoblar")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String description;

    @OneToOne
    private Attachment mainPhoto;

    @OneToMany
    private List<Attachment> photos = new ArrayList<>();

    @CreationTimestamp
    private LocalDateTime createdAt;

    public Book(String title, String description, Attachment mainPhoto, List<Attachment> photos) {
        this.title = title;
        this.description = description;
        this.mainPhoto = mainPhoto;
        this.photos = photos;
    }
}
