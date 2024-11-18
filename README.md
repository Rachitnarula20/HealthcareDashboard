# Healthcare Dashboard - React Project

## Overview
The **Healthcare Dashboard** is a simple frontend application built using **React JS**. It allows users to input their **Name**, select their **Age** from a dropdown, and **upload a file**. The form includes a **Submit button** that logs the data entered by the user.

## Features
- **Name Input Field**: Allows users to enter their name.
- **Age Dropdown**: Users can select their age from a dropdown list ranging from 1 to 100.
- **File Upload**: Users can upload a file (e.g., a document or image).
- **Submit Button**: Submits the data entered in the form and provides user feedback.
- **Responsive UI**: Built with **Tailwind CSS** to ensure a clean and responsive layout.

## Prerequisites

To run this project locally, you need the following:

- **Node.js** and **npm** installed. You can download them from [Node.js official website](https://nodejs.org/).
- **React**: The project is developed using React, which is included as a dependency.
- **Tailwind CSS**: Tailwind CSS is used for styling. Tailwind is already configured in the project.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   Run the following command to install all the required packages:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   To start the local development server, use the following command:
   ```bash
   npm start
   ```
   The application will start on **localhost:3000** by default.

4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Project Structure

```
healthcare-dashboard-react/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   └── Form.jsx
  │   ├── App.js
  │   ├── index.css
  │   └── index.js
  ├── tailwind.config.js
  ├── package.json
  └── README.md
```

## Important Notes
- **Styling**: Tailwind CSS is used to style the components for a modern look.
- **No Absolute or Relative Positioning**: Layout is managed with **Flexbox** and **Grid** for better maintainability.
- **Component-Based Architecture**: The form is built as a separate component (`Form.jsx`) to keep the code modular and reusable.

## Customization
Feel free to modify the **UI components** or **Tailwind classes** to better suit your own design preferences.


---


