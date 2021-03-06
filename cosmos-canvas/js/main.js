//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=czJFA2fL8CaiP9a8aN8nRq2jC4eDTpi1hbfIP1a6&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image'){
          document.querySelector('.img').src = data.hdurl
          document.querySelector('p').innerText = data.explanation
        }else if( data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('p').innerText = data.explanation
        }
         
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

