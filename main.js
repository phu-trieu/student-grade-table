var getTable = document.querySelector('table');
var gradeTable = new GradeTable(getTable);
var getHeader = document.querySelector('header');
var header = new PageHeader(getHeader);
var getForm = document.querySelector('form');
var form = new GradeForm(getForm);
var app = new App(gradeTable, header, form);
app.start();
