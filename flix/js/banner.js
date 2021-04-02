
export function addremoveBanner(elemn, dTitle){
    var elemnt = document.getElementById(elemn.id);
    elemnt.addEventListener("click", () =>{
      elemnt.parentNode.parentElement.remove()
      listadeFilmes.splice(listadeFilmes.indexOf(dTitle), 1);
      console.log(listadeFilmes)
    });
  }

export function makeBanner(dados) {
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