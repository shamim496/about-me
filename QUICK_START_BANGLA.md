# 🚀 Quick Start Guide - About Me Project

## ⚡ সহজ ভাষায় Project Run করার নিয়ম

---

## 📦 প্রথম Step: প্রয়োজনীয় Software Install করুন

### ✅ ইতিমধ্যে আছে:
- **Node.js** v24.11.0 ✅ (Already Installed)

### ❌ Install করতে হবে:

#### 1. **Java 17 বা তার উপরে**

**সহজ উপায় (Recommended):**
1. এখানে যান: https://adoptium.net/
2. "Latest LTS Release" এর নিচে **Windows x64 (MSI)** download করুন
3. Download হলে file টা run করুন
4. Next → Next → Install → Finish
5. ✅ Done!

**Check করুন:**
```bash
java -version
```
দেখবেন: `openjdk version "17.x.x"` অথবা তার উপরে

---

#### 2. **Maven 3.6 বা তার উপরে**

**সহজ উপায়:**
1. এখানে যান: https://maven.apache.org/download.cgi
2. `apache-maven-3.9.x-bin.zip` download করুন
3. Zip file টা extract করুন `C:\Program Files\` এ
4. **Environment Variable সেট করুন:**

**Windows 11/10 এ Environment Variable সেট করা:**
- Start Menu → "Environment" search করুন
- "Edit the system environment variables" open করুন
- "Environment Variables" button click করুন
- **System Variables** এর নিচে "Path" select করে "Edit" করুন
- "New" click করে add করুন: `C:\Program Files\apache-maven-3.9.x\bin`
- সব window তে OK click করুন
- **Terminal restart করুন**

**Check করুন:**
```bash
mvn -version
```
দেখবেন: `Apache Maven 3.9.x`

---

## 🚀 Project Run করার Steps

### 🔴 STEP 1: Backend চালু করুন

**নতুন Terminal/Command Prompt খুলুন:**

```bash
cd "c:\Users\Shamim Hasan\Downloads\about me\backend"
mvn spring-boot:run
```

**⏳ Wait করুন...** প্রথমবার dependencies download হতে 2-5 মিনিট লাগতে পারে।

**✅ Success হলে দেখবেন:**
```
===========================================
✅ About Me API Server is running!
📡 API URL: http://localhost:8080/api/about
===========================================
```

> ⚠️ **এই Terminal টা বন্ধ করবেন না!** Backend চলতে থাকবে।

---

### 🔵 STEP 2: Frontend চালু করুন

**আরেকটা নতুন Terminal/Command Prompt খুলুন:**

```bash
cd "c:\Users\Shamim Hasan\Downloads\about me\frontend"
npm install
npm start
```

**⏳ Wait করুন...** প্রথমবার node_modules install হতে 1-2 মিনিট লাগবে।

**✅ Success হলে:**
- Browser automatically খুলবে
- **http://localhost:3000** এ আপনার সুন্দর About Me page দেখবেন! 🎉

---

## 🎨 কি দেখবেন:

### Backend (Terminal):
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::

✅ About Me API Server is running!
📡 API URL: http://localhost:8080/api/about
```

### Frontend (Browser):
```
🌟 Beautiful gradient purple background
💳 Clean white card in center
👤 Avatar with your initials
📝 Name: Shamim Hasan
💼 Profession: Full Stack Developer
🎂 Age | 🌍 Country | 🎨 Hobby
📖 Bio section
⚡ Colorful skill badges: Java, React, JavaScript, PHP, Spring Boot, Node.js
```

---

## ✅ Test করুন:

### 1. Backend API Test:
Browser এ যান: http://localhost:8080/api/about

**দেখবেন JSON data:**
```json
{
  "name": "Shamim Hasan",
  "age": 25,
  "profession": "Full Stack Developer",
  ...
}
```

### 2. Frontend Test:
Browser এ: http://localhost:3000

**দেখবেন সুন্দর page!** 🎨

---

## 🛑 বন্ধ করার নিয়ম:

### Backend বন্ধ করতে:
Backend Terminal এ: **Ctrl + C** press করুন

### Frontend বন্ধ করতে:
Frontend Terminal এ: **Ctrl + C** press করুন

---

## 🐛 সমস্যা ও সমাধান:

### ❌ সমস্যা: `mvn: command not found`
**সমাধান:**
- Maven ঠিকমতো install হয়নি
- Environment Variable check করুন
- Terminal **restart** করুন (এটা important!)
- যদি না হয়, আবার Maven install করুন

### ❌ সমস্যা: `java: command not found`
**সমাধান:**
- Java install করুন
- JAVA_HOME environment variable set করুন
- Terminal restart করুন

### ❌ সমস্যা: `Port 8080 is already in use`
**সমাধান:**
```bash
# কোন program port 8080 use করছে দেখুন
netstat -ano | findstr :8080

# Process kill করুন
taskkill /PID <process_id> /F
```

### ❌ সমস্যা: Frontend এ "Failed to fetch" error
**সমাধান:**
- ✅ Backend চালু আছে কিনা check করুন
- ✅ Backend URL ঠিক আছে কিনা: `http://localhost:8080/api/about`
- ✅ Browser console check করুন (F12 press করুন)

### ❌ সমস্যা: `npm install` fail হচ্ছে
**সমাধান:**
```bash
# npm cache clear করুন
npm cache clean --force

# node_modules delete করে আবার install করুন
cd frontend
rmdir /s node_modules
npm install
```

---

## 📝 নিজের তথ্য দিয়ে Customize করুন:

### Backend এ নিজের তথ্য দিন:

**File:** `backend/src/main/java/com/aboutme/controller/AboutMeController.java`

Line 18-26 এ change করুন:
```java
AboutMe aboutMe = new AboutMe(
    "আপনার নাম",              // নাম পরিবর্তন করুন
    25,                        // বয়স পরিবর্তন করুন
    "আপনার পেশা",             // পেশা পরিবর্তন করুন
    Arrays.asList("Skill1", "Skill2", "Skill3"), // আপনার skills
    "আপনার শখ",               // শখ
    "Bangladesh",              // দেশ
    "আপনার সম্পর্কে লিখুন..."  // Bio
);
```

**Backend restart করুন** (Ctrl+C তারপর আবার `mvn spring-boot:run`)

---

## 🎯 Summary - মাত্র 3টি Command:

```bash
# Terminal 1: Backend
cd "c:\Users\Shamim Hasan\Downloads\about me\backend"
mvn spring-boot:run

# Terminal 2: Frontend (নতুন terminal)
cd "c:\Users\Shamim Hasan\Downloads\about me\frontend"
npm install && npm start
```

**That's it!** Browser এ http://localhost:3000 দেখুন! 🚀

---

## 📞 Need Help?

যদি কোন সমস্যা হয়, check করুন:
1. ✅ Java installed?
2. ✅ Maven installed?
3. ✅ Node.js installed? (Already আছে ✅)
4. ✅ Environment Variables set করেছেন?
5. ✅ Terminal restart করেছেন?
6. ✅ Backend আগে চালু করেছেন?

---

**✨ Enjoy your beautiful About Me page! ✨**

Made with ❤️ using Spring Boot & React
