class Student {
constructor(name, rollNumber, department, cgpa) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.department = department;
    this.cgpa = cgpa;
}
}

// ---------- DOM selection ----------
const nameInput = document.getElementById('nameInput');
const rollInput = document.getElementById('rollInput');
const deptInput = document.getElementById('deptInput');
const cgpaInput = document.getElementById('cgpaInput');
const generateBtn = document.getElementById('generateBtn');
const errorMsg = document.getElementById('errorMsg');
const profileContainer = document.getElementById('profileContainer');

// ---------- Event handling ----------
generateBtn.addEventListener('click', () => {
const name = nameInput.value.trim();
const roll = rollInput.value.trim();
const dept = deptInput.value.trim();
const cgpa = cgpaInput.value.trim();

// Basic validation
if (!name || !roll || !dept || !cgpa) {
    errorMsg.textContent = 'Please fill in all fields before generating the profile.';
    return;
}
if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
    errorMsg.textContent = 'CGPA must be a number between 0 and 10.';
    return;
}
errorMsg.textContent = '';

// Create an object of the Student class using user-provided values
const student = new Student(name, roll, dept, parseFloat(cgpa).toFixed(2));

renderProfile(student);
});

// ---------- Dynamically create and display the profile ----------
function renderProfile(student) {
// Clear any previously generated profile
profileContainer.innerHTML = '';

// Create container card
const card = document.createElement('div');
card.className = 'profile-card';

// Title
const title = document.createElement('h2');
title.textContent = 'Student Profile';
card.appendChild(title);

// Helper to build a row
const fields = [
    { label: 'Name', value: student.name },
    { label: 'Roll No', value: student.rollNumber },
    { label: 'Department', value: student.department },
    { label: 'CGPA', value: student.cgpa, isCgpa: true }
];

fields.forEach(field => {
    const row = document.createElement('div');
    row.className = 'profile-row';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'field-label';
    labelSpan.textContent = field.label;

    const valueSpan = document.createElement('span');
    valueSpan.className = 'field-value';

    if (field.isCgpa) {
    const badge = document.createElement('span');
    badge.className = 'cgpa-badge';
    badge.textContent = field.value;
    valueSpan.appendChild(badge);
    } else {
    valueSpan.textContent = field.value;
    }

    row.appendChild(labelSpan);
    row.appendChild(valueSpan);
    card.appendChild(row);
});

// Add the finished card to the page
profileContainer.appendChild(card);
}