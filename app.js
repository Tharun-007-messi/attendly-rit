const MECH_B_RAW = [
  ['2117250060063','MUTHUKUTTI S'],['2117250060064','NADARAJAN U'],['2117250060065','NANDHINI R'],
  ['2117250060066','NAVEEN CHANDAAR A'],['2117250060067','M.B. NAVEEN PRASAD'],['2117250060068','NIKHIL K'],
  ['2117250060069','NITHISH R'],['2117250060070','NITHYA SRE V'],['2117250060071','PARTHASARATHY V'],
  ['2117250060072','POTRI BALAN K'],['2117250060073','PRANAV BASKAR'],['2117250060074','PRANEET S'],
  ['2117250060075','PRATHEEP KANNA V'],['2117250060076','PRAVEEN M'],['2117250060077','PRAVEEN R'],
  ['2117250060078','PRAVEEN V'],['2117250060079','PRICY J'],['2117250060080','PRISCILLA SHIRLEY PRASHANTH STEPHENS'],
  ['2117250060081','PRIYA S'],['2117250060082','RAEEZA S P'],['2117250060083','RAJAVISHAL S'],
  ['2117250060084','RANJITH R V'],['2117250060085','ROHITH R'],['2117250060086','M. ROSHAN JOEL'],
  ['2117250060087','SAI SRIDHAR B'],['2117250060088','SAKTHI RAGAVI K'],['2117250060089','H. SAMBENIYEL'],
  ['2117250060090','SAM SUNDAR C'],['2117250060091','SANJAY S'],['2117250060092','SANJAY S'],
  ['2117250060093','SANTHANALAKSHMI S'],['2117250060094','L. SANTHANAPRABHU'],['2117250060095','SASVITHA L'],
  ['2117250060096','SATHIYA ROOPA M'],['2117250060097','SELVA ANAND S'],['2117250060098','P V SHALINI SHREE'],
  ['2117250060099','SHREE BHARATH A M A'],['2117250060100','SHREEDHANYA P'],['2117250060101','SHRIWIN N'],
  ['2117250060102','N.S. SREETHU'],['2117250060103','SRI RAMACHANDRAN S'],['2117250060104','SRI SANKAR P'],
  ['2117250060105','SUMESH BA'],['2117250060106','SUNDAR KUMAR C'],['2117250060107','SURESH S'],
  ['2117250060108','SURUTHI R'],['2117250060109','SYED RAYYANULLAH BAHMANI'],['2117250060110','V. TAMIL SELVAM'],
  ['2117250060111','R. TAMILSELVAN'],['2117250060112','K. TEJESH'],['2117250060113','THARUN K'],
  ['2117250060114','THARUN KUMAR M'],['2117250060115','UTHESH KUMAR M'],['2117250060116','VEDHAGI A'],
  ['2117250060117','VIGNESHWARA C'],['2117250060118','IN VINAY KRISH'],['2117250060119','VISHAL S'],
  ['2117250060120','VISHVA K A'],['2117250060121','YASWANTHKUMAR'],['2117250060122','ZUBEDA ANJUM S']
];

const ALL_STUDENTS = [
  ...MECH_B_RAW.map(([regNo, name], idx) => ({
    regNo, name, dept: 'MECH', year: 'II Year', section: 'B',
    email: regNo === '2117250060067' ? 'naveen.250067@mech.ritchennai.edu.in' : `${regNo}@mech.ritchennai.edu.in`,
    attendance: `${(82 + (idx % 14) + 0.5).toFixed(1)}%`
  })),
  { regNo: '2117250080052', name: 'AFZAL M', dept: 'BIO-TECH', year: 'II Year', section: 'A', email: 'afzal.250052@biotech.ritchennai.edu.in', attendance: '88.0%' }
];

const DEPT_SECTIONS = {
  MECH: ['A','B'], ECE: ['A','B','C','D','E'], CSE: ['A','B','C','D','E','F','G','H','I'],
  CSBS: ['A','B'], CCE: ['A','B'], AIDS: ['A','B','C','D','E','F','G'],
  AIML: ['A','B'], 'BIO-TECH': ['A'], VLSI: ['A','B'], 'Cyber Security': ['A']
};

const ALL_CLASSES = Object.entries(DEPT_SECTIONS).flatMap(([dept, secs]) =>
  secs.map(sec => ({ dept, year: 2026, section: sec, semester: 3, students: dept === 'MECH' && sec === 'B' ? 60 : 58, avg: dept === 'MECH' ? 86 : 84 }))
);

const TIMETABLE_MECH_B = {
  Mon: [
    { slot: 'L1–L2', code: 'ME23321 / CS23322', name: 'CAMD Lab (B1) / OOP Lab (B2)', time: '08:00 – 09:40', room: 'LB-B107 / Steve Job Data Centre' },
    { slot: 'F2', code: 'MA23313', name: 'Transforms and Partial Differential Equations', time: '10:50 – 11:40', room: 'B007' },
    { slot: 'A2', code: 'ME23313', name: 'Fluid Mechanics and Machinery', time: '12:00 – 12:50', room: 'A106' },
    { slot: 'B2', code: 'CS23312', name: 'Object Oriented Programming', time: '12:50 – 01:40', room: 'A106' },
    { slot: 'C2', code: 'ME23312', name: 'Engineering Thermodynamics', time: '02:00 – 02:50', room: 'A106' },
    { slot: 'D2', code: 'ME23311', name: 'Engineering Mechanics', time: '02:50 – 03:40', room: 'A106' }
  ],
  Tue: [
    { slot: 'L7–L8', code: 'ME23321 / CS23322', name: 'CAMD Lab (B2) / OOP Lab (B1)', time: '09:40 – 11:20', room: 'LB-B107 / Steve Job Data Centre' },
    { slot: 'E2', code: 'ME23314', name: 'Manufacturing Processes', time: '12:00 – 12:50', room: 'A106' },
    { slot: 'F2', code: 'MA23313', name: 'Transforms and Partial Differential Equations', time: '12:50 – 01:40', room: 'A106' },
    { slot: 'A2', code: 'ME23313', name: 'Fluid Mechanics and Machinery', time: '02:00 – 02:50', room: 'A106' },
    { slot: 'B2', code: 'CS23312', name: 'Object Oriented Programming', time: '02:50 – 03:40', room: 'A106' }
  ],
  Wed: [
    { slot: 'C2', code: 'ME23312', name: 'Engineering Thermodynamics', time: '12:00 – 12:50', room: 'A106' },
    { slot: 'D2', code: 'ME23311', name: 'Engineering Mechanics', time: '12:50 – 01:40', room: 'A106' },
    { slot: 'E2', code: 'ME23314', name: 'Manufacturing Processes', time: '02:00 – 02:50', room: 'A106' },
    { slot: 'F2', code: 'MA23313', name: 'Transforms and Partial Differential Equations', time: '02:50 – 03:40', room: 'A106' }
  ],
  Thu: [
    { slot: 'B2', code: 'CS23312', name: 'Object Oriented Programming', time: '12:00 – 12:50', room: 'A106' },
    { slot: 'C2', code: 'ME23312', name: 'Engineering Thermodynamics', time: '12:50 – 01:40', room: 'A106' },
    { slot: 'D2', code: 'ME23311', name: 'Engineering Mechanics', time: '02:00 – 02:50', room: 'A106' },
    { slot: 'E2', code: 'ME23314', name: 'Manufacturing Processes', time: '02:50 – 03:40', room: 'A106' }
  ],
  Fri: [
    { slot: 'F2', code: 'MA23313', name: 'Transforms and Partial Differential Equations', time: '12:00 – 12:50', room: 'A106' },
    { slot: 'A2', code: 'ME23313', name: 'Fluid Mechanics and Machinery', time: '12:50 – 01:40', room: 'A106' },
    { slot: 'A2+T', code: 'ME23313', name: 'Fluid Mechanics and Machinery (Tutorial)', time: '02:00 – 02:50', room: 'A106' },
    { slot: 'C2', code: 'ME23312', name: 'Engineering Thermodynamics', time: '02:50 – 03:40', room: 'A106' }
  ]
};

const state = {
  role: 'student',
  page: 'Dashboard',
  attendanceMarked: false,
  gpsError: null,
  selectedDay: 'Fri',
  historyFilter: 'All',
  studentSearch: '',
  currentUser: ALL_STUDENTS[4], // Default: M.B. Naveen Prasad (2117250060067)
  currentTeacher: { empId: 'ME68', name: 'Dr. V. Rubesh Raja', dept: 'MECH', email: 'rubeshraja.v@ritchennai.edu.in' },
  settings: {
    college: 'Rajalakshmi Institute of Technology',
    shortName: 'RIT',
    address: 'Post, Kuthambakkam, Chembarambakkam, Tamil Nadu 600124',
    timezone: 'Asia/Kolkata',
    website: 'https://ritchennai.org',
    minAttendance: 75,
    gpsRadius: 100,
    maxAccuracy: 30,
    campusLat: 13.038194,
    campusLng: 80.045444,
    pilotStart: '17/08/2026',
    outsidePolicy: 'Reject + Allow Review Request'
  },
  history: [
    { date: '20 Nov 2026', course: 'Transforms and Partial Differential Equations', code: 'MA23313', time: '12:00 PM', status: 'Pending' },
    { date: '19 Nov 2026', course: 'Engineering Mechanics', code: 'ME23311', time: '02:00 PM', status: 'Present' },
    { date: '19 Nov 2026', course: 'Engineering Thermodynamics', code: 'ME23312', time: '12:50 PM', status: 'Present' },
    { date: '18 Nov 2026', course: 'Manufacturing Processes', code: 'ME23314', time: '02:00 PM', status: 'Absent' },
    { date: '18 Nov 2026', course: 'Engineering Mechanics', code: 'ME23311', time: '12:50 PM', status: 'Present' },
    { date: '17 Nov 2026', course: 'Object Oriented Programming', code: 'CS23312', time: '02:50 PM', status: 'Present' }
  ],
  absenceRequests: [
    { id: 1, student: 'M.B. NAVEEN PRASAD', regNo: '2117250060067', course: 'ME23314', date: '18 Nov 2026', type: 'Medical', reason: 'Fever and clinic visit', status: 'Pending' },
    { id: 2, student: 'THARUN KUMAR M', regNo: '2117250060114', course: 'ME23311', date: '20 Nov 2026', type: 'GPS Review', reason: 'GPS accuracy 42m inside Room A106', status: 'Pending' },
    { id: 3, student: 'NANDHINI R', regNo: '2117250060065', course: 'CS23312', date: '17 Nov 2026', type: 'On-Duty', reason: 'Symposium participation', status: 'Approved' }
  ],
  notifications: [
    { id: 1, title: 'Pilot Semester Active (2026–27 Odd)', body: 'II Mech B attendance pilot running since 17 Aug 2026. LWD: 24 Dec 2026 (88 working days).', time: '10m ago', read: false },
    { id: 2, title: 'Venue Update · Monday 4th Hour', body: 'MA23313 (F2 Slot) is scheduled in Room B007 instead of A106.', time: '2h ago', read: false },
    { id: 3, title: 'CoCM-III Scheduled', body: 'Course Committee Meeting III is marked for 20 Nov 2026 on the RIT Academic Calendar.', time: '1d ago', read: true }
  ],
  liveRoster: [
    { name: 'M.B. NAVEEN PRASAD', regNo: '2117250060067', time: '12:02 PM', dist: '24m', status: 'Verified' },
    { name: 'NANDHINI R', regNo: '2117250060065', time: '12:03 PM', dist: '38m', status: 'Verified' },
    { name: 'THARUN KUMAR M', regNo: '2117250060114', time: '12:05 PM', dist: '118m', status: 'Review GPS' },
    { name: 'ZUBEDA ANJUM S', regNo: '2117250060122', time: '12:06 PM', dist: '19m', status: 'Verified' }
  ],
  courses: [
    { code: 'ME23311', name: 'Engineering Mechanics', slot: 'D2', dept: 'MECH · II Year B', teacher: 'Dr. V. Rubesh Raja', students: 60, avg: 88 },
    { code: 'CS23312', name: 'Object Oriented Programming', slot: 'B2', dept: 'MECH · II Year B', teacher: 'Ms. K. Saranya', students: 60, avg: 86 },
    { code: 'ME23312', name: 'Engineering Thermodynamics', slot: 'C2', dept: 'MECH · II Year B', teacher: 'Dr. K. Varatha Rajan', students: 60, avg: 85 },
    { code: 'ME23313', name: 'Fluid Mechanics and Machinery', slot: 'A2', dept: 'MECH · II Year B', teacher: 'Dr. P. Bharathi', students: 60, avg: 83 },
    { code: 'ME23314', name: 'Manufacturing Processes', slot: 'E2', dept: 'MECH · II Year B', teacher: 'Mr. P. Sethuramalingam', students: 60, avg: 87 },
    { code: 'MA23313', name: 'Transforms and Partial Differential Equations', slot: 'F2', dept: 'MECH · II Year B', teacher: 'Dr. S. Govardhan', students: 60, avg: 84 }
  ],
  sessions: [
    { id: 101, course: 'MA23313 · Transforms & PDE', section: 'MECH-B', room: 'A106', time: '12:00 – 12:50 PM', present: 52, total: 60, active: true },
    { id: 102, course: 'ME23311 · Engineering Mechanics', section: 'MECH-B', room: 'A106', time: '02:00 – 02:50 PM', present: 54, total: 60, active: false },
    { id: 103, course: 'CS23312 · Object Oriented Programming', section: 'MECH-B', room: 'A106', time: '12:00 – 12:50 PM', present: 55, total: 60, active: false }
  ],
  students: ALL_STUDENTS,
  teachers: [
    { name: 'Dr. V. Rubesh Raja', empId: 'ME68', dept: 'MECH', email: 'rubeshraja.v@ritchennai.edu.in', classes: 'ME23311, Mini Project', status: 'Active' },
    { name: 'Ms. K. Saranya', empId: 'CS236', dept: 'CSE', email: 'saranya.k@ritchennai.edu.in', classes: 'CS23312, CS23322 Lab', status: 'Active' },
    { name: 'Mr. P. Sethuramalingam', empId: 'ME41', dept: 'MECH', email: 'sethuramalingam.p@ritchennai.edu.in', classes: 'ME23314 (Class In-charge)', status: 'Active' },
    { name: 'Dr. K. Varatha Rajan', empId: 'ME12', dept: 'MECH', email: 'varatharajan.k@ritchennai.edu.in', classes: 'ME23312, Library', status: 'Active' },
    { name: 'Dr. P. Bharathi', empId: 'ME25', dept: 'MECH', email: 'bharathi.p@ritchennai.edu.in', classes: 'ME23313', status: 'Active' },
    { name: 'Dr. S. Govardhan', empId: 'MA18', dept: 'MATHS', email: 'govardhan.s@ritchennai.edu.in', classes: 'MA23313', status: 'Active' },
    { name: 'Mr. S. Srinivasan', empId: 'ME52', dept: 'MECH', email: 'srinivasan.s@ritchennai.edu.in', classes: 'ME23321 CAMD Lab', status: 'Active' }
  ]
};

const roleNav = {
  student: { kicker: 'RIT · STUDENT PORTAL', nav: [['⌂','Dashboard'],['◎','Mark attendance'],['◷','Attendance history'],['▤','Absence requests'],['♧','Notifications'],['⚙','Profile']] },
  teacher: { kicker: 'RIT · TEACHER PORTAL', nav: [['⌂','Dashboard'],['▣','My classes'],['◷','Attendance sessions'],['▤','Absence requests'],['◉','Reports'],['♧','Notifications']] },
  admin: { kicker: 'RIT · ADMIN PORTAL', nav: [['⌂','Dashboard'],['♙','Students'],['♟','Teachers'],['▦','Classes'],['◷','Sessions'],['◉','Reports'],['⚙','College settings']] }
};

const $ = s => document.querySelector(s);

document.querySelectorAll('.role-tab').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.role-tab.active').classList.remove('active');
  button.classList.add('active');
  state.role = button.dataset.role;
  $('#id-label').textContent = state.role === 'student' ? 'Registration number' : state.role === 'teacher' ? 'Employee ID' : 'Admin email';
  $('#identity').placeholder = state.role === 'student' ? 'e.g. 2117250060067' : state.role === 'teacher' ? 'e.g. ME68 or CS236' : 'admin@ritchennai.edu.in';
}));

$('#show-password').addEventListener('click', () => { const p = $('#password'); p.type = p.type === 'password' ? 'text' : 'password'; });

$('#login-form').addEventListener('submit', event => {
  event.preventDefault();
  const id = $('#identity').value.trim().toUpperCase();
  if (state.role === 'student') {
    const found = state.students.find(s => s.regNo === id);
    if (found) state.currentUser = found;
  } else if (state.role === 'teacher') {
    const found = state.teachers.find(t => t.empId.toUpperCase() === id);
    if (found) state.currentTeacher = found;
  }
  state.page = 'Dashboard';
  $('#login-screen').classList.add('hidden');
  $('#dashboard').classList.remove('hidden');
  render();
});

$('#sign-out').addEventListener('click', () => { $('#dashboard').classList.add('hidden'); $('#login-screen').classList.remove('hidden'); });
$('#menu-button').addEventListener('click', () => $('.sidebar').classList.toggle('open'));
$('.bell').addEventListener('click', () => state.role === 'admin' ? toast('All system notifications up to date.') : goTo('Notifications'));
$('.avatar').addEventListener('click', () => state.role === 'student' ? goTo('Profile') : state.role === 'admin' ? goTo('College settings') : toast(`Signed in as ${state.currentTeacher.name}`));

function goTo(page) { state.page = page; $('.sidebar').classList.remove('open'); render(); }

function initialsOf(name) { return name.replace(/[^A-Za-z ]/g, '').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'RT'; }

function render() {
  const navCfg = roleNav[state.role];
  const displayName = state.role === 'student' ? state.currentUser.name : state.role === 'teacher' ? state.currentTeacher.name : 'RIT Admin';
  $('.avatar').textContent = initialsOf(displayName);
  $('#page-kicker').textContent = navCfg.kicker;
  $('#page-title').textContent = state.page === 'Dashboard' ? `Good morning, ${displayName}` : state.page;
  $('#main-nav').innerHTML = navCfg.nav.map(([icon, name]) =>
    `<button class="nav-item ${name === state.page ? 'active' : ''}" data-page="${name}"><span class="nav-icon">${icon}</span>${name}</button>`
  ).join('');
  document.querySelectorAll('.nav-item').forEach(el => el.addEventListener('click', () => goTo(el.dataset.page)));
  $('#page-content').innerHTML = routePage();
  bindPageEvents();
}

function routePage() {
  const p = state.page;
  if (p === 'Dashboard') return state.role === 'student' ? studentDashboard() : state.role === 'teacher' ? teacherDashboard() : adminDashboard();
  if (p === 'Mark attendance') return attendancePage();
  if (p === 'Attendance history') return studentHistoryPage();
  if (p === 'Absence requests') return state.role === 'student' ? studentAbsencePage() : teacherAbsencePage();
  if (p === 'Notifications') return notificationsPage();
  if (p === 'Profile') return studentProfilePage();
  if (p === 'My classes') return teacherClassesPage();
  if (p === 'Attendance sessions' || p === 'Sessions') return sessionsPage();
  if (p === 'Reports') return reportsPage();
  if (p === 'Students') return adminStudentsPage();
  if (p === 'Teachers') return adminTeachersPage();
  if (p === 'Classes') return adminClassesPage();
  if (p === 'College settings') return adminSettingsPage();
  return '';
}

/* ---------- STUDENT PAGES ---------- */
function studentDashboard() {
  const u = state.currentUser;
  const slots = TIMETABLE_MECH_B[state.selectedDay] || [];
  const pendingReqs = state.absenceRequests.filter(r => r.regNo === u.regNo && r.status === 'Pending').length;
  return `<main class="page">
    <div class="summary-grid">
      <article class="card highlight-card"><p class="label">Overall attendance</p><p class="metric">${u.attendance}</p><p class="metric-sub">Target: ${state.settings.minAttendance}% · Odd Sem 2026–27</p></article>
      <article class="card"><p class="label">Present</p><p class="metric">${state.attendanceMarked ? 59 : 58} <span class="trend">↑ 4 this week</span></p><p class="metric-sub">out of 64 working days so far</p></article>
      <article class="card"><p class="label">Absent</p><p class="metric">6</p><p class="metric-sub">${pendingReqs} review request pending</p></article>
      <article class="card"><p class="label">Today (${state.selectedDay})</p><p class="metric">${state.attendanceMarked ? 'Present' : 'Pending'}</p><p class="metric-sub">${state.attendanceMarked ? 'GPS verified · Room A106' : 'Venue: A106 · Sem 3'}</p></article>
    </div>
    <div class="two-column">
      <section class="card">
        <div class="card-title">
          <h3>${u.dept} · ${u.year} · Section ${u.section}</h3>
          <div class="btn-row">${['Mon','Tue','Wed','Thu','Fri'].map(d => `<button class="secondary btn-sm day-btn ${state.selectedDay===d?'primary':''}" data-day="${d}">${d}</button>`).join('')}</div>
        </div>
        ${slots.map((s, i) => `<div class="session">
          <div class="session-icon">${s.slot}</div>
          <div class="session-info"><strong>${s.name}</strong><span>${s.time} · Room ${s.room} · ${s.code}</span></div>
          <span class="status ${i===0 && state.attendanceMarked ? 'present' : 'pending'}">${i===0 ? (state.attendanceMarked ? 'Present' : 'Open now') : 'Scheduled'}</span>
        </div>`).join('')}
      </section>
      <section class="card">
        <div class="card-title"><h3>Mark attendance</h3><a href="#" data-nav="Mark attendance">GPS Check</a></div>
        <div class="attendance-action">
          <div class="location">⌖</div>
          <h3>${state.attendanceMarked ? 'Attendance marked' : 'MA23313 · Active in A106'}</h3>
          <p>${state.attendanceMarked ? 'Verified within 100m of RIT Campus.' : 'Allowed radius: 100m · Max GPS accuracy: 30m'}</p>
          ${state.attendanceMarked ? '<span class="status present">✓ GPS verified</span>' : '<button id="mark-attendance" class="primary">Verify GPS & Mark</button>'}
        </div>
      </section>
    </div>
  </main>`;
}

function attendancePage() {
  return `<main class="page">
    <section class="card" style="max-width:680px;margin:auto;text-align:center;padding:40px">
      <div class="location" style="margin:auto">⌖</div>
      <p class="eyebrow teal" style="margin-top:14px">RIT CAMPUS GEOFENCE · ${state.settings.gpsRadius}M RADIUS</p>
      <h2>Ready to mark attendance?</h2>
      <p class="muted">Target: ${state.settings.campusLat.toFixed(5)}°N, ${state.settings.campusLng.toFixed(5)}°E · Max accuracy: ${state.settings.maxAccuracy}m</p>
      <div class="review-banner" style="text-align:left"><span>⌖</span><div><strong>MA23313 · Transforms and Partial Differential Equations</strong><br><small>II Mech B · Room A106 · 12:00 – 12:50 PM</small></div></div>
      ${state.attendanceMarked ? '<p><span class="status present">✓ Attendance marked & GPS verified</span></p>' : `
        <div class="btn-row" style="justify-content:center">
          <button id="mark-attendance" class="primary">Use real browser GPS</button>
          <button id="sim-inside" class="secondary">Demo: Simulate On-Campus (24m)</button>
        </div>`}
      ${state.gpsError ? `<div class="review-banner" style="margin-top:16px;text-align:left;background:var(--danger-bg);border-color:#f1c0c5;color:var(--danger)">
        <span>!</span><div><strong>Rejected: Outside Campus Radius</strong><br><small>${state.gpsError}</small><br>
        <button id="req-gps-review" class="secondary btn-sm" style="margin-top:8px">Submit GPS Review Request</button></div></div>` : ''}
    </section>
  </main>`;
}

function studentHistoryPage() {
  const rows = state.history.filter(h => state.historyFilter === 'All' || h.status === state.historyFilter);
  return `<main class="page"><section class="card">
    <div class="toolbar">
      <div><h3 style="margin:0">Attendance history</h3><p class="metric-sub">2026–27 Odd Semester (W.E.F 17 Aug 2026)</p></div>
      <select id="history-filter">${['All','Present','Absent','Pending'].map(o => `<option value="${o}" ${state.historyFilter===o?'selected':''}>Status: ${o}</option>`).join('')}</select>
    </div>
    <div class="table-wrap"><table class="data-table">
      <thead><tr><th>Date</th><th>Course</th><th>Code</th><th>Time</th><th>Status</th></tr></thead>
      <tbody>${rows.map(r => `<tr><td>${r.date}</td><td class="name-cell">${r.course}</td><td class="subtle">${r.code}</td><td>${r.time}</td><td><span class="status ${r.status.toLowerCase()}">${r.status}</span></td></tr>`).join('')}</tbody>
    </table></div>
  </section></main>`;
}

function studentAbsencePage() {
  const myReqs = state.absenceRequests.filter(r => r.regNo === state.currentUser.regNo);
  return `<main class="page"><div class="two-column">
    <section class="card"><div class="card-title"><h3>My absence & GPS requests</h3></div>
      <div class="table-wrap"><table class="data-table">
        <thead><tr><th>Date</th><th>Course</th><th>Type</th><th>Status</th></tr></thead>
        <tbody>${myReqs.length ? myReqs.map(r => `<tr><td>${r.date}</td><td class="name-cell">${r.course}</td><td class="subtle">${r.type}</td><td><span class="status ${r.status==='Approved'?'present':r.status==='Rejected'?'absent':'pending'}">${r.status}</span></td></tr>`).join('') : '<tr><td colspan="4" class="subtle">No requests submitted yet.</td></tr>'}</tbody>
      </table></div>
    </section>
    <section class="card"><div class="card-title"><h3>Submit new request</h3></div>
      <form id="absence-form">
        <label>Course</label><select id="abs-course">${state.courses.map(c => `<option value="${c.code}">${c.code} · ${c.name}</option>`).join('')}</select>
        <label>Date</label><input id="abs-date" type="date" required />
        <label>Request type</label><select id="abs-type"><option>GPS Review</option><option>Medical</option><option>On-Duty</option></select>
        <label>Reason</label><textarea id="abs-reason" placeholder="Explain reason or GPS drift..." required></textarea>
        <button class="primary full" style="margin-top:14px" type="submit">Submit request</button>
      </form>
    </section>
  </div></main>`;
}

function studentProfilePage() {
  const u = state.currentUser;
  return `<main class="page"><section class="card" style="max-width:720px">
    <div class="card-title"><h3>Student profile</h3><span class="status present">Pilot · Active</span></div>
    <form id="profile-form"><div class="form-grid">
      <div><label>Full name</label><input type="text" value="${u.name}" disabled /></div>
      <div><label>Registration number</label><input type="text" value="${u.regNo}" disabled /></div>
      <div><label>Department</label><input type="text" value="${u.dept}" disabled /></div>
      <div><label>Year & Section</label><input type="text" value="${u.year} · Section ${u.section}" disabled /></div>
      <div><label>College Email</label><input id="prof-email" type="email" value="${u.email}" required /></div>
    </div><button class="primary" style="margin-top:18px" type="submit">Update email</button></form>
  </section></main>`;
}

/* ---------- TEACHER PAGES ---------- */
function teacherDashboard() {
  const pendingCount = state.absenceRequests.filter(r => r.status === 'Pending').length;
  return `<main class="page">
    <div class="summary-grid">
      <article class="card highlight-card"><p class="label">Active session</p><p class="metric">${state.sessions.filter(s=>s.active).length}</p><p class="metric-sub">MECH-B · Room A106</p></article>
      <article class="card"><p class="label">Present today</p><p class="metric">52</p><p class="metric-sub">of 60 enrolled students</p></article>
      <article class="card"><p class="label">Pending reviews</p><p class="metric">${pendingCount}</p><p class="metric-sub">GPS & absence requests</p></article>
      <article class="card"><p class="label">Pilot Class</p><p class="metric">MECH-B</p><p class="metric-sub">II Year · Semester 3</p></article>
    </div>
    ${pendingCount ? `<div class="review-banner"><span>◉</span><div><strong>${pendingCount} items need your review</strong><br><small>Outside-radius GPS reviews and absence requests are waiting.</small></div></div>` : ''}
    <section class="card">
      <div class="card-title"><h3>Live attendance · II Mech B</h3><a href="#" data-nav="Attendance sessions">Manage sessions</a></div>
      <div class="table-wrap"><table class="data-table">
        <thead><tr><th>Student</th><th>Register No.</th><th>Time</th><th>Distance</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${state.liveRoster.map((s, i) => `<tr><td class="name-cell">${s.name}</td><td class="subtle">${s.regNo}</td><td>${s.time}</td><td class="subtle">${s.dist}</td><td><span class="status ${s.status==='Verified'?'present':'pending'}">${s.status}</span></td><td>${s.status==='Verified'?'<span class="subtle">—</span>':`<button class="secondary btn-sm verify-gps" data-idx="${i}">Approve GPS</button>`}</td></tr>`).join('')}</tbody>
      </table></div>
    </section>
  </main>`;
}

function teacherClassesPage() {
  return `<main class="page"><section class="card">
    <div class="card-title"><h3>II Mech B Courses & Faculty</h3></div>
    <div class="table-wrap"><table class="data-table">
      <thead><tr><th>Slot</th><th>Code</th><th>Course</th><th>Faculty In-Charge</th><th>Students</th><th>Avg</th></tr></thead>
      <tbody>${state.courses.map(c => `<tr><td class="subtle">${c.slot}</td><td class="subtle">${c.code}</td><td class="name-cell">${c.name}</td><td>${c.teacher}</td><td>${c.students}</td><td><span class="status present">${c.avg}%</span></td></tr>`).join('')}</tbody>
    </table></div>
  </section></main>`;
}

function teacherAbsencePage() {
  return `<main class="page"><section class="card">
    <div class="card-title"><h3>Absence & GPS review queue</h3></div>
    <div class="table-wrap"><table class="data-table">
      <thead><tr><th>Student</th><th>Course & Date</th><th>Type</th><th>Reason</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${state.absenceRequests.map(r => `<tr>
        <td class="name-cell">${r.student}<br><span class="subtle">${r.regNo}</span></td>
        <td>${r.course}<br><span class="subtle">${r.date}</span></td><td>${r.type}</td><td class="subtle">${r.reason}</td>
        <td><span class="status ${r.status==='Approved'?'present':r.status==='Rejected'?'absent':'pending'}">${r.status}</span></td>
        <td>${r.status==='Pending'?`<div class="btn-row"><button class="primary btn-sm req-act" data-id="${r.id}" data-act="Approved">Approve</button><button class="secondary btn-sm req-act" data-id="${r.id}" data-act="Rejected">Reject</button></div>`:'<span class="subtle">Reviewed</span>'}</td>
      </tr>`).join('')}</tbody>
    </table></div>
  </section></main>`;
}

/* ---------- SHARED PAGES ---------- */
function sessionsPage() {
  return `<main class="page"><div class="two-column">
    <section class="card"><div class="card-title"><h3>Attendance sessions</h3></div>
      <div class="table-wrap"><table class="data-table">
        <thead><tr><th>Course</th><th>Room</th><th>Time</th><th>Marked</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${state.sessions.map(s => `<tr>
          <td class="name-cell">${s.course}<br><span class="subtle">${s.section}</span></td><td>${s.room}</td><td class="subtle">${s.time}</td><td>${s.present}/${s.total}</td>
          <td><span class="status ${s.active?'present':'absent'}">${s.active?'Active':'Closed'}</span></td>
          <td><button class="secondary btn-sm toggle-session" data-id="${s.id}">${s.active?'Close':'Reopen'}</button></td>
        </tr>`).join('')}</tbody>
      </table></div>
    </section>
    <section class="card"><div class="card-title"><h3>Create session (Teacher / Admin)</h3></div>
      <form id="session-form">
        <label>Course</label><select id="ses-course">${state.courses.map(c => `<option>${c.code} · ${c.name}</option>`).join('')}</select>
        <label>Section</label><input id="ses-section" type="text" value="MECH-B" required />
        <label>Room</label><input id="ses-room" type="text" value="A106" required />
        <button class="primary full" style="margin-top:14px" type="submit">Open live session</button>
      </form>
    </section>
  </div></main>`;
}

function reportsPage() {
  return `<main class="page"><section class="card">
    <div class="toolbar"><div><h3 style="margin:0">RIT Attendance Analytics</h3><p class="metric-sub">Pilot Department: Mechanical (MECH-B · 60 Students)</p></div><button id="export-csv" class="primary btn-sm">Export MECH-B CSV</button></div>
    <div class="recent-list" style="margin-bottom:20px">
      <div class="bar-row"><span>MECH</span><div class="bar"><i style="width:87%"></i></div><span>87%</span></div>
      <div class="bar-row"><span>CSE</span><div class="bar"><i style="width:89%"></i></div><span>89%</span></div>
      <div class="bar-row"><span>ECE</span><div class="bar"><i style="width:84%"></i></div><span>84%</span></div>
      <div class="bar-row"><span>AIDS</span><div class="bar"><i style="width:86%"></i></div><span>86%</span></div>
    </div>
  </section></main>`;
}

function notificationsPage() {
  return `<main class="page"><section class="card">
    <div class="toolbar"><h3 style="margin:0">Notifications</h3><button id="mark-all-read" class="secondary btn-sm">Mark all read</button></div>
    ${state.notifications.map(n => `<div class="session ${n.read?'':'unread'}"><div class="session-icon">♧</div><div class="session-info"><strong>${n.title}</strong><span>${n.body}</span></div><span class="subtle">${n.time}</span></div>`).join('')}
  </section></main>`;
}

/* ---------- ADMIN PAGES ---------- */
function adminDashboard() {
  return `<main class="page">
    <div class="summary-grid">
      <article class="card highlight-card"><p class="label">Pilot attendance</p><p class="metric">86.7%</p><p class="metric-sub">MECH-B · W.E.F 17 Aug 2026</p></article>
      <article class="card"><p class="label">Loaded students</p><p class="metric">${state.students.length}</p><p class="metric-sub">60 MECH-B + 1 BIOTECH-A</p></article>
      <article class="card"><p class="label">Departments</p><p class="metric">10</p><p class="metric-sub">${ALL_CLASSES.length} configured sections</p></article>
      <article class="card"><p class="label">Active sessions</p><p class="metric">${state.sessions.filter(s=>s.active).length}</p><p class="metric-sub">100m GPS geofence active</p></article>
    </div>
    <div class="two-column">
      <section class="card"><div class="card-title"><h3>Pilot milestones (2026–27 Odd)</h3><a href="#" data-nav="Reports">Full report</a></div>
        <div class="session"><div class="session-icon">✓</div><div class="session-info"><strong>Reopening Date</strong><span>17 August 2026 · Pilot launched</span></div></div>
        <div class="session"><div class="session-icon">◷</div><div class="session-info"><strong>CoCM-III & Feedback</strong><span>20 Nov & 30 Nov 2026</span></div></div>
        <div class="session"><div class="session-icon">◉</div><div class="session-info"><strong>Last Working Day (LWD)</strong><span>24 December 2026 · 88 cumulative days</span></div></div>
      </section>
      <section class="card"><div class="card-title"><h3>Geofence configuration</h3><a href="#" data-nav="College settings">Edit</a></div>
        <div class="session"><div class="session-icon">⌖</div><div class="session-info"><strong>Campus Coordinates</strong><span>13°02'17.5"N, 80°02'43.6"E</span></div></div>
        <div class="session"><div class="session-icon">◎</div><div class="session-info"><strong>Radius & Accuracy</strong><span>100m radius · 30m max GPS error</span></div></div>
        <div class="session"><div class="session-icon">!</div><div class="session-info"><strong>Outside-Radius Policy</strong><span>Reject + Allow Review Request</span></div></div>
      </section>
    </div>
  </main>`;
}

function adminStudentsPage() {
  const list = state.students.filter(s => (s.name + s.regNo + s.dept).toLowerCase().includes(state.studentSearch.toLowerCase()));
  return `<main class="page"><div class="two-column">
    <section class="card">
      <div class="toolbar"><h3 style="margin:0">Students (${list.length})</h3><input id="student-search" type="text" placeholder="Search name or reg no..." value="${state.studentSearch}" /></div>
      <div class="table-wrap" style="max-height:520px;overflow-y:auto"><table class="data-table">
        <thead><tr><th>Name</th><th>Register No.</th><th>Dept</th><th>Attendance</th></tr></thead>
        <tbody>${list.map(s => `<tr><td class="name-cell">${s.name}</td><td class="subtle">${s.regNo}</td><td>${s.dept}-${s.section}</td><td><span class="status present">${s.attendance}</span></td></tr>`).join('')}</tbody>
      </table></div>
    </section>
    <section class="card"><div class="card-title"><h3>Add student</h3></div>
      <form id="add-student-form">
        <label>Full name</label><input id="st-name" type="text" required />
        <label>Registration number</label><input id="st-reg" type="text" placeholder="2117250060..." required />
        <label>Department</label><input id="st-dept" type="text" value="MECH" required />
        <label>Section</label><input id="st-sec" type="text" value="B" required />
        <button class="primary full" style="margin-top:14px" type="submit">Add student</button>
      </form>
    </section>
  </div></main>`;
}

function adminTeachersPage() {
  return `<main class="page"><div class="two-column">
    <section class="card"><div class="card-title"><h3>Faculty directory (${state.teachers.length})</h3></div>
      <div class="table-wrap"><table class="data-table">
        <thead><tr><th>Name</th><th>Emp ID</th><th>Dept</th><th>Assigned</th></tr></thead>
        <tbody>${state.teachers.map(t => `<tr><td class="name-cell">${t.name}<br><span class="subtle">${t.email}</span></td><td class="subtle">${t.empId}</td><td>${t.dept}</td><td class="subtle">${t.classes}</td></tr>`).join('')}</tbody>
      </table></div>
    </section>
    <section class="card"><div class="card-title"><h3>Add teacher</h3></div>
      <form id="add-teacher-form">
        <label>Full name</label><input id="tc-name" type="text" required />
        <label>Employee ID</label><input id="tc-id" type="text" placeholder="e.g. ME72" required />
        <label>Department</label><input id="tc-dept" type="text" value="MECH" required />
        <label>Email</label><input id="tc-email" type="email" placeholder="name@ritchennai.edu.in" required />
        <button class="primary full" style="margin-top:14px" type="submit">Add teacher</button>
      </form>
    </section>
  </div></main>`;
}

function adminClassesPage() {
  return `<main class="page"><section class="card">
    <div class="card-title"><h3>All Departments & Sections (${ALL_CLASSES.length})</h3></div>
    <div class="table-wrap" style="max-height:540px;overflow-y:auto"><table class="data-table">
      <thead><tr><th>Department</th><th>Academic Year</th><th>Section</th><th>Semester</th><th>Students</th></tr></thead>
      <tbody>${ALL_CLASSES.map(c => `<tr><td class="name-cell">${c.dept}</td><td>${c.year}</td><td>${c.section}</td><td>Sem ${c.semester}</td><td>${c.students}</td></tr>`).join('')}</tbody>
    </table></div>
  </section></main>`;
}

function adminSettingsPage() {
  const s = state.settings;
  return `<main class="page"><section class="card" style="max-width:740px">
    <div class="card-title"><h3>RIT College & GPS Settings</h3></div>
    <form id="settings-form"><div class="form-grid">
      <div><label>College name</label><input id="set-college" type="text" value="${s.college}" required /></div>
      <div><label>Short name</label><input type="text" value="${s.shortName}" disabled /></div>
      <div><label>Allowed radius (m)</label><input id="set-radius" type="number" value="${s.gpsRadius}" required /></div>
      <div><label>Max GPS accuracy (m)</label><input id="set-acc" type="number" value="${s.maxAccuracy}" required /></div>
      <div><label>Campus latitude</label><input id="set-lat" type="text" value="${s.campusLat}" required /></div>
      <div><label>Campus longitude</label><input id="set-lng" type="text" value="${s.campusLng}" required /></div>
    </div><button class="primary" style="margin-top:18px" type="submit">Save settings</button></form>
  </section></main>`;
}

/* ---------- GPS DISTANCE & EVENTS ---------- */
function distanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000, toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function verifyRealGPS() {
  const btn = $('#mark-attendance');
  if (!navigator.geolocation) return toast('Geolocation not supported by this browser.');
  btn.disabled = true; btn.textContent = 'Checking GPS…';
  navigator.geolocation.getCurrentPosition(pos => {
    const dist = distanceMeters(pos.coords.latitude, pos.coords.longitude, state.settings.campusLat, state.settings.campusLng);
    const acc = Math.round(pos.coords.accuracy);
    if (dist <= state.settings.gpsRadius && acc <= state.settings.maxAccuracy) {
      state.attendanceMarked = true; state.gpsError = null; state.history[0].status = 'Present';
      toast(`GPS verified (${dist}m from RIT, ±${acc}m accuracy).`);
    } else {
      state.gpsError = `You are ${dist}m from RIT campus (limit ${state.settings.gpsRadius}m) with ±${acc}m accuracy (limit ${state.settings.maxAccuracy}m).`;
      state.page = 'Mark attendance';
    }
    render();
  }, () => {
    state.gpsError = 'Location permission denied or unavailable. You can submit a GPS review request.';
    state.page = 'Mark attendance'; render();
  }, { enableHighAccuracy: true, timeout: 8000 });
}

function bindPageEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); goTo(el.dataset.nav); }));
  document.querySelectorAll('.day-btn').forEach(btn => btn.addEventListener('click', () => { state.selectedDay = btn.dataset.day; render(); }));
  if ($('#mark-attendance')) $('#mark-attendance').addEventListener('click', verifyRealGPS);
  if ($('#sim-inside')) $('#sim-inside').addEventListener('click', () => { state.attendanceMarked = true; state.gpsError = null; state.history[0].status = 'Present'; toast('Demo on-campus GPS verified (24m from RIT).'); render(); });
  if ($('#req-gps-review')) $('#req-gps-review').addEventListener('click', () => {
    state.absenceRequests.unshift({ id: Date.now(), student: state.currentUser.name, regNo: state.currentUser.regNo, course: 'MA23313', date: '20 Nov 2026', type: 'GPS Review', reason: state.gpsError, status: 'Pending' });
    state.gpsError = null; toast('GPS review request sent to faculty.'); goTo('Absence requests');
  });
  if ($('#history-filter')) $('#history-filter').addEventListener('change', e => { state.historyFilter = e.target.value; render(); });
  if ($('#absence-form')) $('#absence-form').addEventListener('submit', e => {
    e.preventDefault();
    state.absenceRequests.unshift({ id: Date.now(), student: state.currentUser.name, regNo: state.currentUser.regNo, course: $('#abs-course').value, date: $('#abs-date').value, type: $('#abs-type').value, reason: $('#abs-reason').value, status: 'Pending' });
    toast('Request submitted for faculty review.'); render();
  });
  if ($('#profile-form')) $('#profile-form').addEventListener('submit', e => { e.preventDefault(); state.currentUser.email = $('#prof-email').value; toast('Profile email updated.'); });
  document.querySelectorAll('.verify-gps').forEach(btn => btn.addEventListener('click', () => { state.liveRoster[btn.dataset.idx].status = 'Verified'; toast('GPS review approved.'); render(); }));
  document.querySelectorAll('.req-act').forEach(btn => btn.addEventListener('click', () => { const r = state.absenceRequests.find(x => x.id == btn.dataset.id); if (r) r.status = btn.dataset.act; toast(`Request ${btn.dataset.act}.`); render(); }));
  document.querySelectorAll('.toggle-session').forEach(btn => btn.addEventListener('click', () => { const s = state.sessions.find(x => x.id == btn.dataset.id); if (s) s.active = !s.active; toast(`Session ${s.active?'reopened':'closed'}.`); render(); }));
  if ($('#session-form')) $('#session-form').addEventListener('submit', e => { e.preventDefault(); state.sessions.unshift({ id: Date.now(), course: $('#ses-course').value, section: $('#ses-section').value, room: $('#ses-room').value, time: 'Live now', present: 0, total: 60, active: true }); toast('Live session opened.'); render(); });
  if ($('#mark-all-read')) $('#mark-all-read').addEventListener('click', () => { state.notifications.forEach(n => n.read = true); toast('Notifications cleared.'); render(); });
  if ($('#export-csv')) $('#export-csv').addEventListener('click', () => {
    const csv = 'RegisterNo,Name,Dept,Section,Attendance\n' + state.students.map(s => `${s.regNo},"${s.name}",${s.dept},${s.section},${s.attendance}`).join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); a.download = 'RIT_MECH_B_Attendance.csv'; a.click();
    toast('CSV report downloaded.');
  });
  if ($('#student-search')) $('#student-search').addEventListener('input', e => { state.studentSearch = e.target.value; render(); $('#student-search').focus(); });
  if ($('#add-student-form')) $('#add-student-form').addEventListener('submit', e => { e.preventDefault(); state.students.unshift({ name: $('#st-name').value.toUpperCase(), regNo: $('#st-reg').value, dept: $('#st-dept').value.toUpperCase(), year: 'II Year', section: $('#st-sec').value.toUpperCase(), email: '', attendance: '100%' }); toast('Student added.'); render(); });
  if ($('#add-teacher-form')) $('#add-teacher-form').addEventListener('submit', e => { e.preventDefault(); state.teachers.unshift({ name: $('#tc-name').value, empId: $('#tc-id').value.toUpperCase(), dept: $('#tc-dept').value.toUpperCase(), email: $('#tc-email').value, classes: 'Assigned', status: 'Active' }); toast('Teacher added.'); render(); });
  if ($('#settings-form')) $('#settings-form').addEventListener('submit', e => { e.preventDefault(); state.settings.college = $('#set-college').value; state.settings.gpsRadius = Number($('#set-radius').value); state.settings.maxAccuracy = Number($('#set-acc').value); state.settings.campusLat = Number($('#set-lat').value); state.settings.campusLng = Number($('#set-lng').value); toast('RIT campus settings saved.'); });
}

function toast(message) { const el = $('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 3500); }