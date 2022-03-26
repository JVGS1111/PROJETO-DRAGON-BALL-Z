
const botaoDragonBall = document.querySelector("#dragonBall");
const botaoGoku = document.querySelector("#goku");
const botaoVegeta = document.querySelector("#vegeta");
const botaoMajinBoo = document.querySelector("#majinBoo");
const cardContainer = document.querySelector(".cards-container");


botaoVegeta.addEventListener('click', () => {
    toggleToVegeta(cardContainer);
})

botaoGoku.addEventListener('click', () => {
    toggleToGoku(cardContainer);
})

botaoMajinBoo.addEventListener('click', () => {
    toggleToMajinBoo(cardContainer);
})

botaoDragonBall.addEventListener('click', () => {
    console.log('implementar')
})


function toggleToVegeta(element) {

    element.innerHTML = `
    <header class="card-header vegeta">
    <h2 class="planeta">Planeta Vegeta</h2>
    <div class="nome-classe">
        <div class="nome-classe-container">
            <h2 class="nome">Vegeta</h2>
            <h3 class="classe">Sayajin</h3>
        </div>
    </div>
    <img src="assets/vegeta.png" alt="goku">
    </header>
    <div class="card-info">
        <strong class="habilidades-titulo">Habilidades:</strong>
        <ul class="lista-habilidades">
            <li class="habilidades">força</li>
            <li class="habilidades">velocidade</li>
            <li class="habilidades">reflexos super humanos</li>
        </ul>
    </div>
    
    `
}


function toggleToGoku(element) {

    element.innerHTML = `
    <header class="card-header goku">
    <h2 class="planeta">Planeta Vegeta</h2>
    <div class="nome-classe">
        <div class="nome-classe-container">
            <h2 class="nome">Goku</h2>
            <h3 class="classe">Sayajin</h3>
        </div>
    </div>
    <img src="assets/goku.png" alt="goku">
    </header>
    <div class="card-info">
        <strong class="habilidades-titulo">Habilidades:</strong>
        <ul class="lista-habilidades">
            <li class="habilidades">força</li>
            <li class="habilidades">velocidade</li>
            <li class="habilidades">sentidos sobre-humanos</li>
            <li class="habilidades">resisténcia sobre-humanas</li>
        </ul>
    </div>
    
    `
}


function toggleToMajinBoo(element) {

    element.innerHTML = `
    <header class="card-header majinBoo">
    <h2 class="planeta">Criatura magica</h2>
    <div class="nome-classe">
        <div class="nome-classe-container">
            <h2 class="nome">Majin Boo</h2>
            <h3 class="classe">Majin</h3>
        </div>
    </div>
    <img src="assets/Buu.png" alt="goku">
    </header>
    <div class="card-info">
        <strong class="habilidades-titulo">Habilidades:</strong>
        <ul class="lista-habilidades">
            <li class="habilidades habilidades-majinboo">voo</li>
            <li class="habilidades habilidades-majinboo">telecinese</li>
            <li class="habilidades habilidades-majinboo">telepatia</li>
            <li class="habilidades habilidades-majinboo">transmutação</li>
            <li class="habilidades habilidades-majinboo">manipulação de matéria</li>
            <li class="habilidades habilidades-majinboo">teletransporte</li>
            <li class="habilidades habilidades-majinboo">regeneração</li>
        </ul>
    </div>
    
    `
}



