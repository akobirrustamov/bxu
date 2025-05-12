package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "consert_questionnarie")
public class ConsertQuestionnarie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer count;
    private String answer;
    private String description;


    public ConsertQuestionnarie(Integer count, String answer, String description) {
        this.count = count;
        this.answer = answer;
        this.description = description;
    }
}
