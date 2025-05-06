package com.example.backend.Controller;

import com.example.backend.Entity.StatisticTestSuitsid;
import com.example.backend.Entity.Student;
import com.example.backend.Entity.TestSuitsid;
import com.example.backend.Repository.StatisticTestSuitsidRepo;
import com.example.backend.Repository.StudentRepo;
import com.example.backend.Repository.TestSuitsidRepo;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections4.Get;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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


    @GetMapping("/statistic")
    public HttpEntity<?> gettestSuitsidStatistic() {
        List<StatisticTestSuitsid> all = statisticTestSuitsidRepo.findAll();

        // Create a map for categorized results
        Map<String, List<StatisticTestSuitsid>> resultMap = new HashMap<>();
        resultMap.put("0-5 ball (bezotalanishning quyi darajasi)", new ArrayList<>());
        resultMap.put("5-15 ball  (bezotalanishning quyi darajasi)", new ArrayList<>());
        resultMap.put("15-25 ball (o'rtacha bezotalanish)", new ArrayList<>());
        resultMap.put("25-35 ball (yuqori bezotalanish)", new ArrayList<>());
        resultMap.put("35-45 ball (juda yuqori bezotalanish)", new ArrayList<>());

        for (StatisticTestSuitsid statistic : all) {
            int score = statistic.getScore();

            if (score >= 0 && score < 5) {
                resultMap.get("0-5 ball (bezotalanishning quyi darajasi)").add(statistic);
            } else if (score >= 5 && score < 15) {
                resultMap.get("5-15 ball  (bezotalanishning quyi darajasi)").add(statistic);
            } else if (score >= 15 && score < 25) {
                resultMap.get("15-25 ball (o'rtacha bezotalanish)").add(statistic);
            } else if (score >= 25 && score < 35) {
                resultMap.get("25-35 ball (yuqori bezotalanish)").add(statistic);
            } else if (score >= 35 && score <= 45) {
                resultMap.get("35-45 ball (juda yuqori bezotalanish)").add(statistic);
            }
        }

        return ResponseEntity.ok(resultMap);
    }




    @GetMapping("/statistic-all")
    public HttpEntity<?> getAlltestSuitsidStatistic(){

        List<StatisticTestSuitsid> all = statisticTestSuitsidRepo.findAll();
        return ResponseEntity.ok(all);
    }

}
