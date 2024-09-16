# User Dashboard

**Introduction** This is my frist time React+TypeScript+MUI fronted project. During development, I have learnt about to handle the props with types and typesciprt syntax and solved the problems by searching suggestion from VScode.

**User Dashboard** is a web application designed to manage user logins and display a dashboard with user entries. This project includes a login page, a dashboard page, and features to search, filter, and view detailed information about entries.

## Table of Contents

- [User Dashboard](#user-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [1. Login Page](#1-login-page)
    - [2. Dashboard (Home) Page](#2-dashboard-home-page)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)

## Features

### 1. Login Page

- **Login Functionality**: Users can log in using a Email and Password with mock data for authentication.
- **Error Handling**: Displays error messages when login fails.

### 2. Dashboard (Home) Page

- **Access Control**: Ensures only logged-in users can access the dashboard.
- **Welcome Message**: Displays a simple welcome message to the logged-in user.
- **List Entries**: Shows a list of entries using mock data.
- **Search and Filter**: Allows users to search and filter through the entries.
- **Detailed Information**: Provides detailed information for each entry.

## Technologies Used

- **React**: For building the user interface.
- **React Hook**: ContextAPI for State management;
- **React-Router-DOM**: For handling routing ("/", "/login", "/user/:userId")
- **TypeScript**: For type safety and development efficiency.
- **Material-UI**: For UI components and styling (Login Form, UserCard).
- **Mock Data**: Used Promise for simulating backend data.
- **Local Storage**: Store user data for LOGIN/LOGOUT features

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/user-dashboard.git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Usage

0. **Open in Development Mode**

   ```bash
   npm run dev
   ```

1. **Access the Login Page**

- Navigate to /login to access the login page.
- Enter your username and password to log in.
- Handle login errors if credentials are incorrect.
- Access the Dashboard Page:

2. **Access the Dashboard Page**

- After logging in, you will be redirected to the dashboard page.
- Use the search bar and filters to find specific entries.
- Click on an entry to view its detailed information.
