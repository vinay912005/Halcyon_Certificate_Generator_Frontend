<h1>🎓 Halcyon Certificate Generator</h1>
  <p>Empowering event organizers to seamlessly manage volunteer data and automate certificate generation with an intuitive web application.</p>

  <h2>🚀 Inspiration</h2>
  <p>
    At Halcyon, the dedication and effort of every volunteer form the backbone of our success. Recognizing their contributions in a timely and organized manner is essential—but manual certificate creation and distribution can be tedious, error-prone, and time-consuming.
  </p>
  <p>
    To solve this, we developed a <strong>Certificate Generator Web App</strong> that streamlines the process: from uploading volunteer data to designing personalized certificates, and finally, sending them via email—all from one platform.
  </p>

  <h2>🤖 What It Does</h2>
  <p>
    The <strong>Halcyon Certificate Generator</strong> is a complete frontend-based tool that allows event heads to:
  </p>
  <ul>
    <li>Log in securely for their specific event.</li>
    <li>Upload Excel files containing volunteer data.</li>
    <li>Automatically generate visually appealing certificates using HTML canvas.</li>
    <li>Instantly send personalized certificates to each volunteer via email using <strong>EmailJS</strong>.</li>
  </ul>

  <h2>💡 Key Features</h2>

  <h3>1️⃣ Event-Based Login System</h3>
  <p>Each event head receives a unique login to ensure that certificate generation is securely tied to their specific event.</p>

  <h3>2️⃣ Excel Upload for Volunteer Data</h3>
  <p>Easily upload <code>.xlsx</code> files containing volunteer details like name, email, and role. The system parses and processes the data with high accuracy.</p>

  <h3>3️⃣ Real-Time Certificate Generation</h3>
  <p>Certificates are generated dynamically using HTML Canvas. You can preview each certificate before sending, ensuring design and content accuracy.</p>

  <h3>4️⃣ Automatic Email Sending (via EmailJS)</h3>
  <p>Once certificates are generated, they're emailed to the volunteers using <strong>EmailJS</strong>. No backend setup required—just configure your EmailJS keys, and you're good to go.</p>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
    <li><strong>Libraries:</strong> SheetJS, EmailJS, Canvas API</li>
    <li><strong>Tools:</strong> Excel, GitHub, VS Code</li>
  </ul>

  <h2>🏗️ How to Run It Locally</h2>
  <p><strong>Prerequisites:</strong></p>
  <ul>
    <li>Git</li>
    <li>Basic HTML/CSS/JS setup</li>
    <li>A valid <a href="https://www.emailjs.com/" target="_blank">EmailJS</a> account</li>
  </ul>

  <p>Steps:</p>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/yourusername/halcyon-certificate-generator.git</code></pre>
    </li>
    <li>Navigate to the folder:
      <pre><code>cd halcyon-certificate-generator</code></pre>
    </li>
    <li>Open <code>index.html</code> in your browser.</li>
    <li>Configure your EmailJS service, template, and keys in the JS file.</li>
    <li>Upload your Excel file and click send. Done!</li>
  </ol>

  <h2>✉️ Excel Format Guidelines</h2>
  <p>The uploaded Excel file should have the following columns:</p>
  <ul>
    <li><code>Name</code></li>
    <li><code>Email</code></li>
    <li><code>Event</code></li>
    <li>Any additional fields you want to include in the certificate</li>
  </ul>

  <h2>🌱 Future Scope</h2>
  <ul>
    <li>🔒 Admin Dashboard for centralized control</li>
    <li>🎨 Drag & Drop Certificate Designer</li>
    <li>📊 Analytics Dashboard to track delivery status</li>
    <li>🧠 AI-based template suggestions</li>
  </ul>
