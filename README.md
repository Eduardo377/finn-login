
# 🎄 Finn Natal - Tela de Login Temática 🎅

Bem-vindo ao **Finn Natal**! Este projeto é uma **tela de login** interativa e temática inspirada no personagem Finn de *Hora de Aventura*, com um toque especial de Natal. A interface oferece uma experiência imersiva e divertida, incluindo animações de neve, interatividade com os olhos do personagem e controle de músicas natalinas. 😄❄️

Confira o projeto ao vivo: [Finn Natal - Deploy](https://finn-natal.netlify.app/)

---

## 🚀 Estrutura do Projeto

Este projeto é uma página de login simples com os seguintes elementos:

- **Tela de Login**: Um campo de senha interativo inspirado no personagem Finn, caracterizado de forma **natalina**.
- **Animação de Olhos**: O Finn segue o movimento do mouse, criando uma interação divertida.
- **Flocos de Neve**: Um efeito visual festivo com flocos de neve caindo na tela.
- **Músicas de Natal**: Controle de música com músicas como *Jingle Bells* e *All I Want for Christmas Is You*.

---

## ⚙️ Funcionalidades

### 1. **Tela de Login com Interatividade** 🎮
- **Campo de Senha**: O usuário pode clicar para mostrar ou esconder a senha. 
- **Ícones de Olho**: Um ícone de "olho fechado" ou "olho aberto" aparece dependendo da visibilidade da senha.
  
### 2. **Animações e Efeitos Visuais** ❄️
- **Olhos do Finn**: Os olhos do personagem se movem conforme o movimento do mouse.
- **Nevasca**: Flocos de neve caem na tela para dar um toque de Natal. ❄️

### 3. **Controles de Música** 🎶
- **Músicas de Natal**: O usuário pode controlar a reprodução de músicas natalinas.
- **Botões de Controle**: Play/Pause, Próxima música, Anterior, e Ajuste de volume.

---

## 🔥 Interatividade

### 1. **Campo de Senha Interativo**
A visibilidade da senha pode ser alternada ao clicar nos ícones de olho, tornando a experiência mais dinâmica.

```javascript
// Código para alternar visibilidade da senha
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const togglePasswordHidden = document.getElementById('togglePasswordHidden');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordHidden.style.display = 'block';
        togglePassword.style.display = 'none';
    } else {
        passwordInput.type = 'password';
        togglePassword.style.display = 'block';
        togglePasswordHidden.style.display = 'none';
    }
});
```

### 2. **Movimento dos Olhos do Personagem**
Os olhos de Finn se movem com base no movimento do mouse do usuário.

```javascript
document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye-container");
    eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        const distance = 10;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        eye.style.transform = `translate(${x}px, ${y}px)`;
    });
});
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página, incluindo o formulário de login e elementos interativos.
- **CSS**: Estilos da interface, incluindo animações e a aparência natalina.
- **JavaScript**: Funções de interatividade, como alternar visibilidade da senha, movimento dos olhos e animações de flocos de neve.
- **Sass**: Para organização dos estilos e reutilização de variáveis.
- **Áudio**: Música de Natal para enriquecer a experiência do usuário.
- **FIGMA**: Layout e design visual inspirado no universo de o personagem **Finn de Hora de Aventura**, com uma versão natalina do herói com referência em [figma](https://www.figma.com/design/vHTaUvhU4cNdVsXb9VdjDT/FINN---Login-(Copy)?node-id=0-1).


---

## 📥 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/SeuUsuario/finn-natal.git
   ```

2. Abra o projeto em um editor de código como o **VSCode**.

3. Abra o arquivo `index.html` no navegador para visualizar o projeto em execução.

---

## 🌟 Destaques do Projeto

- **Design Temático**: Combina a personalidade do Finn de *Hora de Aventura* com a magia do Natal. 🎅
- **Interatividade**: Os olhos do Finn seguem o movimento do mouse, criando uma experiência imersiva. 👀
- **Animações de Neve**: Flocos de neve caem na tela para reforçar o tema natalino. ❄️
- **Controles de Música**: A trilha sonora de Natal complementa a experiência com músicas como *Jingle Bells*. 🎶

---

## 🛡️ Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo LICENSE para mais detalhes.

---

## 📞 Contato

Se você tiver alguma dúvida ou quiser discutir sobre o projeto, entre em contato comigo! 💬

- **Email**: [eduardogomes377@gmail.com](mailto:eduardogomes377@gmail.com)
- **WhatsApp**: (21) 9 8264-6297 / 9 7341-2873
- **LinkedIn**: [Eduardo Gomes Andrade](https://www.linkedin.com/in/eduardogomes377/)

---

Obrigado por conferir o projeto! 🎄 Espero que se divirta usando a tela de login e sinta a magia do Natal! 🎅