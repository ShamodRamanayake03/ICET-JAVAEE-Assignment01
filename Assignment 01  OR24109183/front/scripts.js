
const apiBaseUrl = 'http://localhost:8080/api'; 


document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    let studentId = document.getElementById('studentId').value;
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;

    
    let studentData = {
        studentId,
        name,
        dob,
        address,
        contact,
        email
    };

   
    fetch(`${apiBaseUrl}/add-student`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    })
    .then(response => response.json())
    .then(data => {
        alert("Student registered successfully!");
       
        document.getElementById('studentForm').reset();
    })
    .catch(error => console.error('Error:', error));
});


function fetchStudents() {
    fetch(`${apiBaseUrl}/view-all-students`)
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById('studentTableBody');
            tableBody.innerHTML = '';

            
            data.forEach(student => {
                let row = `<tr>
                    <td>${student.studentId}</td>
                    <td>${student.name}</td>
                    <td>${student.dob}</td>
                    <td>${student.address}</td>
                    <td>${student.contact}</td>
                    <td>${student.email}</td>
                </tr>`;
                tableBody.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch(error => console.error('Error:', error));
}


document.getElementById('view-students-tab').addEventListener('click', fetchStudents);
