# portfolio
Portfolio with detailed descriptions of skills, technologies used, and overall work experience

## Backend Setup
To enable email sending from the contact form:

1. Install Node.js from https://nodejs.org/
2. Run `npm install` in the portfolio directory
3. Configure email credentials in `server.js`:
   - Replace `'your-email@gmail.com'` with your Gmail address
   - Replace `'your-app-password'` with a Gmail app password (generate at https://myaccount.google.com/apppasswords)
4. Run `npm start` to start the backend server on port 3001
5. Open `index.html` in a browser and test the contact form

Note: The frontend sends requests to `http://localhost:3001/send-email`. Ensure the backend is running. 
