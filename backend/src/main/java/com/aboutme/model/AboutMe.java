package com.aboutme.model;

import java.util.List;

/**
 * AboutMe Data Model
 * Represents personal information to be displayed on the About Me page
 */
public class AboutMe {
    
    private String name;
    private int age;
    private String profession;
    private List<String> skills;
    private String hobby;
    private String country;
    private String bio;

    // Default Constructor
    public AboutMe() {
    }

    // Parameterized Constructor
    public AboutMe(String name, int age, String profession, List<String> skills, 
                   String hobby, String country, String bio) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.skills = skills;
        this.hobby = hobby;
        this.country = country;
        this.bio = bio;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    @Override
    public String toString() {
        return "AboutMe{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", profession='" + profession + '\'' +
                ", skills=" + skills +
                ", hobby='" + hobby + '\'' +
                ", country='" + country + '\'' +
                ", bio='" + bio + '\'' +
                '}';
    }
}
