const buttons = document.getElementsByClassName('details-btn');
const contentToToggle = document.getElementsByClassName('more-content');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (contentToToggle[i].classList.contains('show-content')) {
            buttons[i].innerHTML = 'View More Details <i class="fas fa-angle-double-down icon">';
            contentToToggle[i].classList.remove('show-content');
        } else {
            buttons[i].innerHTML = 'Hide Details <i class="fas fa-angle-double-up icon">';
            contentToToggle[i].classList.add('show-content');
        }
    });
}
