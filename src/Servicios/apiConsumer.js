export const fetchData = (API, options, onSucess, onFail) =>
    fetch(API, options).then(response =>{
        if(response.status.toString().startsWith("20")){
            return response.json().then(onSucess)
        }else{
            return response.json().then(onFail)
        }
    }).catch(onFail)
    
