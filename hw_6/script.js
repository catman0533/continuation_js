const newdata = JSON.parse(data);
console.log(newdata);

/*метод parse преобразует из строки в js объект
JSON.parse присваеиваем переменной результат работы этого метода*/
const divcontentelement = document.querySelector('.content');
newdata.forEach(element => {
    divcontentelement.insertAdjacentHTML('beforeend', `
        <div class="wraper">
            <img src="${element.img}" alt="${element.name}">
            <h2>${element.name}</h2>
            <h3>${element.discription}</h3>
            <p>${element.price}</p>
            
        </div>
    `);
});