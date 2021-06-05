window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});
/* UC5:- Ability to view Employee Payroll details in a Tabular Format from JSON Object. */
const createInnerHTML = () => {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" alt="" 
                  src="${empPayrollData._profilePic}">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
          <img id="#table-display" onclick="remove(this)" 
               src="../assets/icons/delete-black-18dp.svg" alt="delete">
          <img id="#table-display" onclick="update(this)" 
               src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
      </tr>
      `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {       
        _name: 'Omprakash',
        _gender: 'Male',
        _department: [
            ' Engineer'
           
        ],
        _salary: '40000',
        _startDate: '29 Sep 2019',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: '../assets/profile-images/Ellipse -2.png'
      },
      {
        _name: 'Rami',
        _gender: 'Female',
        _department: [
            'Sales'
        ],
        _salary: '50000',
        _startDate: '29 Dec 2018',
        _note: '',
        _id: new Date().getTime() + 1,
        _profilePic: '../assets/profile-images/Ellipse -1.png'
      }
    ];
    return empPayrollListLocal;
  }