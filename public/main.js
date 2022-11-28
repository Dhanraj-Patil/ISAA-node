const search=document.querySelector('.search-btn')
const searchVal=document.querySelector('.box')
const dataContainer=document.querySelector('.crawl-data')

// const root = ReactDOM.createRoot(domContainer);

search.addEventListener('click',()=>{
    var query=searchVal.value
    console.log(query)

    if(query!=''){
        var data={
            category: query
        }
        fetch('http://localhost:7000/domain',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((data) => {
            console.log('Success:', data);
            for( i in data){
                const domContainer = document.createElement('div');
                domContainer.id='tab'
                domContainer.innerHTML=data[i].link
                domContainer.addEventListener('click',()=>{
                    action(domContainer.innerHTML)
                })
                dataContainer.appendChild(domContainer)
                // getLink(data[i].link)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
})

var action=function(link){
    console.log(link)
    var data={
        'link': link
    }

    fetch(`http://localhost:7000/crawl/${link}`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(response=>response.json())
    .then(data=>{
        var domContainer=document.querySelectorAll('#tab')
        domContainer.forEach(function(i){
            i.remove()
        })
        for(i in data){
            console.log(data[i].link)
            const subData=document.createElement('div')
            subData.id='tab'
            subData.innerHTML=data[i].link
            dataContainer.appendChild(subData)
        }
        console.log(data)
    })
}