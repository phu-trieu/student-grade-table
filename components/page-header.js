class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var avgGrade = document.querySelector('span');
    avgGrade.textContent = newAverage;
  }
}
