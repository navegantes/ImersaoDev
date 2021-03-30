
var listadeFilmes = []

var input = document.querySelector("#inpt");
input.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function buscarFilme(url) {
    fetch(url)
      .then(data => {
        if (!data.ok) { alert("ERRO NA REDE"); }
        return data.json();
      })
      .then(dado => addAoCatalogo(dado))
}

// click butao
function adicionarFilme(){
  var title = document.querySelector('#inpt').value
  const apikey = "627ad0ee"
  const url = "https://omdbapi.com/?apikey="
               + apikey + "&t=" + title.replace(/ /, "+");
  buscarFilme(url)
}

function addAoCatalogo(dados) {
  //console.log(dados)
  if(dados.Response === "True"){
    //verifica se o filme já está na lista
    if(listadeFilmes.indexOf(dados.Title) >= 0){
      alert("FILME JÁ ADICIONADO")
    }else{
      makeBanner(dados)
      listadeFilmes.push(dados.Title)              //Adiciona filme na lista
      document.querySelector('#inpt').value = ""  //limpa campo input
    }
  }else{ alert("FILME NÃO ENCONTRADO") }
  
  var lista = document.querySelector("#listaFilmes").children
  console.log(lista)
  console.log(listadeFilmes)
}

var makeBanner = (dados) => {
  var listaFilmes = document.querySelector('#listaFilmes')
  var listalen = listaFilmes.children.length
  
  var banner = document.createElement('div')
  banner.classList.add('banner')

  var bTitle = document.createElement('div')
  bTitle.classList.add('btitle')

  var rmvBtn = document.createElement('div')
  rmvBtn.classList.add('rmv-btn')
  rmvBtn.id = "cls-btn-" + listalen
  rmvBtn.innerHTML = "X"

  var poster = document.createElement('div')
  poster.classList.add('poster')

  var imgPoster = document.createElement('img')
  imgPoster.src = dados.Poster

  var mvTitle =  document.createElement('div')
  mvTitle.classList.add("mv-title")
  mvTitle.innerHTML = dados.Title
  
  bTitle.appendChild(mvTitle)
  bTitle.appendChild(rmvBtn)
  banner.appendChild(bTitle)
  poster.appendChild(imgPoster)
  banner.appendChild(poster)
  listaFilmes.appendChild(banner)
  
  rmvBtn.onclick = addremoveBanner(rmvBtn, dados.Title)
}

function addremoveBanner(elemn, dTitle){
  var elemnt = document.getElementById(elemn.id);
  elemnt.addEventListener("click", () =>{
    elemnt.parentNode.parentElement.remove()
    listadeFilmes.splice(listadeFilmes.indexOf(dTitle), 1);
    console.log(listadeFilmes)
  });
}

title = 'Alien'
var url = "https://omdbapi.com/?apikey=627ad0ee&t=" + title;
buscarFilme(url)

//title = 'Batman'
//var url = "https://omdbapi.com/?apikey=627ad0ee&t=" + title;
//buscarFilme(url)
