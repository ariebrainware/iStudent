var deleteButton = '<button class="btn btn-primary" onclick="deleteRow(this)" type="button">Hapus</button>'

function checkData() {
    const s = JSON.parse(localStorage.getItem("student_data"))
    console.log(s.name)
    var studentValueRow = `<tr scope="row"><td>${s.nim}</td><td>${s.name}</td><td>${s.prodi}</td><td>${s.semester}</td><td>${s.quiz}</td><td>${s.tugas}</td><td>${s.uts}</td><td>${s.uas}</td><td>${s.ip}</td><td>${deleteButton}</td></tr>`
    document.getElementById("student-data").reset()
    $('tbody').append(studentValueRow)
    if ($('tbody').children().length < 1) {
        $('tbody').append('<tr id="no-data"><td colspan="10">No Data</td></tr>')
    } else {        
        $('#no-data').remove()
    }
}

$(document).ready(function () {
    $('#student-data').submit(function (e) {
        e.preventDefault();
    });
    checkData()
});

function insertStudent() {
    var name = $('[name=name]').val()
    var nim = $('[name=NIM]').val()
    var prodi = $('[name=prodi]').val()
    var semester = $('[name=semester]').val()
    var quiz = $('[name=quiz_score]').val()
    var tugas = $('[name=tugas_score]').val()
    var uts = $('[name=uts_score]').val()
    var uas = $('[name=uas_score]').val()

    var ip;
    var na = (0.10 * quiz) + (0.20 * tugas) + (0.30 * uts) + (0.40 * uas)

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
        name,nim,prodi,semester,quiz,tugas,uts,uas,ip
    }
    localStorage.setItem("student_data",JSON.stringify(studentData))
    
    var studentValueRow = `<tr scope="row"><td>${nim}</td><td>${name}</td><td>${prodi}</td><td>${semester}</td><td>${quiz}</td><td>${tugas}</td><td>${uts}</td><td>${uas}</td><td>${ip}</td><td>${deleteButton}</td></tr>`
    document.getElementById("student-data").reset()
    $('tbody').append(studentValueRow)
    checkData()
}

function deleteRow(el) {
    $(el).parent().parent().remove()
    checkData()
}