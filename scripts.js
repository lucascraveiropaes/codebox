const breakLine = "<br/>";
const defaultValue = `
// "username" serve como um armazenador de dados, e nesse caso vai registrar um nome
const username = prompt("Ola! Qual e o seu nome?");

// chamamos esse armazenador de variavel
// verificamos se a variavel possui um dado valido
if (username !== null)
  alert("Seja bem vindo, " + username); // se o teste for verdadeiro, exibimos uma mensagem
`.trim();

const logStack = [];
const editor = ace.edit("editor");
editor.setValue(defaultValue, -1);
editor.setTheme("ace/theme/monokai");
editor.session.setOptions({ tabSize: 2, useSoftTabs: true });
editor.session.setMode("ace/mode/javascript");

const editorElement = document.getElementById("run");

editorElement.addEventListener("click", () => {
  const code = editor.getValue();

  const push = value => logStack.push(`<p>${ value }</p>`);

  try {
    eval(code);

    push("Codigo executado com sucesso!");
  } catch (e) {
    push( e.stack.split(".<anonymous> ")[0] );
  }

  document.getElementById("log").innerHTML = logStack.join(breakLine)
});
