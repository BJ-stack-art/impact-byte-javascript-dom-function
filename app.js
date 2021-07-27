const rootElement = document.getElementById('root');
const styleSheet = document.querySelector('link[rel="stylesheet"]'); 



/* Set Action for anchor tag */
const anchors = document.querySelectorAll('a');

anchors.forEach(anchor => {
    anchor.addEventListener('click' , (e) => {
        e.preventDefault();
        let target = anchor.getAttribute('href');

        window.history.pushState(null, "" , target);
    })
})


const link = (target) => {
    window.history.pushState(null , "" , target);
}


/*====================== Login page ====================== */
// Helper Function
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
    let container = containerLogin();
    let form = formLogin(container);
    form = setTitleForm(form);
    form = setInputLogin(form);
    form = setBtnLogin(form);
    container.appendChild(form);
    
    styleSheet.setAttribute('href' , './style/login.css');
    rootElement.appendChild(container);

    
    /* create flor or program for login page */
    loginSubmitEvent();
}



/* ==================== End of Login =================== */









/* =================== Produk Page ====================== */
/* =================== Produk Page ====================== */









/* =================== System Code ===================== */

const routing = () => {
    let path = window.location.pathname;

    if(path === '/') {
        renderLogin();
    }
}

routing();

/* =================== End System Code ===================== */

















