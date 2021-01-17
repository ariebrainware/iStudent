$(document).ready(function () {
    $('#student-data').submit(function (e) { 
        e.preventDefault();
        
    });
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

    var studentValueRow = `<tr scope="row"><td>${nim}</td><td>${name}</td><td>${prodi}</td><td>${semester}</td><td>${quiz}</td><td>${tugas}</td><td>${uts}</td><td>${uas}</td></tr>`
    $('tbody').append(studentValueRow)
}