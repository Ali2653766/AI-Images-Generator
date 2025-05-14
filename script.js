const api = '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';
const input = document.querySelector('#inp');
const images = document.querySelector('.images');
const button = document.querySelector('#btn');


button.addEventListener('click' ,async () => {
    //request OpenAI API
    const res = await fetch('https://api.openai.com/v1/images/generations',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api}`
        },
        body: JSON.stringify({
            model: 'gpt-image-1',
            response_format: 'b64_json',
            prompt: input.value,
            n: 4,
            size: "1024x1024"
        })
    });
    // parse the responce as json
    const data = await res.json();
    
    console.log(data);
});
