const indexContainer = document.querySelector(".container");
fetch("https://671e10531dfc429919812c1d.mockapi.io/api/Index/indexs", {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then((indexs) => {
    // Do something with the list of tasks
    console.log(indexs)
    for (let i = 0; i < indexs.length; i++); {
        const indexElement = document.createElement("div");
        indexElement.innerHTML = `
            <p class="red">${indexs[i].title}</p>
            <img sre=${indexs[i].image}/>
        `;
        indexContainer.appendChild(indexElement);
    }
}).catch(error => {
    // handle error
})