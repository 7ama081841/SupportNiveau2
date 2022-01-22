let list = [
  { id: "1", name: "ahmed", status: "vacc" },
  { id: "2", name: "ahmed2", status: "enreg" },
  { id: "3", name: "ahmed3", status: "enreg" },
];
const list_vacc = document.getElementById("list_vacc");
const list_saved = document.getElementById("list_saved");
const abbi = () =>
{
  list_saved.innerHTML = '';
  list_vacc.innerHTML = '';
  list.forEach(({ name, status, id }) =>
  {
    if (status === "enreg") {
      const li = ` <li>
      <div style='display:flex' >
      <p>${ name }</p>
      <button onclick="vaccinPerson('${ id }')" >vaccine</button>
      </div></li> `
      list_saved.innerHTML += li;

    } else {
      const li = ` <li>
      <div style='display:flex' >
      <p>${ name }</p>
      <button onclick="supprime('${ id }')" >supprimer</button>
      </div></li> `
      list_vacc.innerHTML += li;

    }
  })
}
const valueText = document.getElementById('text');
const ajout = () =>
{
  const personName = valueText.value;
  const generatedID = Date.now();
  const newPersonn = {
    name: personName,
    id: generatedID,
    status: 'enreg'
  }
  list.push(newPersonn);
  abbi()
};

const vaccinPerson = (idPerson) =>
{
  console.log({ idPerson });
  list.forEach(element =>
  {
    if (element.id == idPerson) {
      element.status = "vacc"
    }
  })
  abbi()
};

const supprime = (idd) =>
{
  list = list.filter(({ id }) => !(id == idd));
  abbi()
}
