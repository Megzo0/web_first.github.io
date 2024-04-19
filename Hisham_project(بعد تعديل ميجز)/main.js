var jobs = [
  {
    id: 1,
    name: 'BackEnd',
    Company: 'Amazon',
    Salary: 4000,
    Hours: 6,
    Status: 'onsite',
  },
  {
    id: 2,
    name: 'UIX Designer',
    Company: 'Google',
    Salary: 3000,
    Hours: 8,
    Status: 'online',
  },
  {
    id: 3,
    name: 'FrontEnd',
    Company: 'Cyshield',
    Salary: 2500,
    Hours: 6,
    Status: 'online',
  },
];

// One time just
if (!localStorage.getItem('jobs')) {
  localStorage.setItem('jobs', JSON.stringify(jobs));
}

jobs = JSON.parse(localStorage.getItem('jobs')) || jobs;

function render() {
  var parent = document.getElementById('Jobs');
  parent.innerHTML =
    "<br><a class='btn ' href='../bqst/Add_Admin.html'>Add Job</a>";
  jobs.forEach((element) => {
    var item = document.createElement('div');
    item.classList.add('job');
    item.classList.add(`job${element.id}`);
    item.innerHTML = `
                    <h3>${element.name}</h3>
                    <p> -Company:${element.Company} <br>
                        -Salary: ${element.Salary} LE <br>
                        -Hours: ${element.Hours} h <br>
                        -${element.Status}</p> <br>
                    <button class="Edit${element.id}">Edit</button>
                    <button class="delete${element.id}"> Delete</button>`;
    parent.prepend(item);
  });
}
render();

let addedJob = JSON.parse(localStorage.getItem('job')) || null;
add(addedJob);

function add(job) {
  if (job) {
    jobs.push(job);
    render();
  }
}
