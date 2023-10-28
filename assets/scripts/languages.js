const langEl = document.querySelector(".languageButton");
const link = document.querySelectorAll(".languageButton a");
const createAccountEl = document.querySelector(".createAccount");
const orUseEmailRegisterEl = document.querySelector(".orUseEmailRegister");
const nameEl = document.querySelector(".name");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");
const signUpEl = document.querySelector(".singUp"); // Correção do nome da variável
const orUseEmailPassEl = document.querySelector(".orUseEmailPass");
const forgetEl = document.querySelector(".forget");
const signInEl = document.querySelector(".signIn");
const welcomeEl = document.querySelector(".welcome");
const enterPersonalEl = document.querySelector(".enterPersonal"); // Correção do nome da variável
const hiddenEl = document.querySelector("#login"); // Correção do ID do botão de login
const helloEl = document.querySelector("#hello"); // Correção do ID do elemento
const registerWithEl = document.querySelector("#registerWith"); // Correção do ID do elemento
const registerEl = document.querySelector("#register"); // Correção do ID do botão de registro

link.forEach((el) => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    createAccountEl.textContent = data[attr].createAccount;
    orUseEmailRegisterEl.textContent = data[attr].orUseEmailRegister;
    nameEl.textContent = data[attr].name;
    emailEl.textContent = data[attr].email;
    passwordEl.textContent = data[attr].password;
    signUpEl.textContent = data[attr].signUp;
    orUseEmailPassEl.textContent = data[attr].orUseEmailPass;
    forgetEl.textContent = data[attr].forget;
    signInEl.textContent = data[attr].signIn;
    welcomeEl.textContent = data[attr].welcome;
    enterPersonalEl.textContent = data[attr].enterPersonal; // Correção do nome da variável
    hiddenEl.textContent = data[attr].hidden;
    helloEl.textContent = data[attr].hello; // Correção do ID do elemento
    registerWithEl.textContent = data[attr].registerWith; // Correção do ID do elemento
    registerEl.textContent = data[attr].register; // Correção do ID do botão de registro
  });
});

const data = {
  english: {
    createAccount: "Create Account",
    orUseEmailRegister: "or use your email for registration",
    name: "Name",
    email: "Email",
    password: "Password",
    signUp: "Sign Up",
    orUseEmailPass: "or use your email password",
    forget: "Forget Your Password?",
    signIn: "Sign In",
    welcome: "Welcome Back!",
    enterPersonal: "Enter your personal details to use all site features",
    hidden: "Sign In",
    hello: "Hello, Friend!",
    registerWith: "Register with your personal details to use all site features",
    register: "Sign Up",
  },

  portuguese: {
    createAccount: "Criar sua conta",
    orUseEmailRegister: "Ou use seu e-mail para se registrar",
    name: "Nome",
    email: "Email",
    password: "Senha",
    signUp: "Cadastrar-se",
    orUseEmailPass: "Ou use seu e-mail para entrar",
    forget: "Esqueceu sua senha?",
    signIn: "Entrar",
    welcome: "Bem-vindo de volta!",
    enterPersonal: "Entre com seus dados para acessar todas as funções do site",
    hidden: "Entrar",
    hello: "Olá!",
    registerWith: "Registre-se para acessar todas as funções do site",
    register: "Cadastrar-se",
  },
};
