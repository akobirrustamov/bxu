package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "language-questionnaire")
public class LanguageQuestionnaire {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String phone;
    private Integer language;
    private LocalDateTime createdAt;


    public LanguageQuestionnaire(String name, String phone, Integer language) {
        this.name = name;
        this.phone = phone;
        this.language = language;
    }

    public LanguageQuestionnaire(String name, String phone, Integer language, LocalDateTime createdAt) {
        this.name = name;
        this.phone = phone;
        this.language = language;
        this.createdAt = createdAt;
    }
}
