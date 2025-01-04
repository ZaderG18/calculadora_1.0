let buttons = document.querySelector(".buttons");
let btns = document.querySelectorAll("span");
let value = document.querySelector("#value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

// Alternância de Tema
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark"); // Adicione um estilo de tema escuro no CSS
});

// Lógica da Calculadora
btns.forEach(btn => {
    btn.addEventListener("click", function () {
        const buttonText = this.innerHTML;

        if (buttonText === "=") {
            try {
                // Avalia a expressão no campo de valor (evite `eval` em produção)
                const result = Function(`'use strict'; return (${value.innerHTML})`)();
                value.innerHTML = result;
            } catch (error) {
                value.innerHTML = "Erro";
            }
        } else if (buttonText.toLowerCase() === "limpar") {
            value.innerHTML = ""; // Limpa o campo de valor
        } else {
            if (value.innerHTML === "Erro") value.innerHTML = ""; // Reseta após erro
            value.innerHTML += buttonText; // Adiciona o valor clicado
        }
    });
});
