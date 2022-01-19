

const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = 'yNfbyvgxJyEZ1EegYtK7nyLWdn7Hwhsc8sEtRtXA';


const fetchNASAData = async () => {
    try {
      const response = await fetch(`${url}${api_key}`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      displayData(data)
    } 
    catch (error) {
      console.log(error)
    }
  }
  
  const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation
    document.getElementById('copyright').textContent = data.copyright;
  }
  
  fetchNASAData();


  

  // create the like button

  var btn = document.getElementById('btn');
  btn.addEventListener("click", function(){
    if (btn.classList.contains("far")) {
        btn.classList.remove("far")
        btn.classList.add("fas")
    } else {
        btn.classList.remove("fas")
        btn.classList.add("far")
    }
})




