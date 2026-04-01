/* ================= styles.css ================= */

body {
  font-family: Arial, sans-serif;
  margin: 0;
  line-height: 1.6;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #111;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 100px 20px;
  background: #f4f4f4;
}

.section {
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, textarea {
  padding: 10px;
}

button {
  padding: 10px;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 20px;
  background: #111;
  color: white;
}
