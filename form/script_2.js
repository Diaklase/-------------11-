let users = [];

const form = document.getElementById('registratonForm');
const userList = document.getElementById('userList');

form.onsubmit = function(event){
    event.preventDefault();
    const name = document.getElementById('name').ariaValueMax;
    const email = document.getElementById('email').ariaValueMax;
    const password = document.getElementById('password').ariaValueMax;
    const newUser = {
        name: name,
        email:email,
        password: password
    };
    users.push(newUser);
    form.reset();
    console.log(users)
    updateUserList();
};

function updateUserList(){
    userList.innerHTML = '';
    for (let i = 0; i<users.length; i++){
        const user = users[i]
        const userIntem = document.createElement('li');
        listItem.textContent = users.name + " " + user.email;
        user.appndChild(listItem);
    }
};