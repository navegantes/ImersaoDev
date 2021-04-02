
function adicionarFilme(){
    var date = document.querySelector('#apod').value
    var apikey = "AuRaglmJ0Tt9qxuXZbvx6xTtOANRMRX4QNNQinbn"
    var url = "http://api.nasa.gov/planetary/apod?api_key="+ apikey +"&date="+ date
    
    // fetch(url)
    //   .then((resp) => {
    //       if (!resp.ok) { alert("ERRO NA REDE") }
    //       return resp.json() })
    //   .then(data => { genResult(data) })
    buscarDados(url)
    console.log(url)
  }

function buscarDados(url) {
  fetch(url)
    .then(data => {
      if (!data.ok) { alert("ERRO NA REDE"); }
      return data.json();
    })
    .then(dado => genResult(data))
}
  
  function genResult(data){
    var mdcontent = document.createElement('div')
    mdcontent.classList.add('media')
    
    if(data.media_type==="image"){
      var media = document.createElement('img')
    }else if(data.media_type==="video"){
      var media = document.createElement('iframe')
      media.style.width = "960px"
      media.style.height = "480px"
      //media.innerHTML = "<iframe id='ytframe' width="560" height="315" src='" + data.url +"' ></iframe>";
    }
      media.classList.add('media-img')
      media.src = data.url
      mdcontent.appendChild(media)
      
      var title = document.createElement('h2')
      title.innerHTML = data.title
      var h3 = document.createElement('h3')
      h3.innerHTML = data.date
      var view = document.createElement('div')
      view.classList.add('view')
      view.appendChild(mdcontent)
      view.appendChild(title)
      view.appendChild(h3)
    
      var inftext = document.createElement('p')
      inftext.classList.add('info')
      inftext.innerHTML = data.explanation
      view.appendChild(inftext)
      //resp.appendChild(data.title)
      console.log(data.title)
      
      var lstFilme = document.getElementById("listaFilmes");
      lstFilme.appendChild(view)
      //console.log(view)
  }