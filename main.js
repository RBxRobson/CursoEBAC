

function Redes_Socias(finalidade, usuário, endereço_perfil) {
    this.finalidade = finalidade;
    this.usuário = usuário;
    let _endereço_perfil = endereço_perfil;

    this.getEndereço_perfil = function () {
        return _endereço_perfil;
    }

    this.setEndereço_perfil = function (endereço_perfil) {
        if (typeof endereço_perfil === "string") {
            return _endereço_perfil = endereço_perfil;
        }
    }
}

function Instagram(finalidade, usuário, endereço_perfil) {
    Redes_Socias.call(this, finalidade, usuário, endereço_perfil)
};
const instagramRobson = new Instagram("Assistir vídeos do Rells", "Robson Barbosa");
instagramRobson.setEndereço_perfil("@o_robinhoo");
console.log(instagramRobson, instagramRobson.getEndereço_perfil());


function LinkedIn(finalidade, usuário, endereço_perfil) {
    Redes_Socias.call(this, finalidade, usuário, endereço_perfil)
};
const linkedInRobson = new LinkedIn(
    "Encontrar um emprego",
    "Robson Barbosa",
    "www.linkedin.com/in/rb-robson-barbosa"
);
console.log(linkedInRobson, linkedInRobson.getEndereço_perfil());


function Facebook(finalidade, usuário, endereço_perfil) {
    Redes_Socias.call(this, finalidade, usuário, endereço_perfil);
};
const facebookRobson = new Facebook(
    "Acompanhar as notícias e novidades",
    "Robson Barbosa",
    "https://www.facebook.com/robson.barbosa0"
);
console.log(facebookRobson, facebookRobson.getEndereço_perfil());