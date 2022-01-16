/* const list = document.getElementById('list');
const list_elemine =
  document.getElementById('list_elemine');

let a = [
  { name: 'ahmed', age: 2, elemine: false },
  { name: 'farou9', age: 3, elemine: false },
  { name: 'fadhila', age: 6, elemine: true },
];

const abbi = () =>
{
  list.innerHTML = '';
  list_elemine.innerHTML = '';
  a.map((e) =>
  {
    if (e.elemine === true) {
      const weldElimine = `<li>esm : ${ e.name } <button style="background-color:red" onclick="supprimer('${ e.name }')" >X</button> </li>`;
      list_elemine.innerHTML += weldElimine;
    } else {
      const weld = `<li>esm : ${ e.name } <button onclick="elimine('${ e.name }')" >X</button> </li>`;
      list.innerHTML += weld;
    }
  });
};
function elimine(name)
{
  a.map((e) =>
  {
    if (e.name === name) {
      e.elemine = true;
    }
  });
  abbi();
}

function supprimer(name)
{
  a = a.filter((e) =>
  {
    return e?.name !== name;
  });
  abbi();
}
function add()
{
  const esm = document.getElementById('name').value;
  const newCandidate = {
    name: esm,
    elemine: false,
  };
  a.push(newCandidate);
  abbi();
}
 */

/* const changeSelect = (event) =>


{

  console.log(event.target.value);
}


const m = document.getElementById('demoo');
const clickme = (event) =>
{
  const valeur = document.querySelector('#clickmetext');
  m.innerText = valeur.value
}


const clearinput = () =>
{
  m.innerText = ''
}


const ul = document.querySelector('#list');
const hetsubmit = (event) =>
{
  event.preventDefault()
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');

  const ELEMENT_JDID = `
  <li> 
  
    <div style="display:flex"> 
    <p> ${ username.value } </p>
    <p> ${ password.value } </p>
    </div> 
  
  </li>`

  ul.innerHTML += ELEMENT_JDID;

  username.value = ''
  password.value = ''


}








let imagesList = document.querySelector('#images');
const changeFileeeeeee = (event) =>
{
  const photos = event.target.files;
  [...photos].map(image =>
  {
    const url = window.URL.createObjectURL(image);
    imagesList.innerHTML += `  <img width='100' src='${ url }' />  `

  })
}


const handleFile = (event) =>
{
  const imageHolder = document.getElementById('image')
  const file = event.target.files[0];
  var reader = new FileReader();
  reader.onloadend = () => imageHolder.src = reader.result;
  if (file) {
    reader.readAsDataURL(file);
  } else {
    imageHolder.src = "";
  }
}

// event.preventDefault();

const span = document.querySelector('#addedtext');
const onChange = (event) =>
{
  const valeur = event.target.value;
  span.innerText = valeur.toUpperCase();

}

const list = document.querySelector('#list');
const clickajouter = () =>
{
  const valeur = document.querySelector('#text');
  const li = `<li> ${ valeur.value } </li>`;
  const li = "<li>" + valeur.value + "</li>"
  list.innerHTML += li;
} */


const list = [
  { id: "1", name: "ahmed", status: "vaccine" },
  { id: "2", name: "ahmed", status: "enregistre" },
  { id: "3", name: "ahmed", status: "vaccine" },
];
const abbi = () =>
{
  const listLoula = document.getElementById('list_vacc');
  const listthneya = document.getElementById('list_saved');
  listLoula.innerHTML = '';
  listthneya.innerHTML = '';
  list.forEach(personn =>
  {
    if (personn.status === "vaccine") {
      listLoula.innerHTML += `<li> 
      <div style="display:flex" >
      <p>${ personn.name }</p>
      <button onclick='supprimer("${ personn.id }")' >supprimer</button>
      </div> </li>`
    } else {
      listthneya.innerHTML += `<li> 
      <div style="display:flex" >
      <p>${ personn.name }</p>
      <button onclick='vacciner("${ personn.id }")' >effacer</button>
      </div> </li>`
    }
  })
}

const vacciner = (id) =>
{
  list.forEach(person =>
  {
    if (person.id === id) {
      person.status = "vaccine"
    }
  });
  abbi();
}

const ajout = () =>
{
  const esmJdid = document.getElementById('text').value;
  list.push({ id: list.length + 1, name: esmJdid, status: "enregistre" });
  abbi()
}

