/*  === DATA === */
const card = (title, picture, explanation) => `
    <div class="card">
        <img class="img" src="${picture}"></img>
        <input type="date" id="date">
        <button id="btn">Click me!</button>
        <h3 class="title" >${title}</h3>
        <p class="explanation">${explanation}</p>
    </div>
    `; 

/*  === FUNCTIONS === */
const loadEvent = async _ => {

    const root = document.getElementById("root")
    
    const apiKey = "drhKkWW4Iw5NWvu5elYalz9V0ylwRzBd408oWOWa"

    let apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);    
    let apodJson = await apod.json();
    console.log(apod)

    const title = `${apodJson.title}`;
    const picture = `${apodJson.url}`;
    const explanation = `${apodJson.explanation}`;

    root.innerHTML = card(title, picture, explanation)
    let day = [];
    
    // === BUTTON CARDCHANGE   
    document.getElementById("btn").addEventListener("click", () => {
        console.log("Clicked") 
        let day = document.getElementById("date").value;

        apod = fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${day}`);    
        root.innerHTML = card(title, picture, explanation)
        console.log(day)
    });
}
window.addEventListener("load", loadEvent);
