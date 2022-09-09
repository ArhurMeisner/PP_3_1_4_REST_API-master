const renderUsers1 = async (users1) => {
    const response = await fetch("/api/admin");

    if (response.ok) {
        let json = await response.json()
            .then(data => fuckedFunction(data));
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    function fuckedFunction (users) {
        output = ''
        users.forEach(user => {
            output += ` 
              <tr> 
                    <td>${user.id}</td> 
                    <td>${user.username}</td> 
                    <td>${user.email}</td> 
                    <td>${user.age}</td> 
                    <td>${user.occupation}</td> 
                    <td>${user.roles.map(role => role.name === 'ROLE_USER' ? 'USER' : 'ADMIN')}</td> 
              <td> 
                   <button type="button" class="btn btn-info" id="edit-user" data-action="edit" 
                    data-id="${user.id}" data-toggle="modal" data-target="modal" data-userid="${user.id}" >Edit</button> 
               </td> 
               <td> 
                   <button type="button" class="btn btn-danger" id="delete-user" data-action="delete" 
                   data-id="${user.id}" data-target="modal">Delete</button> 
                    </td> 
              </tr>`
        })
        info.innerHTML = output;
    }
}
// GET ALL users
const info = document.querySelector('#allUsers');
const url = 'http://127.0.0.1:8080/api/admin'

fetch(url, {mode: 'cors'})
    .then(res => res.json())
    .then(data => {
        users = data;
        renderUsers1(data)
    })