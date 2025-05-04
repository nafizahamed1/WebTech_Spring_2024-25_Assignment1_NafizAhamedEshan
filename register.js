document.getElementById('form1').addEventListener("submit", function (a) {
    a.preventDefault();

    let id = document.getElementById("employeeId").value;
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let joinDate = document.getElementById("JoiningDate").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let type = document.querySelector('input[name="empType"]:checked');


    let idError = document.getElementById("employeeIdError");
    let nameError = document.getElementById("fullNameError");
    let emailError = document.getElementById("emailError");
    let departmentError = document.getElementById("departmentError");
    let joinDateError = document.getElementById("JoiningDateError");
    let genderError = document.getElementById("genderError");
    let typeError = document.getElementById("checkboxError");

 
    idError.innerText = "";
    nameError.innerText = "";
    emailError.innerText = "";
    departmentError.innerText = "";
    joinDateError.innerText = "";
    genderError.innerText = "";
    typeError.innerText = "";

    let isValid = true;

    let idPattern = /^EMP\d{3}$/;
    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;




    
    if (!idPattern.test(id)) {
        idError.innerText = "*Invalid ID (Expected format: EMP followed by 3 digits)";
        isValid = false;
    
    }

    if (!namePattern.test(name)) {
        nameError.innerText = "*Invalid Name (Only alphabets and spaces)";
        isValid = false;
    }


    if (!emailPattern.test(email)) {
        emailError.innerText = "*Invalid email format";
        isValid = false;
    
    }


    if (department === "") {
        departmentError.innerText = "*Please select a department";
        isValid = false;
    }


    if (joinDate === "") {
        joinDateError.innerText = "*Please enter a joining date";
        isValid = false;
    }


    if (!gender) {
        genderError.innerText = "*Please select a gender";
        isValid = false;
    }



    if (!type) {
        typeError.innerText = "*You must check the employee type";
        isValid = false;
    }

    if (isValid) {
        let display = `
            <h2>Registered Employee</h2>
            <p> <strong>ID: </strong>${id}</p>
            <p> <strong>Name:</strong> ${name}</p>
            <p> <strong>Email:</strong> ${email}</p>
            <p> <strong>Department:</strong> ${department}</p>
            <p> <strong>Joining Date:</strong> ${joinDate}</p>
            <p> <strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Employment Type:</strong> ${type.value}</p>
        `;
        document.getElementById('display').innerHTML = display;
        
    }
    
});
