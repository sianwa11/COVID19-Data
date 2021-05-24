class ChartView {
  _data = [];
  _ctx = [
    document.getElementById("casesChart").getContext("2d"),
    document.getElementById("deathChart").getContext("2d"),
    document.getElementById("recoveredChart").getContext("2d"),
  ];

  render(cases, deaths, recoveries) {
    if (!cases || !deaths || !recoveries) return;
    this._data[0] = cases;
    this._data[1] = deaths;
    this._data[2] = recoveries;
    this._generateMarkup();
    console.log(this._data);
  }

  _colorGen() {
    Math.floor(Math.random() * 256);
  }

  _generateMarkup() {
    for (let i = 0; i < this._data.length; i++) {
      let myChart = new Chart(this._ctx[i], {
        type: "doughnut",
        data: {
          labels: ["2020", "2021"],
          datasets: [
            {
              label: "Years",
              data: [this._data[i].twentytwenty, this._data[i].twentyone],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }
}

export default new ChartView();
