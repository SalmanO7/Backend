import express from "express";
import cors from "cors"; 

const app = express();
const port = 4000;

app.use(cors()); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});
app.get("/data", (req, res) => {
  res.send(`[
  {
    "id": 1,
    "title": "Modern Web Development",
    "description": "Learn the latest web technologies including React, Next.js, and Node.js.",
    "tags": ["web development", "JavaScript", "React", "Node.js"]
  },
  {
    "id": 2,
    "title": "Mastering TypeScript",
    "description": "A complete guide to TypeScript for building scalable applications.",
    "tags": ["TypeScript", "JavaScript", "frontend", "backend"]
  },
  {
    "id": 3,
    "title": "Node.js API Development",
    "description": "Build RESTful and GraphQL APIs with Node.js and Express.",
    "tags": ["Node.js", "API", "Express", "GraphQL"]
  },
  {
    "id": 4,
    "title": "Tailwind CSS for Beginners",
    "description": "Learn how to style modern web apps quickly with Tailwind CSS.",
    "tags": ["CSS", "Tailwind", "UI Design", "frontend"]
  },
  {
    "id": 5,
    "title": "Building an E-commerce Website",
    "description": "Step-by-step guide to creating an online store with Next.js and Stripe.",
    "tags": ["e-commerce", "Next.js", "Stripe", "web development"]
  }
]
`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
