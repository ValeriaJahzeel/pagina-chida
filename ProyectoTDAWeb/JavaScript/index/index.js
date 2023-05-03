const tool = document.querySelector('.tool');

const tools = document.querySelectorAll('.tool-div');

tools.forEach((popup) =>{
    popup.addEventListener("mouseover", () =>{
        const img = popup.querySelector('img');
        img.style.width = '100%';
        img.style.float = 'left';
        popup.addEventListener("mouseout", () =>{
            img.style.width = '90%';
        });
    });
});

