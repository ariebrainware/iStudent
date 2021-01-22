// Form Field Variable
const studentName = $('#name')
const nim = $('#nim')
const prodi = $('#prodi')
const semester = $('#semester')
const quizScore = $('#quiz_score')
const tugasScore = $('#tugas_score')
const utsScore = $('#uts_score')
const uasScore = $('#uas_score')


// Component/DOM Variable
const btnAdd = $('#btn-add')
const modalAdd = $('#modal-add')
const formStudentData = $('#form-student-data')
const tableStudentData = $('tbody')
const btnClose = $('#btn-close')
const btnSimpan = $('#btn-simpan')
// const btnDeleteField = $('#btn-delete-field')
const noDataInfo = () => {
    return `<tr id="no-data"><td colspan="10">No Data</td></tr>`
}

/*
#####################################################################
Function Definition
*/
const successMessage = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Student score data saved',
        showConfirmButton: false,
        timer: 1500
    })
}

const clearField = () => {
    studentName[0].value = ''
    nim[0].value = ''
    prodi[0].value = ''
    semester[0].value = ''
    quizScore[0].value = ''
    tugasScore[0].value = ''
    utsScore[0].value = ''
    uasScore[0].value = ''
}

const loadData = () => {
    const data = JSON.parse(localStorage.getItem("student_data"))
    if (data) {
        data.map(studentRow => {
            tableStudentData.append(createStudentRow(studentRow))
        })
    } else {
        noDataInfo()
    }
}

const createStudentRow = data => {
    return `
    <tr scope="row" id="row-${data.nim}">
        <td>${data.nim}</td>
        <td>${data.name}</td>
        <td>${data.prodi}</td>
        <td>${data.semester}</td>
        <td>${data.quiz_score}</td>
        <td>${data.tugas_score}</td>
        <td>${data.uts_score}</td>
        <td>${data.uas_score}</td>
        <td>${data.ip}</td>
        <td>
            <button id="btn-delete" class="btn btn-primary" onClick="deleteStudentScore('${data.nim}')" type="button">Hapus</button>
        </td>
    </tr>
    `
}

const insertStudentScore = () => {
    let ip
    let na = (0.10 * quizScore[0].value) + (0.20 * tugasScore[0].value) + (0.30 * utsScore[0].value) + (0.40 * uasScore[0].value)

    // Determine Alphabet Score
    if ((na > 80) && (na <= 100)) {
        ip = "A (Lulus Dengan Sangat Baik)"
    } else if ((na > 68) && (na <= 80)) {
        ip = "B (Lulus Dengan Baik)"
    } else if ((na > 55) && (na <= 68)) {
        ip = "C (Lulus Dengan Cukup)"
    } else if ((na > 38) && (na <= 55)) {
        ip = "D (Lulus dengan Kurang)"
    } else {
        ip = "E (Tidak Lulus)"
    }

    const studentData = {
        "name": studentName[0].value,
        "nim": nim[0].value,
        "prodi": prodi[0].value,
        "semester": semester[0].value,
        "quiz_score": quizScore[0].value,
        "tugas_score": tugasScore[0].value,
        "uts_score": utsScore[0].value,
        "uas_score": uasScore[0].value,
        "ip": ip,
    }
    let data = JSON.parse(localStorage.getItem("student_data"))
    if (data == null) {
        const studentData = [{
            "name": studentName[0].value,
            "nim": nim[0].value,
            "prodi": prodi[0].value,
            "semester": semester[0].value,
            "quiz_score": quizScore[0].value,
            "tugas_score": tugasScore[0].value,
            "uts_score": utsScore[0].value,
            "uas_score": uasScore[0].value,
            "ip": ip,
        }]
        localStorage.setItem('student_data', JSON.stringify(studentData))
        console.log("saved to new key")
    } else {
        const studentData = {
            "name": studentName[0].value,
            "nim": nim[0].value,
            "prodi": prodi[0].value,
            "semester": semester[0].value,
            "quiz_score": quizScore[0].value,
            "tugas_score": tugasScore[0].value,
            "uts_score": utsScore[0].value,
            "uas_score": uasScore[0].value,
            "ip": ip,
        }
        data.push(studentData)
        localStorage.setItem('student_data', JSON.stringify(data))
        console.log("saved to existing key")
    }

    tableStudentData.append(createStudentRow(studentData))
    successMessage()
    clearField()
}

const arrayRemove = (arr, value) => {
    return arr.filter(ele => {
        return ele.nim != value
    })
}

const deleteStudentScore = nim => {
    const data = JSON.parse(localStorage.getItem("student_data"))
    console.log("data before: ", data)
    if (data) {
        let result = arrayRemove(data, nim)
        localStorage.setItem('student_data', JSON.stringify(result))
        $(`#row-${nim}`).remove()

        console.log("data after: ", data)

    }
}

/*
###########################################################
Event Listener
*/
window.addEventListener('load', () => {
    loadData()
    formStudentData.on('submit', (event) => {
        event.preventDefault()
        insertStudentScore()
    })

    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded')
    })
})
