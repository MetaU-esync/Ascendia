const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
let courses = [
  { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
  { id: 2, title: 'Advanced Algorithms', description: 'Deep dive into algorithms.' }
];

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Ascendia - a Coursera clone.' });
});

// Get all courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Get course by ID
app.get('/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  res.json(course);
});

// Create new course
app.post('/courses', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  const newCourse = { id: courses.length + 1, title, description };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Update existing course
app.put('/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  const { title, description } = req.body;
  if (title) course.title = title;
  if (description) course.description = description;
  res.json(course);
});

// Delete course
app.delete('/courses/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Course not found' });
  }
  courses.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
