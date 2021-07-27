const rootElement = document.getElementById('root');
const styleSheet = document.querySelector('link[rel="stylesheet"]'); 



/* ====  Helper Function for Global === */



/* Render element function */
const render = (element) => {
    rootElement.appendChild(element);
}

const link = (target) => {
    window.history.pushState(null , "" , target);
    routing();
}

const style = (file) => {
    styleSheet.setAttribute('href' , `./style/${file}`);
}

const title = (title) => {
    let tag = document.getElementsByTagName('title')[0];
    tag.textContent = title;
}


/* Set Action for anchor tag */
const eventAnchors = () => {
    const anchors = document.querySelectorAll('a');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click' , (e) => {
            e.preventDefault();
            let target = anchor.getAttribute('href');
            console.log('asddflkjkj');
            link(target);
        })
    })
}








/*====================== Login page ====================== */
// Helper Function for Login Page
const input = (id , name, placeholder, type = 'text') => {
    const input = document.createElement('input');
    input.setAttribute('id' , id);
    input.setAttribute('name' , name);
    input.setAttribute('placeholder' , placeholder);
    input.setAttribute('type' , type);

    return input;
}

const styleFormGroup = (clas) => {
    const component = document.createElement('div');
    const bgInner = document.createElement('div');

    component.setAttribute('class' , clas);
    bgInner.setAttribute('class' , 'bg-inner');
    component.appendChild(bgInner);

    return component;
}



// Main Function
const containerLogin = () => {
    const container = document.createElement('div');
    container.setAttribute('class' , 'login');

    return container;
}

const formLogin = (container) => {
    const form = document.createElement('form');
    form.setAttribute('class' , 'form');

    return form;
}

const setTitleForm = (form) => {
    const element = document.createElement('div');
    const h1 = document.createElement('h1');

    element.setAttribute('class' , 'control');
    h1.textContent = 'Sign In';

    element.appendChild(h1);
    form.appendChild(element);

    return form;
}

const styleInput = () => {
    const container = document.createElement('div');

    /* create component for styling */
    const bgTop = styleFormGroup('bg-top');
    const bgRight = styleFormGroup('bg-right');
    const bg = styleFormGroup('bg');
    

    /* append to container */
    container.appendChild(bgTop);
    container.appendChild(bgRight);
    container.appendChild(bg);
    
    return container;
}

const inputGroupLogin = (input) => {
    const group = document.createElement('div');
    group.setAttribute('class' , 'control block-cube block-input');
    group.appendChild(input);
    group.appendChild(styleInput());

    return group;
}


const setInputLogin = (form) => {
    /* create element input */
    let username = input('username' , 'username' , 'Username');
    let password = input('password' , 'password' , 'Password' , 'password');

    /* create input group */
    username = inputGroupLogin(username);
    password = inputGroupLogin(password);

    form.appendChild(username);
    form.appendChild(password);

    return form;
}

const setBtnLogin = (form) => {
    /* create button element */
    let button = document.createElement('button');
    button.setAttribute('id' , 'submit');
    button.setAttribute('class' , 'btn block-cube block-cube-hover');
    button.setAttribute('type' , 'button');

    /* create component styling */
    let bgTop = styleFormGroup('bg-top');
    let bgRight = styleFormGroup('bg-right');
    let bg = styleFormGroup('bg');
    
    let text = document.createElement('div');
    text.setAttribute('class' , 'text');
    text.textContent = 'Log in';

    /* append to button element */
    button.appendChild(bgTop);
    button.appendChild(bgRight);
    button.appendChild(bg   );
    button.appendChild(text);

    form.appendChild(button);

    return form;
}

const loginSubmitEvent = () => {
    /* get element button */
    const button = document.getElementById('submit');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const submitForm = () => {
        /* ambil data dari inputan */
        let user = username.value;
        let pass = password.value;
        let message = '';
    
        /* validasi */
        if(user && pass) {
            message = `
                Username : ${user}
                Password: ${pass}
            `
            alert(message);
            link('/produk');
        } else {
            message = `Data tidak valid!`;
            alert(message);
        }
    
    }

    button.addEventListener('click' , submitForm);
}



const renderLogin = () => {
    /* create head */
    title('Login');
    style('login.css');
    
    /* create body */
    let container = containerLogin();
    let form = formLogin(container);
    form = setTitleForm(form);
    form = setInputLogin(form);
    form = setBtnLogin(form);
    container.appendChild(form);
    
    render(container);

    
    /* create flor or program for login page */
    loginSubmitEvent();
}



/* ==================== End of Login =================== */









/* =================== Produk Page ====================== */
const navProduk = () => {
    const nav = document.createElement('nav');
    const link = document.createElement('a');
    
    link.setAttribute('class' , 'btnContact');
    link.setAttribute('href' , '/contact');
    link.textContent = 'Contact Us';
    nav.appendChild(link);

    render(nav);
}

const containerProduk = () => {
    const container = document.createElement('div');
    container.setAttribute('class' , 'container-produk');
    
    return container;
}

const createCard = (clas) => {
    const div = document.createElement('div');
    div.setAttribute('class' , `card ${clas}`);

    return div;
}

const setThumbnailProduk = (card , src) => {
    let thumbnail = document.createElement('img');
    thumbnail.setAttribute('src' , `./image/${src}`);
    thumbnail.setAttribute('alt' , 'Avatar');
    thumbnail.setAttribute('style' , 'width: 100%; height: 400px');

    card.appendChild(thumbnail);
}

const setContentProduk = (card , name , description) => {
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const b = document.createElement('b');
    const p = document.createElement('p');

    container.setAttribute('class' , 'container');
    b.textContent = name;
    p.textContent = description;

    h1.appendChild(b);
    container.appendChild(h1);
    container.appendChild(p);
    card.appendChild(container);
}

const setCardProduk = (container) => {
    /* create card for produk */
    const card1 = createCard('card1');
    const card2 = createCard('card2');
    const card3 = createCard('card3');

    /* set thumbnail */
    setThumbnailProduk(card1 , 'produk1.jpg');
    setThumbnailProduk(card2 , 'produk2.jpg');
    setThumbnailProduk(card3 , 'produk3.jpg');

    /* set content produk */
    setContentProduk(card1 , 'Produk 1' , 'Sepatu Nike blabla');
    setContentProduk(card2 , 'Produk 2' , 'Sepatu apa blabla');
    setContentProduk(card3 , 'Produk 3' , 'Sepatu Air Jordan');

    /* append to container produk */
    container.appendChild(card1);
    container.appendChild(card2);
    container.appendChild(card3);
}

const createModal = () => {
    /* create element */
    const modal = document.createElement('div');
    const button = document.createElement('button');
    const h1 = document.createElement('h1');
    const message = document.createElement('p');
    const description = document.createElement('p');

    /* set class*/
    modal.setAttribute('class' , 'modal hidden')
    button.setAttribute('class' , 'close-modal')
    message.setAttribute('class' , 'message')

    /* set content */
    button.innerHTML = '&times;';
    h1.textContent = 'Thank you for shipping 😍';
    description.textContent = 'cie sepatu baru 😁😂😉';

    /* append each element */
    modal.appendChild(button);
    modal.appendChild(h1);
    modal.appendChild(message);
    modal.appendChild(description);
    
    render(modal);
}

const overlay = () => {
    const element = document.createElement('div');
    element.setAttribute('class' , 'overlay hidden');

    render(element);
}


const scriptProdukPage = () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.close-modal');
    const btnsOpenModal1 = document.querySelector('.card1');
    const btnsOpenModal2 = document.querySelector('.card2');
    const btnsOpenModal3 = document.querySelector('.card3');

    const closeModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    btnsOpenModal1.addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.querySelector('.message').textContent =
            'Anda telah membeli Produk 1 : Sepatu Nike blabla';
        });
        btnsOpenModal2.addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.querySelector('.message').textContent =
            'Anda telah membeli Produk 2 : Sepatu apa blabla';
        });
        btnsOpenModal3.addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.querySelector('.message').textContent =
            'Anda telah membeli Produk 3 : Sepatu Air Jordan';
        });

        btnCloseModal.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}


const renderProdukPage = () => {
    /* set heading */
    title('Catalog Produk');
    style('produk.css');
    
    
    /* set body */
    navProduk();
    let container = containerProduk();
    setCardProduk(container);
    createModal();
    overlay();
    
    render(container);

    scriptProdukPage();
}

/* =================== End of Produk Page ====================== */












/* ================ Contact Page ======================= */
const renderContactPage = () => {
    rootElement.textContent('Contact Page');
}
/* ================ End of Contact Page ======================= */













/* =================== System Code ===================== */

function routing() {
    let path = window.location.pathname;
    rootElement.innerHTML = '';
    
    if(path === '/') {
        renderLogin();
    } else if(path === '/produk') {
        renderProdukPage();
    }

    eventAnchors();
}
routing();


window.addEventListener('popstate' , () => {
    console.log('change page');
    routing();
})

/* =================== End System Code ===================== */

















