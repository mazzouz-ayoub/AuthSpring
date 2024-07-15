package com.summer.springbootsec.sec.repo;

import com.summer.springbootsec.sec.entites.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
}
