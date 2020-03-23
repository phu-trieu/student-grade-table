var table = document.querySelector('table');
var gradeTable = new GradeTable(table);
var getHeader = document.querySelector('header');
var header = new PageHeader(getHeader);
var app = new App(gradeTable, header);
app.start();
