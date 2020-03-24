class GradeTable {
  constructor(tableElement, noGradesElement) {
     this.tableElement = tableElement;
     this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    console.log(grades);
    var tBody = document.querySelector('tbody');
    while(tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }
    if(grades.length === 0) {
      var getHiddenP = document.querySelector('.d-none');
      getHiddenP.className = '';
    }
    for(var i = 0; i < grades.length; i++) {
      // var row = document.createElement('tr');
      // var studentName = document.createElement('td');
      // var courseName = document.createElement('td');
      // var studentsGrade = document.createElement('td');
      // studentName.textContent = grades[i].name;
      // courseName.textContent = grades[i].course;
      // studentsGrade.textContent = grades[i].grade;
      // row.appendChild(studentName);
      // row.appendChild(courseName);
      // row.appendChild(studentsGrade);
      var row = this.renderGradeRow(grades[i], this.deleteGrade);
      tBody.appendChild(row);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement('tr');
    var studentName = document.createElement('td');
    var courseName = document.createElement('td');
    var studentsGrade = document.createElement('td');
    var deleteCol = document.createElement('td');
    var deleteButton = document.createElement('button');
    studentName.textContent = data.name;
    courseName.textContent = data.course;
    studentsGrade.textContent = data.grade;
    deleteButton.textContent = 'DELETE';
    row.appendChild(studentName);
    row.appendChild(courseName);
    row.appendChild(studentsGrade);
    deleteButton.addEventListener('click', function() {
      deleteGrade(data.id);
    })
    deleteButton.setAttribute('class', 'btn btn-danger')
    deleteCol.appendChild(deleteButton);
    row.appendChild(deleteCol);
    return row;
  }
}
