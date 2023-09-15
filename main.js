const container = document.createElement('div');
const table = document.createElement('table');
const tr = document.createElement('tr');
const tittle = document.createElement('th');
const tittle1 = document.createElement('th');
const tittle2 = document.createElement('th');

tittle.textContent = "name";
tittle1.textContent = "username"
tittle2.textContent = "email"



     async function dataTable () {
        let response = await fetch(" https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
     console.log(data);
  
     data.map(item => {
      for (let i = 0; i < 1; i++){
        const tr = document.createElement('tr');
          for(let j = 0; j < 3; j++){
          const td = document.createElement('td');
          td.textContent = `${item.name}`;
                
                tr.appendChild(td);
              }
              table.appendChild(tr);
            }
    }).join("");
    
   }

   dataTable();
   document.body.appendChild(container);
container.appendChild(table);
table.appendChild(tr);
tr.appendChild(tittle);
tr.appendChild(tittle1);
tr.appendChild(tittle2);














