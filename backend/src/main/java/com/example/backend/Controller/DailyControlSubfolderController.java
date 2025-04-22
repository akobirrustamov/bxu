package com.example.backend.Controller;

import com.example.backend.Entity.DailyControlSubFolder;
import com.example.backend.Entity.DailyControlSubFolderContent;
import com.example.backend.Repository.DailyControlSubFolderContentRepo;
import com.example.backend.Repository.DailyControlSubFolderRepo;
import com.example.backend.Repository.StaffRepo;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Key;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/daily-control-subfolder")
public class DailyControlSubfolderController {
    private final DailyControlSubFolderRepo dailyControlSubFolderRepo;
    private final DailyControlSubFolderContentRepo dailyControlSubFolderContentRepo;
    private final StaffRepo staffRepo;

    private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode("333aae7133c19eda8f7f61ce07e64281c295df67681b1ed47c9c270a488f94d0");
        return Keys.hmacShaKeyFor(keyBytes);
    }

    private String getStaffIdFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token.replace("Bearer ", ""))
                .getBody()
                .getSubject();
    }

    @GetMapping("/{subfolderId}")
    public ResponseEntity<DailyControlSubFolder> getDailyControlSubFolder(@PathVariable Integer subfolderId) {
        Optional<DailyControlSubFolder> subfolder = dailyControlSubFolderRepo.findById(subfolderId);
        return subfolder.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/content/{subfolderId}")
    public ResponseEntity<List<DailyControlSubFolderContent>> getDailyControlSubFolderContent(
            @PathVariable Integer subfolderId) {
        List<DailyControlSubFolderContent> contents = dailyControlSubFolderContentRepo.findBySubfolderId(subfolderId);
        return ResponseEntity.ok(contents);
    }

    @PostMapping("/content/{token}")
    public ResponseEntity<DailyControlSubFolderContent> createContent(
            @RequestBody DailyControlSubFolderContent content,@PathVariable String token) {
        try {
            String staffId = getStaffIdFromToken(token);
            content.setCreatedAt(LocalDateTime.now());
            System.out.println(content);

            // Set staff if not already set
            if (content.getStaff() == null) {
                staffRepo.findById(Integer.parseInt(staffId))
                        .ifPresent(content::setStaff);
            }

            // Validate subfolder exists
            if (content.getDailyControlSubFolder() == null ||
                    content.getDailyControlSubFolder().getId() == null) {
                return ResponseEntity.badRequest().build();
            }

            DailyControlSubFolderContent savedContent = dailyControlSubFolderContentRepo.save(content);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedContent);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/content/{contentId}")
    public ResponseEntity<DailyControlSubFolderContent> updateContent(
            @PathVariable Integer contentId,
            @RequestBody DailyControlSubFolderContent contentUpdates,
            @RequestHeader("Authorization") String token) {
        try {
            String staffId = getStaffIdFromToken(token);

            Optional<DailyControlSubFolderContent> existingContent =
                    dailyControlSubFolderContentRepo.findById(contentId);

            if (existingContent.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            DailyControlSubFolderContent content = existingContent.get();

            // Only allow updates to certain fields
            if (contentUpdates.getName() != null) {
                content.setName(contentUpdates.getName());
            }
            if (contentUpdates.getDescription() != null) {
                content.setDescription(contentUpdates.getDescription());
            }
            if (contentUpdates.getLinkToFile() != null) {
                content.setLinkToFile(contentUpdates.getLinkToFile());
            }
            if (contentUpdates.getAttachment() != null) {
                content.setAttachment(contentUpdates.getAttachment());
            }

            DailyControlSubFolderContent updatedContent = dailyControlSubFolderContentRepo.save(content);
            return ResponseEntity.ok(updatedContent);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/content/{contentId}")
    public ResponseEntity<Void> deleteContent(
            @PathVariable Integer contentId,
            @RequestHeader("Authorization") String token) {
        try {
            String staffId = getStaffIdFromToken(token);

            if (!dailyControlSubFolderContentRepo.existsById(contentId)) {
                return ResponseEntity.notFound().build();
            }

            dailyControlSubFolderContentRepo.deleteById(contentId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}