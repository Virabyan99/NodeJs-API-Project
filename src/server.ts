import app from './app';
const PORT = process.env.PORT || 3000;  // Use Render's dynamic PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
