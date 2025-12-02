package com.aboutme.controller;

import com.aboutme.model.AboutMe;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;

/**
 * REST API Controller for About Me endpoints
 * Provides JSON data about personal information
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AboutMeController {

    /**
     * GET /api/about
     * Returns personal information as JSON
     * 
     * @return AboutMe object with all personal details
     */
    @GetMapping("/about")
    public AboutMe getAboutMe() {
        AboutMe aboutMe = new AboutMe(
            "Shamim Hasan",
            25,
            "Full Stack Developer",
            Arrays.asList("Java", "React", "JavaScript", "PHP", "Spring Boot", "Node.js"),
            "Gaming & Coding",
            "Bangladesh",
            "Passionate software developer with expertise in building modern web applications. " +
            "I love creating beautiful and functional solutions that make a difference."
        );
        
        return aboutMe;
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
