function init() {    // called once the browser loads index.html

    canvas = document.getElementById('game_canvas');    // <canvas id="game_canvas"> in HTML
    ctx = canvas.getContext('2d');    // DOM method to access drawing functions

    var img = new Image();
    img.src = "pacman10-hp-sprite.png";    // relative URL - image must be in this folder
    
    img.onload = function() {       // wait until browser has loaded the image
                                    // before attempting to draw to the canvas

        // DRAW BOARD: size = 464px x 136px; coords = 322, 2
        ctx.drawImage(img, 322, 2, 464, 136, 0, 0, 464, 136);

        // DRAW MS. PACMAN: size = 16px x 16px; coords = 82, 22
        ctx.drawImage(img, 82, 22, 16, 16, 35, 30, 16, 16);
    }

}