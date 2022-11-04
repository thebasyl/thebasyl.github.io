let width = 40;
let height = 20;

function wait(ms)
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve();
        }, ms)
    })
}

const squaresDiv = document.getElementById('squares');
let squares = [];

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    width = 10;
    height = 20;

    for(let i = 0; i < width * height; i++)
    {
        const square = document.createElement('div');
        square.classList.add('square-mobile');
        squaresDiv.append(square);
        squares.push(square);
    }
} else 
{
    for(let i = 0; i < width * height; i++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        squaresDiv.append(square);
        squares.push(square);

        square.addEventListener('mouseenter', async() => 
        {
            square.style = `background-color: #${ ((1 << 24) * Math.random() | 0).toString(16) }`;
            await wait(300);
            square.style = "background-color: #000";
        });
    }
}

const menu_items = document.getElementsByClassName('menu-item');
for(let menu_item of menu_items)
{
    menu_item.addEventListener('mouseover', () => 
    {
        menu_item.style = `background-color: ${ menu_item.dataset.colour }`;
    });
    
    menu_item.addEventListener('mouseleave', () => 
    {
        menu_item.style = "";
    });
}

function basil()
{
    alert("oops! that page doesnt exist, yet. More information about Basil coming soon.\n- Noel Nimstad")
}

function UCG()
{
    alert("oops! that page doesnt exist, yet. More information about Untitled Card Game is coming soon.\n- Noel Nimstad")
}

async function ColourSquare()
{
    const square = squares[Math.floor(Math.random() * squares.length)];
    square.style = `background-color: #${ ((1 << 24) * Math.random() | 0).toString(16) }`;
    await wait(300);
    square.style = "background-color: #000";
}

async function RandomSquareEffect()
{
    ColourSquare();
    await wait(700);
    RandomSquareEffect();
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    (async() => 
    {
        RandomSquareEffect();
        await wait(300);
        RandomSquareEffect();
    })();
}