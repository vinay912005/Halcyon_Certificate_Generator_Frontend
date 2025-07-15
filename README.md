<h1>🎓 Halcyon Certificate Generator</h1> <br>
Empowering event organizers to seamlessly manage volunteer data and automate certificate generation with an intuitive web application.

🚀 Inspiration
At Halcyon, the dedication and effort of every volunteer form the backbone of our success. Recognizing their contributions in a timely and organized manner is essential—but manual certificate creation and distribution can be tedious, error-prone, and time-consuming.

To solve this, we developed a Certificate Generator Web App that streamlines the process: from uploading volunteer data to designing personalized certificates, and finally, sending them via email—all from one platform.

🤖 What It Does
The Halcyon Certificate Generator is a complete frontend-based tool that allows event heads to:

Log in securely for their specific event.

Upload Excel files containing volunteer data.

Automatically generate visually appealing certificates using HTML canvas.

Instantly send personalized certificates to each volunteer via email using EmailJS.

This automation significantly reduces the workload of organizers and ensures a professional and prompt acknowledgment of volunteer efforts.

💡 Key Features
1️⃣ Event-Based Login System
Each event head receives a unique login to ensure that certificate generation is securely tied to their specific event.

2️⃣ Excel Upload for Volunteer Data
Easily upload .xlsx files containing volunteer details like name, email, and role. The system parses and processes the data with high accuracy.

3️⃣ Real-Time Certificate Generation
Certificates are generated dynamically using HTML Canvas. You can preview each certificate before sending, ensuring design and content accuracy.

4️⃣ Automatic Email Sending (via EmailJS)
Once certificates are generated, they're emailed to the volunteers using EmailJS. No backend setup required—just configure your EmailJS keys, and you're good to go.

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript

Libraries: SheetJS (Excel parsing), EmailJS (email sending), Canvas API (certificate rendering)

Tools: Excel, GitHub, VS Code

🏗️ How to Run It Locally
Prerequisites:

Git

Basic HTML/CSS/JS setup

A valid EmailJS account

Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/halcyon-certificate-generator.git
cd halcyon-certificate-generator
Open index.html

Open the index.html file directly in your browser. No backend or server setup required.

Configure EmailJS

Create a new service and template in your EmailJS dashboard.

Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY in the JavaScript file with actual values.

Make sure your email template fields match the variables passed from the form.

Upload Excel and Send Certificates

Use the upload section to import the .xlsx file with volunteer data.

Customize the certificate design if needed.

Click Send to deliver certificates via email.

✉️ Excel Format Guidelines
The uploaded Excel file should have the following columns:

Name

Email

Event

(Any additional fields you want to include in the certificate)

🌱 Future Scope
🔒 Admin Dashboard: Centralized control panel for all event heads and logs.

🎨 Drag & Drop Certificate Designer: Visually place text, images, and logos.

📊 Analytics Dashboard: Track how many certificates were generated and delivered.

🧠 Template Suggestions: Use AI to suggest certificate designs based on the event type.

