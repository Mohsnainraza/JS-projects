let name = prompt("Enter name");
document.getElementById("name").textContent = name;

let totalMarks = Number(prompt("Enter Total Marks"));
document.getElementById("totalMarks").textContent = totalMarks;
    
let obtainedMarks = Number(prompt("Enter Obtained Marks"));
document.getElementById("obtainedMarks").textContent = obtainedMarks

let calculation = ((obtainedMarks/totalMarks)*100).toFixed(2);
document.getElementById("percentage").textContent = calculation
