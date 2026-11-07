SHREE INTERIORS

Modern Home Interiors & Modular Furniture

Shree Interiors is a web-based platform designed to showcase interior design services, modular furniture solutions, and customized home interiors. The platform allows customers to explore services and submit enquiries directly through the website.

🚀 Project Overview

The goal of this project is to establish a professional digital presence for Shree Interiors and simplify communication between customers and the business.

✨ Key Features

- Modern and responsive website design
- Interior design and furniture showcase
- Customer enquiry form
- Backend REST API integration
- MongoDB database connectivity
- Customer enquiry storage
- Separate frontend and backend architecture

🛠️ Technology Stack

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js
- REST API

Database

- MongoDB

Development Tools

- Visual Studio Code
- Git & GitHub
- Render

📁 Project Structure

ShreeInteriors2.0/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── index.html
├── styles.css
├── script.js
└── README.md

⚙️ Installation & Setup

1. Clone the Repository

git clone https://github.com/quietcoder7/Shreeinteriors2.o.git

2. Open the Project

cd Shreeinteriors2.o

3. Install Backend Dependencies

cd backend
npm install

4. Configure Environment Variables

Create a ".env" file inside the backend directory.

Add the required MongoDB connection string and other environment variables using the exact variable names expected by the backend code.

Important: Never upload ".env" or database credentials to GitHub.

5. Start the Backend

Use the start script configured in "backend/package.json".

npm start

🔗 Backend Functionality

The backend provides REST API functionality for:

- Submitting customer enquiries
- Receiving and retrieving enquiry records
- Connecting with MongoDB
- Processing incoming JSON requests

🌐 Deployment

- Frontend: Website hosting platform
- Backend: Render
- Database: MongoDB Atlas

Frontend and backend can operate on separate domains through API integration.

🔒 Security

- Environment variables for sensitive configuration
- ".env" excluded through ".gitignore"
- Backend validation for customer enquiries
- Database credentials are not stored in public source code



Developed with dedication for SHREE INTERIORS
Author:Thakur Durgesh 
