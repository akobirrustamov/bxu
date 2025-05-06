package com.example.backend.Controller;

import com.example.backend.Entity.StatisticTestSuitsid;
import com.example.backend.Entity.Student;
import com.example.backend.Entity.TestSuitsid;
import com.example.backend.Repository.StatisticTestSuitsidRepo;
import com.example.backend.Repository.StudentRepo;
import com.example.backend.Repository.TestSuitsidRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/test-suitsid")
@RequiredArgsConstructor
public class TestSuitsidController {
    private final TestSuitsidRepo testSuitsidRepo;
    private final StatisticTestSuitsidRepo statisticTestSuitsidRepo;
    private final StudentRepo studentRepo;
    private Student student;
    @GetMapping
    public HttpEntity<?> testSuitsid(){
        List<TestSuitsid> all = testSuitsidRepo.findAll();
        return ResponseEntity.ok(all);
    }


    @PostMapping("/result/{studentId}/{result}")
    public HttpEntity<?> testSuitsidResult(@PathVariable UUID studentId, @PathVariable Integer result){
        Optional<Student> byId = studentRepo.findById(studentId);
        if (byId.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        statisticTestSuitsidRepo.save(new StatisticTestSuitsid(byId.get(), result));
        return ResponseEntity.ok("Test submitted successfully");
    }



}
