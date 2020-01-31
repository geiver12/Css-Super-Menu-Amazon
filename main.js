const btndepartments = document.getElementById('btn-departments'),
    grid = document.getElementById('grid'),
    btnclosemenu = document.getElementById('btn-menu-close'),
    contentsubcategories = document.querySelector('#grid .content-subcategories'),
    contentlinksnav = document.querySelector('#menu .content-links-nav'),
    DeviceMobile = () => window.innerWidth <= 800;


btndepartments.addEventListener('mouseover', () => {
    if (!DeviceMobile())
        grid.classList.add('active');
});

grid.addEventListener('mouseleave', () => {
    if (!DeviceMobile()) {}
    grid.classList.remove('active');
});

document.querySelectorAll('#menu .categories a').forEach((element) => {
    element.addEventListener('mouseenter', (e) => {
        if (!DeviceMobile()) {
            document.querySelectorAll('#menu .subcategorie').forEach((categorie) => {
                categorie.classList.remove('active');
                if (categorie.dataset.categorie == e.target.dataset.categorie)
                    categorie.classList.add('active');
            });
        };
    });
});


//Listener device mobile

document.querySelector('#btn-menu-bars').addEventListener('click', (e) => {
    e.preventDefault();
    if (contentlinksnav.classList.contains('active')) {
        contentlinksnav.classList.remove('active');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        contentlinksnav.classList.add('active');
        document.querySelector('body').style.overflow = 'hidden';
    }
});

//all departments

btndepartments.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('active');
    btnclosemenu.classList.add('active');
});

document.querySelector('#grid .categories .btn-back').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('active');
    btnclosemenu.classList.remove('active');
});

document.querySelectorAll('#menu .categories a').forEach((element) => {
    element.addEventListener('click', (e) => {
        if (DeviceMobile()) {
            contentsubcategories.classList.add('active');
            document.querySelectorAll('#menu .subcategorie').forEach((categorie) => {
                categorie.classList.remove('active');
                if (categorie.dataset.categorie == e.target.dataset.categorie) {
                    categorie.classList.add('active');
                }
            });
        }
    });
});

document.querySelectorAll('#grid .content-subcategories .btn-back').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        contentsubcategories.classList.remove('active');
    });
});

btnclosemenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .active').forEach((element) => {
        element.classList.remove('active');
    });
    document.querySelector('body').style.overflow = 'visible';
});