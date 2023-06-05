const container = document.querySelector('#image-container');
const numberImages = document.querySelector('.number');
const tryBtn = document.querySelector('.try');

async function start() {
    container.innerHTML = "";
    const url = 'https://ai_image-database.p.rapidapi.com/images/midjourney';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '69fbee8a31mshaf27c027e0536edp1fa609jsnbb7693b550cf',
            'X-RapidAPI-Host': 'ai_image-database.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then((response) => response.json())
        .then(response =>{
            let limit = numberImages.value;
            for(let i=0; i < limit; i++){
                    const img = document.createElement('img');
                    link = response[i].smallImage;
                    img.src = link;
                    container.appendChild(img);
            }
            
        })
        .catch((error) => console.error(error));
}

tryBtn.addEventListener('click', start);


