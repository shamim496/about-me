# Example API Response

When you make a GET request to `http://localhost:8080/api/about`, you will receive:

```json
{
  "name": "Shamim Hasan",
  "age": 25,
  "profession": "Full Stack Developer",
  "skills": ["Java", "React", "JavaScript", "PHP", "Spring Boot", "Node.js"],
  "hobby": "Gaming & Coding",
  "country": "Bangladesh",
  "bio": "Passionate software developer with expertise in building modern web applications. I love creating beautiful and functional solutions that make a difference."
}
```

## Testing the API

### Using Browser

Simply navigate to: `http://localhost:8080/api/about`

### Using curl (Command Line)

```bash
curl http://localhost:8080/api/about
```

### Using Postman or Insomnia

- Method: GET
- URL: http://localhost:8080/api/about
- Headers: None required

## Expected Response

- Status Code: 200 OK
- Content-Type: application/json
- Body: JSON object with personal information
