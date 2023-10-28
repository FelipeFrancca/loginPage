const langEl = document.querySelector(".languageButton");
const link = document.querySelectorAll("a");
const createAccountEl = document.querySelector(".createAccount");
const orUseEmailRegisterEl = document.querySelector(".orUseEmailRegister");
const nameEl = document.querySelector(".name");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");
const singnUpEl = document.querySelector(".singnUp");
const forgetEl = document.querySelector(".forget");
const signInEl = document.querySelector(".signIn");
const welcomeEl = document.querySelector(".welcome");
const enterPersonalEl = document.querySelector(".wnterPersonal");
const hiddenEl = document.querySelector(".login");
const helloEl = document.querySelector(".hello");
const registerWithEl = document.querySelector(".registerWith");
const registerEl = document.querySelector(".register");

link.forEach((el) => {
  el.addEventListener('click', () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.getAttribute("language");

    createAccountEl.textContent = data[attr].createAccount;
    orUseEmailRegisterEl.textContent = data[attr].orUseEmailRegister;
    nameEl.textContent = data[attr].name;
    emailEl.textContent = data[attr].email;
    passwordEl.textContent = data[attr].password;
    singnUpEl.textContent = data[attr].signUp;
    forgetEl.textContent = data[attr].forget;
    signInEl.textContent = data[attr].signIn;
    welcomeEl.textContent = data[attr].welcome;
    enterPersonalEl.textContent = data[attr].enterPersonal;
    hiddenEl.textContent = data[attr].hidden;
    helloEl.textContent = data[attr].hello;
    registerWithEl.textContent = data[attr].registerWith;
    registerEl.textContent = data[attr].register;
  });
});

var data = {
  english: {
    createAccount: "Create Account",
    orUseEmailRegister: "or use your email for registeration",
    name: "Name",
    email: "Email",
    password: "Password",
    signUp: "Sign Up",
    forget: "Forget Your Password?",
    signIn: "Sign In",
    welcome: "Welcome Back!",
    enterPersonal: "Enter your personal details to use all of site features",
    hidden: "Sign In",
    hello: "Hello, Friend!",
    registerWith:
      "Register with your personal details to use all of site features",
    register: "Sign Up",
  },

  portuguese: {
    createAccount: "Criar sua conta",
    orUseEmailRegister: "Ou use seu e-mail para se registrar",
    name: "Nome",
    email: "Email",
    password: "Senha",
    signUp: "Cadastra-se",
    forget: "Esqueceu sua senha?",
    signIn: "Entrar",
    welcome: "Bem vendo de volta!",
    enterPersonal: "Entre com seus dados para acessar todas as funções do site",
    hidden: "Entrar",
    hello: "Olá!",
    registerWith: "Registre-se para acessar todas as funções do site",
    register: "Cadastra-se",
  },
};
