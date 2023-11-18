//1 uzduotis
//lentele atvaizduoja tik tada, kai gaunami filmo duomenys
//jeigu filmas nerastas, vietoj lenteles isvedame klaidos response ir api

document.querySelector('form').addEventListener('submit',(e)=>{   
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?t=${document.querySelector('input').value}&apikey=18c1a865`)
    .then((response)=>data= response.json())
    .then ((data)=>{
        console.log(data)
        if(data.Title){
            showMovie(data);
        }else{
            showError(data);
        }
    })
});

const showMovie = (data)=>{
document.querySelector('.title').textContent=data.Title;
document.querySelector('.time').textContent=data.Runtime;
document.querySelector('.director').textContent=data.Director;
document.querySelector('.year').textContent=data.Year;
document.querySelector('.imdb').textContent=data.Title;
document.querySelector('.other').textContent=data.Plot;
document.querySelector('.image').innerHTML = `<img src="${data.Poster}">`;
};

const showError = (data)=>{
    document.querySelector('table').style.display='none';
    document.querySelector('.alert').style.display='block';
    document.querySelector('.alert-danger').textContent=data.Error;
};

// 2 uzduotis
//sukurti su js datalist, kuriame butu visos lietuvos vietoves
//duomenys yra cia: https://api.meteo.lt/v1/place

function createOption(){
    fetch("https://strangerthings-quotes.vercel.app/api/quotes/50")
    .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < data.length; i++){
            const dataList = document.querySelector('#quotes');
            const optionElement = document.createElement("option");
            optionElement.innerHTML = data[i].author;
            dataList.appendChild(optionElement);
        }
    })
}

createOption();

