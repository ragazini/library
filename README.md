# AusUni LMS (Learning Management System) – TAFE Assignment

This is a simple Learning Management System prototype built as part of a Dynamic Web Development assignment at TAFE NSW. The purpose of the project is to demonstrate basic server-side programming, CRUD functionality, and session management using PHP and MySQL.

## ✅ Features Completed (Task 2.1 – 2.2)

### 1. **User Registration (Sign Up)**
- Users can register with their full name, email, and password.
- Passwords are hashed using `password_hash()` before storing in the database.
- Includes backend validation and prepared statements to prevent SQL injection.

### 2. **User Login**
- Users can log in using their email and password.
- Passwords are verified using `password_verify()`.
- Redirects users to the dashboard after successful login.

### 3. **Browse Books Page**
- Static prototype with sample book entries and a "Borrow" button.
- Page layout styled using Bootstrap.
- Accessible through the navigation menu.

### 4. **Edit User Details**
- Users can edit their full name and email.
- Data is retrieved from the database using the user ID in the URL (GET parameter).
- Update confirmation message appears upon success.
- Includes a "Back" button to return to the previous page.

### 5. **Delete User**
- Users can be deleted from the user list (functionality confirmed).
- Implemented using `DELETE` SQL statements with user ID passed via URL.

### 6. **Navigation and Layout**
- Header (`header.php`) and footer (`footer.php`) are modularised for reusability.
- All pages share consistent layout using PHP `include`.

## 🛠 Technologies Used
- PHP (server-side scripting)
- MySQL (database)
- HTML + Bootstrap (layout and styling)
- XAMPP (local development)

## 📁 File Structure
LMS_website/
│
├── index.html # Landing page
├── signup.php # User registration
├── login.php # User login
├── browse.php # Browse/borrow books (static prototype)
├── edit.php # Edit user details
├── delete.php # Delete user
├── header.php # Common page header
├── footer.php # Common page footer
├── db_connection.php # MySQL connection


## ✅ Next Steps (Task 2.3)
- Add session management to:
  - Prevent unauthorised access to browse/edit pages.
  - Show/hide navigation options based on login status.
  - Add logout functionality to destroy session.
- Capture screenshots showing session logic and access control.

---

**Note**: This project is for learning purposes and does not include advanced security features or role-based access control.

