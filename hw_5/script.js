const newdata = JSON.parse(data);
console.log(newdata);

const divcontentelement = document.querySelector('.content');
newdata.forEach(element => {
    divcontentelement.insertAdjacentHTML('beforeend', `
        <div class="wraper">
            <h2>${element.id}</h2>
            <h3>${element.title}</h3>
            <p>${element.url}</p>
            <p>${element.address}</p>
            <a href="tel:+${element.phone}">${element.phone}</a>
        </div>
    `);
});
