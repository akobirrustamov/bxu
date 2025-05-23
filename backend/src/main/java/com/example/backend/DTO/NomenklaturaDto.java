package com.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NomenklaturaDto {
    private String name;
    private Integer user;
    private Integer numberPackages;
    private String code;
}
