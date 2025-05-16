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


    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${api}` );
    
    
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

    
    fetch(url, requestOptions)
        .then(response => response.blob())
        .then(blob =>{
            const imageUrl = URL.createObjectURL(blob)
            image.src = imageUrl
        })
        .catch(error => {
            alert('An Error!')
            console.log('error', error)
        })
        .finally(() => {
            setLoadingState(false);
        })
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

function downloadImage(){
    const imageUrl = image.src;

    if(!imageUrl){
        alert('The Url is Empty');
        return;
    }

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'ai-generated-image.jpg'

    link.click();

}