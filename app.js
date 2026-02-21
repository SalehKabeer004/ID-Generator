
//Submit Handler
let idGenerator = document.getElementById('generate-id')

//Print Details
let printPhoto = document.getElementById('profile-photo')
let PrintName = document.getElementById('printed-name')
let PrintCourse = document.getElementById('printed-course')
let PrintRollNo = document.getElementById('printed-roll-no')

//Assigned Details
let assignedName = document.getElementById('assigned-name')
let assignedCnic = document.getElementById('assigned-cnic')
let assignedCourse = document.getElementById('assigned-course')

//Photo Upload Preview
document.getElementById('inserted-photo').addEventListener('change', function(event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = function(e) {
            printPhoto.src = e.target.result
        }
        reader.readAsDataURL(file)
    }
})

function generateIdCard() {
    //Get Submitted Details
    let insertedName = document.getElementById('inserted-name').value
    let uploadedPhoto = document.getElementById('inserted-photo').value
    let insertedCnic = document.getElementById('inserted-cnic').value
    let selectedCourse = document.getElementById('course-selctor').value

    //Validate inputs
    if (!insertedName || !insertedCnic || !selectedCourse) {
        alert('Please fill in all required fields!')
        return
    }

    //Generate Roll Number (WMA-XXXXX)
    let rollNumber = 'WMA-' + Math.floor(Math.random() * 900000 + 100000)

    //Update ID Card Front
    PrintName.innerText = insertedName.toUpperCase()
    PrintCourse.innerText = selectedCourse
    PrintRollNo.innerText = rollNumber

    //Update ID Card Back
    assignedName.innerText = insertedName.toUpperCase()
    assignedCnic.innerText = insertedCnic
    assignedCourse.innerText = selectedCourse.substring(0, 3).toUpperCase() + ' BATCH 18'
}