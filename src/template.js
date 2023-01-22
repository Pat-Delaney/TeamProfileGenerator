const employeeQues = ["What is the employee's name?", "What is the employee's id?","What is the employee's email?"];
const engineerQues=["What is the Engineer's Github?"];
const internQues = ["What is the Intern's school?"];
const managerQues = ["What is the Manager's office number?"];

const headerTemp = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <header>
        <nav class="navbar bg-light">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    </header>
<main>`;

const footerTemp = `
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>`;

module.exports = {employeeQues,engineerQues,internQues,managerQues,headerTemp,footerTemp};