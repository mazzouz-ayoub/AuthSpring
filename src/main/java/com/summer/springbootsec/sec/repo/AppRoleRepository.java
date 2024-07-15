package com.summer.springbootsec.sec.repo;

import com.summer.springbootsec.sec.entites.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppRoleRepository extends JpaRepository<AppRole, Long> {

    AppRole findByRoleName(String roleName);
}
