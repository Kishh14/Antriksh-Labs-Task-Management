# Antriksh Labs Task Management

## Overview
Antriksh Labs Task Management is a lightweight task management application built with React and uses a mock backend powered by `json-server`. The application allows users to create, update, delete, and manage tasks effectively.

---

## Steps to Run the Project Locally

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js; ensure it's updated (`npm install -g npm`).

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Antriksh-Labs-Task-Management.git
   cd Antriksh-Labs-Task-Management
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Mock Backend**:
   - Ensure you have `json-server` installed globally:
     ```bash
     npm install -g json-server
     ```
   - Start the `json-server`:
     ```bash
     json-server --watch db.json --host 0.0.0.0 --port 5000
     ```

4. **Start the React Application**:
   In a separate terminal, run:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

---

## Design Choices

1. **Frontend**:
   - **React with Vite**: Selected for its fast build times and optimized development experience.
   - **ShadCN UI**: Used for consistent, accessible, and customizable UI components.
   - **Tailwind CSS**: Chosen for its utility-first approach to styling, reducing the need for external CSS files.

2. **Backend**:
   - **Mock API with `json-server`**: Simple and quick setup for simulating RESTful APIs, ideal for prototyping without the complexity of a full backend.

3. **State Management**:
   - **Redux**: Implements a predictable state management solution to handle tasks effectively and ensure scalability.

4. **Responsiveness**:
   - Designed with mobile-first principles using Tailwind CSS, ensuring the app is accessible across devices. Sidebar includes a hamburger menu for smaller screens.

5. **Modular Codebase**:
   - Components are designed to be reusable and modular to improve maintainability and scalability.

---

Feel free to contribute or report issues to improve the project further!