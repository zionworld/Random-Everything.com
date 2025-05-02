const gender = document.getElementById("gender");
const nameTitle = document.getElementById("nameTitle");
const nameFirst = document.getElementById("nameFirst");
const nameLast = document.getElementById("nameLast");
const streetNumber = document.getElementById("streetNumber");
const streetName = document.getElementById("streetName");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const postalCode = document.getElementById("postalCode");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const offset = document.getElementById("offset");
const timezone = document.getElementById("timezone");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const homephone = document.getElementById("homephone");
const cellphone = document.getElementById("cellphone");

const button = document.getElementById("btn");
const url = "https://randomuser.me/api/";

let getuser = () => {
    fetch(url)
    .then(data=> data.json())
    .then(item=> {
        gender.textContent = `${item.results[0].gender}`;
        nameTitle.textContent = `${item.results[0].name.title}`;
        nameFirst.textContent = `${item.results[0].name.first}`;
        nameLast.textContent = `${item.results[0].name.last}`;
        streetNumber.textContent = `${item.results[0].location.street.number}`;
        streetName.textContent = `${item.results[0].location.street.name}`;
        city.textContent = `${item.results[0].location.city}`;
        state.textContent = `${item.results[0].location.state}`;
        country.textContent = `${item.results[0].location.country}`;
        postalCode.textContent = `${item.results[0].location.postcode}`;
        latitude.textContent = `${item.results[0].location.coordinates.latitude}`;
        longitude.textContent = `${item.results[0].location.coordinates.longitude}`;
        offset.textContent = `${item.results[0].location.timezone.offset}`;
        timezone.textContent = `${item.results[0].location.timezone.description}`;
        email.textContent = `${item.results[0].email}`;
        dob.textContent = `${item.results[0].dob.date}`;
        homephone.textContent = `${item.results[0].phone}`;
        cellphone.textContent = `${item.results[0].cell}`;
    })

}
button.addEventListener("click", getuser);

/*
function generateUserData(){
fetch('https://randomuser.me/api/')
    .then(res=> {
        return res.json();
    })
    .then(data=> {
        data.array.forEach(user => {
            const markup = '<li>${results[0].name.first}</li>';

            document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
        });
    })
    .catch(error=> console.log(error))

};

*/