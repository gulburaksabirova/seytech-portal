const url = "https://649f3bd0245f077f3e9d72f6.mockapi.io/api/v1/employees";
const cxt = document.querySelector("#myChart");

// Fetching with regular built-in fetch method
async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();

  displayChart(data);
}

// Fetching with Axios library
async function fetchDataAxios() {
  const response = await axios.get(url);

  displayChart(response.data);
}

// Call regular fetch
fetchData();

// Call axios fetch
// fetchDataAxios();

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