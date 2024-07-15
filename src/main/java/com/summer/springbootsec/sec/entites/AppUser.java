package com.summer.springbootsec.sec.entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String username ;
    private String password ;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<AppRole> appRoles;
}
