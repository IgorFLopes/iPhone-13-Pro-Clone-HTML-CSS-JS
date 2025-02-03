// Primeiro precisamos selecionar os elementos! 

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Agora preciso adicionar um evento para cada um dos botões.
// Vou criar um loop para cada um deles.

buttons.forEach((btn) => {
//  O método addEventListener é usado em JavaScript para adicionar um manipulador de eventos a um elemento HTML. Isso permite que você execute uma função específica quando um evento ocorre nesse elemento, como um clique, uma tecla pressionada ou a passagem do mouse.
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        })

        const button = e.target

        const id = button.getAttribute("id")

        button.querySelector(".color").classList.add("selected")

        image.classList.add("changing")
        image.setAttribute("src", `img/iphone_${id}.jpg`)

        setTimeout(() => {

            image.classList.toggle("changing")

        }, 200)
    })
})




