const share = document.querySelector('.share');
const div = document.querySelector('div.invisible');
const user = document.querySelector('div.user');
const shareBack = document.querySelector('div.dark-share')


share.addEventListener('click', () => {
    if (screen.width >= 1036) {
        div.style.display = ((div.style.display != 'none') ? 'none' : 'grid');
    } else {
        user.style.display = ((user.style.display != 'grid') ? 'grid' : 'none');
        div.style.display = ((div.style.display != 'none') ? 'none' : 'grid');

    }
})


shareBack.addEventListener('click', () => {
    div.style.display = ((div.style.display != 'grid') ? 'grid' : 'none');
    user.style.display = ((user.style.display != 'none') ? 'none' : 'grid');
})
