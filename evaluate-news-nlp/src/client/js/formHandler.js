function handleSubmit(event) {
    event.preventDefault()
    
    const apiUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
    // check what text was put into the form field
    const inputUrl = document.getElementById('url').value
    if (Client.validateUrl(inputUrl)) {
        Client.getKey()
        .then(function(key){
            
        Client.checkText(apiUrl, key.key, inputUrl)
        
        .then(function(data){
            const confidence = data.confidence;
            console.log("Confidence: ",confidence)
            const subjectivity = data.subjectivity;
            console.log("Subjectivity :", subjectivity)
            const score_tag = data.score_tag;
            console.log("Score :" , score_tag)
            
            // Update UI
            document.getElementById('result').innerHTML=`Confidence of the analysis: ${confidence}`;
            document.getElementById('objectivity').innerHTML=`Subjectivity: ${subjectivity}`;
            document.getElementById('score').innerHTML=`Polarity Score: ${score_tag}`;
            
            
            })})
            .then(
                document.getElementById('submit').addEventListener('click', changeUI)
            )
        } else {
            console.log('Please enter a valid url');
            alert('Please enter a valid url')
         }
    };
    
        
        /* Function to GET  API Data*/
        const checkText = async (apiUrl, apiKey, inputUrl) => {
            
            // fetch api
            const response = await fetch(`${apiUrl}${apiKey}&lang=auto&url=${inputUrl}`)
            try {
                const textData = await response.json();   
                return textData;
            } catch(error){
                console.log('error', error);
         }
        }
        
        const getKey = async () => {
            const request = await fetch('http://localhost:8081/all');
            try {
                const apiKey = await request.json();
                return apiKey
            } catch(error){
                console.log('error', error)
                }}
        
        const changeUI = () => {
            document.getElementById('url').value = '';
        }
                
export { handleSubmit }
export { checkText }
export { getKey }
export { changeUI }