// Interfaces

interface Usuario {
    nome: string;
    email: string;
    adress?: string;
}

function getUser() {
    return {
        nome: "Evelyn",
        email: "evelyn@evelyn.com"
    }
}

function setUser (usuario: Usuario) {
    // ...
}
