import app from './app';

// Set the port from the environment variable or default to 4000
const port = process.env.PORT || 4000;  // This line is now set to 4000 if no env variable is provided

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
