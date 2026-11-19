// Flip album cards with a tap (phones and tablets) or the keyboard.
// Mouse users get the hover flip from CSS.
var page = document.body;
var lastPointer = 'mouse';

// Remember whether the last tap/click came from a finger or a mouse.
// Once a finger is used, turn off the hover flip so taps are in control.
document.addEventListener('pointerdown', function (event) {
    lastPointer = event.pointerType;
    if (event.pointerType === 'touch') {
        page.classList.add('page--touch');
    }
});

document.querySelectorAll('.album').forEach(function (album) {
    album.addEventListener('click', function () {
        if (lastPointer === 'touch') {
            album.classList.toggle('album--flipped');
        }
    });

    album.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            album.classList.toggle('album--flipped');
        }
    });
});
