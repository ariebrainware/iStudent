// Global State Data
let s = []

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
const btnDelete = nim => {
    return `<button id="btn-delete-${nim}" class="btn btn-primary" onClick="deleteStudentScore(${nim})" type="button">Hapus</button>`
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
    s = data
    if (data) {
        data.map(studentRow => {
            tableStudentData.append(createStudentRow(studentRow))
        })
    } else {
        noDataInfo()
    }
}

const createStudentRow = data => {
    console.log('createStudentRowData', data)
    return `<tr scope="row"><td>${data.nim}</td><td>${data.name}</td><td>${data.prodi}</td><td>${data.semester}</td><td>${data.quiz_score}</td><td>${data.tugas_score}</td><td>${data.uts_score}</td><td>${data.uas_score}</td><td>${data.ip}</td><td><button id="btn-delete" class="btn btn-primary" onClick="deleteStudentScore(${data.nim})" type="button">Hapus</button></td></tr>`
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
    if (s.length > 0) {
        s.push(studentData)
        localStorage.setItem('student_data', JSON.stringify(s))
    }
    tableStudentData.append(createStudentRow(studentData))
    successMessage()
    clearField()
}

const deleteStudentScore = (nim) => {
    const data = JSON.parse(localStorage.getItem("student_data"))
    if (data) {
        data.filter(value => {
            if (value.nim != nim) {
                console.log('not deleted NIM: ', value.nim)
                localStorage.setItem('student_data', JSON.stringify(data))
            }
        })
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
        formStudentData[0].setAttribute("data-dismiss", "modal")
    })
})
