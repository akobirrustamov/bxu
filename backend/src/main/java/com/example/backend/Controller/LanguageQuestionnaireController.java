package com.example.backend.Controller;

import com.example.backend.Entity.LanguageQuestionnaire;
import com.example.backend.Repository.LanguageQuestionnaireRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/language-questionnaire")
@RequiredArgsConstructor
public class LanguageQuestionnaireController {

    private final LanguageQuestionnaireRepo languageQuestionnaireRepo;

    @PostMapping
    public HttpEntity<?> postLanguageQuestionnaire(@RequestBody LanguageQuestionnaire languageQuestionnaire) {

        languageQuestionnaire.setCreatedAt(LocalDateTime.now());
        LanguageQuestionnaire save = languageQuestionnaireRepo.save(languageQuestionnaire);
        return new ResponseEntity<>(save, HttpStatus.CREATED);

    }


    @GetMapping
    public HttpEntity<?> getAllLanguageQuestionnaire() {
        List<LanguageQuestionnaire> languageQuestionnaireList = languageQuestionnaireRepo.findAll();
        return new ResponseEntity<>(languageQuestionnaireList, HttpStatus.OK);
    }
}
