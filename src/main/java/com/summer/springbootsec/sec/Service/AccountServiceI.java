package com.summer.springbootsec.sec.Service;

import com.summer.springbootsec.sec.entites.*;

import java.util.List;

public interface AccountServiceI {
    AppUser addNewUser(AppUser AppUser);
    AppRole addNewRole(AppRole AppRole);
    void addRoleToUser(String username , String roleName);
    AppUser loadUserByUsername(String username);
    List<AppUser> listeUsers();

}
