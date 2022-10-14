var after=''

function fetchMemes(){
    colorChange()
    const subs = ['dankmemes','memes','IndianDankMemes']
    const catg = ['new','hot','top']
    let rancatg = catg[Math.floor(Math.random()*3)];
    let parentdiv=document.createElement('div')
    let ran = subs[Math.floor(Math.random()*3)];
    console.log(ran);
    parentdiv.id='memes'
    fetch(`https://www.reddit.com/r/${ran}/${rancatg}.json`)
    .then(response => response.json())
    .then(body=>{
        for(let index=0;index<body.data.children.length;index++){
            if(body.data.children[index].data.post_hint==='image'){
                let div=document.createElement('div')
                let h4=document.createElement('h4')
                let image=document.createElement('img')
                image.src=body.data.children[index].data.url_overridden_by_dest
                h4.textContent=body.data.children[index].data.title
                div.appendChild(h4)
                div.appendChild(image)
                parentdiv.appendChild(div)
            }
        }
        console.log('hi')
        document.body.appendChild(parentdiv)
    })
}