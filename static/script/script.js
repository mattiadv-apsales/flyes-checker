let first_select = document.getElementById('first')
let second_select = document.getElementById('second')

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://api.dedolist.com/api/v1/locations/airports/")
    .then(res => res.json())
    .then(data => {
        data.forEach(aeroport => {
            first_select.innerHTML += `<option value="${aeroport.city}">${aeroport.city}</option>`;
        });
    });
})