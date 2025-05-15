const api = 'vk-dHhIgyBoL6FucspVDbMSoy22ZrVeBBPgt8GpB3g4p1cy2il';
const url = 'https://api.vyro.ai/v2/image/generations';

const image = document.querySelector('.img-result');
const imageContainer = document.getElementById('imageContainer')

function generateImage(){
    const prompt = document.getElementById('prompt').value;
    const style = document.getElementById('dropdownStyle').value;
    const ratio = document.getElementById('dropdownRatio').value;
    
    if(!prompt){
        alert('You have to write prompt');
        return;
    }

    setLoadingState(true);

    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('style', style);
    formData.append('aspect_ratio', ratio);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${api}` );

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function setLoadingState(isLoading){
    if(isLoading){
        image.style.display = 'none';
        imageContainer.classList.add('loading');
    } else{
        image.style.display = 'block';
        imageContainer.classList.remove('loading');
    }

}