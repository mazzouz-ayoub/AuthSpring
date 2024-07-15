package com.summer.springbootsec;

import com.summer.springbootsec.sec.Service.AccountServiceI;
import com.summer.springbootsec.sec.entites.AppRole;
import com.summer.springbootsec.sec.entites.AppUser;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class SpringBootSecApplication {


        public static void main(String[] args) {

            SpringApplication.run(SpringBootSecApplication.class, args);
        }
        CommandLineRunner start(AccountServiceI accountServiceI) {
            return args -> {
                accountServiceI.addNewRole(new AppRole(null ,"USER"));
                accountServiceI.addNewRole(new AppRole(null ,"ADMIN"));
                accountServiceI.addNewRole(new AppRole(null ,"CUSTOMER_MANAGER"));
                accountServiceI.addNewRole(new AppRole(null ,"PRODUCT_MANAGER"));
                accountServiceI.addNewRole(new AppRole(null ,"BILLS_MANAGER"));
                accountServiceI.addNewUser(new AppUser(null , "user1" , "123" , new ArrayList<>()));
                accountServiceI.addNewUser(new AppUser(null , "user2" , "123" , new ArrayList<>()));
                accountServiceI.addNewUser(new AppUser(null , "user3" , "123" , new ArrayList<>()));
                accountServiceI.addNewUser(new AppUser(null , "user4" , "123" , new ArrayList<>()));
                accountServiceI.addNewUser(new AppUser(null , "user5" , "123" , new ArrayList<>()));
                accountServiceI.addNewUser(new AppUser(null , "user6" , "123" , new ArrayList<>()));
                accountServiceI.addRoleToUser("user1" , "USER");
                accountServiceI.addRoleToUser("user1" , "CUSTOMER_MANAGER");

                accountServiceI.addRoleToUser("user2" , "ADMIN");
                accountServiceI.addRoleToUser("user3" , "CUSTOMER_MANAGER");
                accountServiceI.addRoleToUser("user4" , "PRODUCT_MANAGER");
                accountServiceI.addRoleToUser("user5" , "BILLS_MANAGER");
                accountServiceI.addRoleToUser("user6" , "BILLS_MANAGER");





            };
        }

    }




