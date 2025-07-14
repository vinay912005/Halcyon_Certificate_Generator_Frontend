
const events = [
  { name: "DANCE" },
  { name: "MUSIC" },
  { name: "GAMING" },
  { name: "THEATRE" },
  { name: "FINE ARTS" },
  { name: "LITERARY" }
];

const credentials = {
 XYZ();
};

const certificateTemplate = new Image();
certificateTemplate.src = "cer.png";          
const volunteerData = {};

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-header"   ).style.display = "flex";
    document.getElementById("main-content"  ).style.display = "block";
    renderEvents();
  }, 2000);
});

function renderEvents() {
  const container = document.querySelector(".event-accordion");
  events.forEach(evt => {
    const div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `
      <div class="event-title-bar">${evt.name}</div>
      <div class="event-content">
        <div class="login-options">
          <button onclick="showLogin(event,'${evt.name}-admin')">Genere Head</button>
          <div id="${evt.name}-admin" class="login-form hidden">
            <input type="email"    placeholder="Genere Head Email">
            <input type="password" placeholder="Password">
            <button onclick="validateLogin(event,'${evt.name}')">Login</button>
          </div>
        </div>
        <div id="${evt.name}-upload-section" class="hidden">
          <h4>Upload Excel (.xlsx)</h4>
          <input type="file" accept=".xlsx" onchange="handleExcelUpload(event,'${evt.name}')">
          <p id="${evt.name}-upload-status" style="color:#ff8800;margin-top:8px;"></p>
          <!-- ••• smaller canvas (700×500) for lighter email payload -->
          <canvas id="${evt.name}-certificate-canvas" width="700" height="500" class="hidden"></canvas>
          <div id="${evt.name}-download-status" style="margin-top:10px;"></div>
        </div>
      </div>`;
    container.appendChild(div);
  });
}

function showLogin(e, id){
  e.stopPropagation();
  document.querySelectorAll(".login-form").forEach(f=>f.id!==id&&f.classList.add("hidden"));
  document.getElementById(id).classList.toggle("hidden");
}
function validateLogin(e,eventName){
  e.stopPropagation();
  const form = document.getElementById(`${eventName}-admin`);
  const [emailInput,pwInput] = form.querySelectorAll("input");
  const email    = emailInput.value.trim();
  const password = pwInput.value.trim();
  const cred     = credentials[eventName];

  if(!cred||email.toLowerCase()!==cred.email.toLowerCase()||password!==cred.password){
    alert("Invalid credentials. Please try again."); return;
  }
  alert(`Login successful for ${eventName} head!`);
  emailInput.value = pwInput.value = "";
  document.getElementById(`${eventName}-upload-section`).classList.remove("hidden");
}

function handleExcelUpload(ev,eventName){
  const file = ev.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    try{
      const wb   = XLSX.read(new Uint8Array(e.target.result),{type:"array"});
      const data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      volunteerData[eventName]=data;
      document.getElementById(`${eventName}-upload-status`).textContent =
        ` ${data.length} volunteer(s) loaded successfully!`;
      generateCertificates(eventName);
    }catch(err){
      console.error("Excel error:",err);
      document.getElementById(`${eventName}-upload-status`).textContent = " Failed to read file.";
    }
  };
  reader.readAsArrayBuffer(file);
}

// ── Email helper (JPEG 50 % quality) ─────────────
function sendCertificateByEmail(name,email,canvas){
  const jpeg = canvas.toDataURL("image/jpeg",0.5);              // compress
  console.log(`Base64 size for ${email}: ${Math.round(jpeg.length/1024)} KB`);
  emailjs.send("service_htoitbi","template_iaxo0ql",{
    to_name: name,
    email,                          // must match {{email}} in template
    certificate_image: jpeg
  }).then(()=>console.log(` Sent to ${email}`))
    .catch(err => console.error(` Email to ${email} failed`,err));
}

// ── Draw & mail certificates ─────────────────────
function generateCertificates(eventName){
  const canvas = document.getElementById(`${eventName}-certificate-canvas`);
  const ctx    = canvas.getContext("2d");
  const list   = volunteerData[eventName]; if(!list?.length) return;
  let i=0;
  (function loop(){
    if(i>=list.length){
      document.getElementById(`${eventName}-download-status`).textContent =
        " All certificates generated & emailed!";
      return;
    }
    const {Name,Email} = list[i];
    if(!Name||!Email){ i++; return loop(); }

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(certificateTemplate,0,0,canvas.width,canvas.height);
    ctx.font      = "bold 32px Poppins";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(Name, canvas.width/2, 360);

    // optional download
    const link = document.createElement("a");
    link.download = `${Name}-Certificate.jpg`;
    link.href      = canvas.toDataURL("image/jpeg",0.8);
    link.click();

    sendCertificateByEmail(Name,Email,canvas);
    i++; setTimeout(loop,1200);              
  })();
}
