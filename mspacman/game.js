function init() {
    canvas = document.getElementById('game_canvas');
    ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = "pacman10-hp-sprite.png";
    img.onload = function() {
        // DRAW BOARD: size = 464px x 136px; coords = 322, 2
        ctx.drawImage(img, 322, 2, 464, 136, 0, 0, 464, 136);

        // DRAW MS. PACMAN: size = 16px x 16px; coords = 82, 22
        ctx.drawImage(img, 82, 22, 16, 16, 35, 30, 16, 16);
    }
}