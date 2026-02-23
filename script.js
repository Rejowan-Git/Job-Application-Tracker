const jobs = [
    {id:1, company:"Mobile First Corp", role:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130,000 - $175,000", desc:"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status:"not"},
    {id:2, company:"WebFlow Agency", role:"Web Designer & Developer", location:"Los Angeles, CA", type:"Part-time", salary:"$80,000 - $120,000", desc:"Create stunning web experiences for high-profile clients.", status:"not"},
    {id:3, company:"DataViz Solutions", role:"Data Visualization Specialist", location:"Boston, MA", type:"Full-time", salary:"$125,000 - $165,000", desc:"Transform complex data into compelling visualizations.", status:"not"},
    {id:4, company:"CloudFirst Inc", role:"Backend Developer", location:"Seattle, WA", type:"Full-time", salary:"$140,000 - $190,000", desc:"Design and maintain scalable backend systems using Python and AWS.", status:"not"},
    {id:5, company:"Innovation Labs", role:"UI/UX Engineer", location:"Austin, TX", type:"Full-time", salary:"$110,000 - $150,000", desc:"Create beautiful and functional user interfaces.", status:"not"},
    {id:6, company:"MegaCorp Solutions", role:"JavaScript Developer", location:"New York, NY", type:"Full-time", salary:"$120,000 - $170,000", desc:"Build enterprise applications using modern JavaScript frameworks.", status:"not"},
    {id:7, company:"StartupXYZ", role:"Full Stack Engineer", location:"Remote", type:"Full-time", salary:"$120,000 - $160,000", desc:"Join a fast-growing startup building innovative solutions.", status:"not"},
    {id:8, company:"TechCorp Industries", role:"Senior Frontend Developer", location:"San Francisco, CA", type:"Full-time", salary:"$130,000 - $175,000", desc:"Lead frontend development using React and TypeScript.", status:"not"}
  ];
  
  let currentTab = "all";
  
  function renderJobs() {
    const container = document.getElementById("jobContainer");
    container.innerHTML = "";
  
    const filtered = currentTab === "all"
      ? jobs
      : jobs.filter(j => j.status === currentTab);
  
    document.getElementById("jobCount").innerText = filtered.length + " jobs";
  
    if(filtered.length === 0){
      container.innerHTML = `
        <div style="text-align:center; padding:60px; color:#64748b;">
          <img 
        src="jobs.png" 
        alt="No Jobs"
        style="width:70px;"
          />
          <h3>No jobs available</h3>
          <p>Check back soon for new opportunities</p>
        </div>`;
      return;
    }
  
    filtered.forEach(job => {
      const statusClass = job.status === "interview" ? "interview"
                        : job.status === "rejected" ? "rejected" : "";
  
      const statusText = job.status === "not" ? "NOT APPLIED"
                       : job.status.toUpperCase();
  
      container.innerHTML += `
        <div class="job-card">
          <div class="delete" onclick="deleteJob(${job.id})">🗑</div>
          <h3>${job.company}</h3>
          <div class="role">${job.role}</div>
          <div class="job-meta">${job.location} • ${job.type} • ${job.salary}</div>
          <div class="status ${statusClass}">${statusText}</div>
          <div class="description">${job.desc}</div>
          <div class="actions">
            <button class="btn btn-interview" onclick="setStatus(${job.id}, 'interview')">Interview</button>
            <button class="btn btn-reject" onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
          </div>
        </div>
      `;
    });
  
    updateDashboard();
  }
  
  function setStatus(id, status){
    const job = jobs.find(j => j.id === id);
  
    if(job.status === status){
      job.status = "not";
    } else {
      job.status = status;
    }
  
    renderJobs();
  }
  
  function deleteJob(id){
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
    renderJobs();
  }
  
  function updateDashboard(){
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText = jobs.filter(j=>j.status==="interview").length;
    document.getElementById("rejectedCount").innerText = jobs.filter(j=>j.status==="rejected").length;
  }
  
  document.querySelectorAll(".tab").forEach(tab=>{
    tab.addEventListener("click", ()=>{
      document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      currentTab = tab.dataset.tab;
      renderJobs();
    });
  });
  
  renderJobs();