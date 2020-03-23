class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    console.log(newAverage);
    var avgGrade = document.querySelector('span');
    avgGrade.textContent = newAverage;
  }
}
