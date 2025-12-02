package com.aboutme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Spring Boot Application Entry Point
 * Starts the About Me REST API server on port 8080
 */
@SpringBootApplication
public class AboutMeApplication {

    public static void main(String[] args) {
        SpringApplication.run(AboutMeApplication.class, args);
        System.out.println("\n===========================================");
        System.out.println("✅ About Me API Server is running!");
        System.out.println("📡 API URL: http://localhost:8080/api/about");
        System.out.println("===========================================\n");
    }
}
