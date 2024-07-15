package com.summer.springbootsec.sec.Service;

import com.summer.springbootsec.sec.entites.AppRole;
import com.summer.springbootsec.sec.entites.AppUser;
import com.summer.springbootsec.sec.repo.AppRoleRepository;
import com.summer.springbootsec.sec.repo.AppUserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AccountServiceIImpl implements AccountServiceI {
    private AppUserRepository AppUserRepository ;
    private AppRoleRepository AppRoleRepository ;

    public AccountServiceIImpl(com.summer.springbootsec.sec.repo.AppUserRepository appUserRepository, com.summer.springbootsec.sec.repo.AppRoleRepository appRoleRepository) {
        AppUserRepository = appUserRepository;
        AppRoleRepository = appRoleRepository;
    }

    @Override
    public AppUser addNewUser(AppUser AppUser) {
                return  AppUserRepository.save(AppUser) ;
       }

    @Override
    public AppRole addNewRole(AppRole AppRole) {
      return  AppRoleRepository.save(AppRole);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
      AppUser appUser=AppUserRepository.findByUsername(username);
      AppRole appRole=AppRoleRepository.findByRoleName(roleName);
      appUser.getAppRoles().add(appRole);
    }

    @Override
    public AppUser loadUserByUsername(String username) {
        return AppUserRepository.findByUsername(username);
    }

    @Override
    public List<AppUser> listeUsers() {
        return AppUserRepository.findAll();
    }
}
