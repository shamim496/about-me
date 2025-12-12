package com.aboutme.controller;

import com.aboutme.model.AboutMe;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.PostConstruct;
import java.io.IOException;

/**
 * REST API Controller for About Me endpoints
 * Provides JSON data about personal information
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AboutMeController {

    private AboutMe aboutMeData;
    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Load about me data from JSON file on startup
     */
    @PostConstruct
    public void init() {
        try {
            ClassPathResource resource = new ClassPathResource("about-me-data.json");
            aboutMeData = objectMapper.readValue(resource.getInputStream(), AboutMe.class);
            System.out.println("✅ About Me data loaded from JSON file successfully!");
        } catch (IOException e) {
            System.err.println("❌ Error loading about-me-data.json: " + e.getMessage());
            aboutMeData = new AboutMe();
        }
    }

    /**
     * GET /api/about
     * Returns personal information as JSON
     * 
     * @return AboutMe object with all personal details
     */
    @GetMapping("/about")
    public AboutMe getAboutMe() {
        return aboutMeData;
    }

    /**
     * Health check endpoint
     * @return Status message
     */
    @GetMapping("/health")
    public String healthCheck() {
        return "✅ About Me API is running successfully!";
    }
}
