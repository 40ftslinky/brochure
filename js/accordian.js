// accordian.js
document.addEventListener('DOMContentLoaded', () => {
    const firstItem = document.querySelector('.accordian-menu-item:first-of-type');
    if (firstItem) {
        firstItem.classList.add('selected');
        const menu = firstItem.getAttribute('data-menu');
        document.querySelectorAll('.accordian-item').forEach(content => {
            if (content.getAttribute('data-item') === menu) {
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
            }
        });
    }
});

document.querySelectorAll('.accordian-menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.accordian-menu-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        const menu = item.getAttribute('data-menu');
        document.querySelectorAll('.accordian-item').forEach(content => {
            if (content.getAttribute('data-item') === menu) {
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
            }
        });
    });

    item.addEventListener('mouseover', () => {
        document.querySelectorAll('.accordian-menu-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('hovered-over');
        const menu = item.getAttribute('data-menu');
        document.querySelectorAll('.accordian-item').forEach(content => {
            if (content.getAttribute('data-item') === menu) {
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
            }
        });
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered-over');
        const menu = item.getAttribute('data-menu');
        document.querySelectorAll('.accordian-item').forEach(content => {
            if (content.getAttribute('data-item') === menu && !item.classList.contains('selected') && !content.classList.contains('visible')) {
                content.classList.remove('visible');
            }
        });
    });
});

