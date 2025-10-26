# React Master > Deep Dive - Native Apps

Topics

- What are Native Apps?
- What Native Apps **Do Not** Include

**Native Apps** primarily refer to applications built specifically for a mobile operating system (OS), most commonly **iOS** and **Android**.

---

## What are Native Apps?

A native application is a software program developed to run on a specific platform or device. They are written in the primary programming language of that OS and have direct access to all of the device's hardware and features (like the camera, GPS, accelerometer, etc.).

| Platform | Primary Native Language(s) |
| :--- | :--- |
| **iOS** | Swift, Objective-C |
| **Android** | Java, Kotlin |

### React Native's Role

**React Native** allows you to write JavaScript code (using the React principles you've been learning) that compiles or bridges to the actual **native UI components** of iOS and Android. This means:

1. **Native Look and Feel**: Your app doesn't run in a web view; it uses the same native components (like buttons, navigation bars, and text inputs) that an app written in Swift or Kotlin uses. This gives the user a truly native experience.
2. **Code Sharing**: You can use a single codebase (in JavaScript/React) to deploy applications for **both** iOS and Android.

---

## What Native Apps **Do Not** Include

| Type | Is it a Native App? | Why? |
| :--- | :--- | :--- |
| **Web Apps** | **No** | They run inside a web browser and are built using HTML, CSS, and JavaScript. |
| **Desktop Apps** | **Usually No** | Apps for macOS, Windows, or Linux are typically built using different dedicated technologies (though tools like Electron can wrap web technologies for desktop). |

**In summary:** When someone says "React Native builds native apps," they are almost exclusively referring to **iOS** and **Android** mobile applications.
