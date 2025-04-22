package com.example.backend.Repository;

import com.example.backend.Entity.CommandMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandMessageRepo extends JpaRepository<CommandMessage,Integer> {
}
