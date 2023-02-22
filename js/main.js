let click = document.querySelector('.var-a'),
    runner = document.querySelector('.button');

function run() {
    click.addEventListener('click', (event) => {
        if (event.target.classList.contains('var-a')) {
            alert(' I KNEW IT ! <3')
        } else {
            console.log('blya');
        }

    })
}
console.log(run());

$(function() {
    $("button").on({
        mouseover: function() {
            $(this).css({
                left: (Math.random() * 300) + "px",
                top: (Math.random() * 400) + "px",
            });
        }
    });
});