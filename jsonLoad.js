fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => DisplayUserName(json));


function DisplayUserName(usersJson){
    const userNames = usersJson.map(user => user.username);
    console.log(userNames);
}