const breakLine = "<br/>";
const logStack = [];

const editor = ace.edit("editor");
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
