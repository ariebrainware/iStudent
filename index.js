function checkData() {
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
    var na = (0.10*quiz) + (0.20*tugas) + (0.30*uts) + (0.40*uas)

    if ((na > 80) && (na <=100)) {
        ip = "A (Lulus Dengan Sangat Baik)"
    } else if ((na > 68) && (na <=80)) {
        ip = "B (Lulus Dengan Baik)"
    } else if((na > 55) && (na <= 68)) {
        ip = "C (Lulus Dengan Cukup)"
    } else  if((na > 38) && (na <=55)) {
        ip = "D (Lulus dengan Kurang)"
    } else {
        ip = "E (Tidak Lulus)"
    }

    var deleteButton = '<button class="btn btn-primary" onclick="deleteRow(this)" type="button">Hapus</button>'
    var studentValueRow = `<tr scope="row"><td>${nim}</td><td>${name}</td><td>${prodi}</td><td>${semester}</td><td>${quiz}</td><td>${tugas}</td><td>${uts}</td><td>${uas}</td><td>${ip}</td><td>${deleteButton}</td></tr>`
    document.getElementById("student-data").reset()
    $('tbody').append(studentValueRow)
    checkData()
}

function deleteRow(el) {
    $(el).parent().parent().remove()
    checkData()
}