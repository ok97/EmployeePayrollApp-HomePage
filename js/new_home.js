  
window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHtml = `${headerHtml}
    <tr>
                    <td><img src="../assets/profile-images/Ellipse -9.png" alt=""></td>
                    <td>Omprakash Rambhau Khawshi</td>
                    <td>Male</td>
                    <td><div class="dept-label">Engineer</div></td>
                    <td>45900</td>
                    <td>05 June 2021</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete"
                        src="../assets/icons/delete-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" 
                        src="../assets/icons/create-black-18dp.svg">
                    </td>
                </tr>
    `;
    document.querySelector("#table-display").innerHTML = innerHtml;
}