package com.example.backend.Repository;

import com.example.backend.Entity.DailyControlSubFolderContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DailyControlSubFolderContentRepo extends JpaRepository<DailyControlSubFolderContent,Integer> {

    @Query(value = "select * from daily_control_sub_folder_content where daily_control_sub_folder_id=:subfolderId", nativeQuery = true)
    List<DailyControlSubFolderContent> findBySubfolderId(Integer subfolderId);
}
