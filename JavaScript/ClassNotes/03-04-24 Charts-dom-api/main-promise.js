// Data was taken from this website: https://dummy.restapiexample.com/
// Api endpoint is: https://dummy.restapiexample.com/api/v1/employees

// const url = "https://dummy.restapiexample.com/api/v1/employees";
const url = "https://649f3bd0245f077f3e9d72f6.mockapi.io/api/v1/employees";
const cxt = document.querySelector("#myChart");

function fetchData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayChart(data);
    })
    .catch((error) => console.log(error));
}

function fetchDataAxios() {
  axios
    .get(url)
    .then((response) => {
      displayChart(response.data);
    })
    .catch((error) => console.log(error));
}
// fetchDataAxios();
fetchData();

function displayChart(employees) {
  const labels = employees.map((d) => d.employee_name);
  const salaries = employees.map((d) => d.employee_salary);
  const ages = employees.map((d) => d.employee_age);

  const config = {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Employee Salaries",
          data: salaries,
        },
        {
          label: "Employee Ages",
          data: ages,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  new Chart(cxt, config);
}