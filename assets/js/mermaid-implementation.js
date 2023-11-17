document.addEventListener("DOMContentLoaded", (event) => {
  mermaid.initialize({
    startOnLoad:true,
    theme: "default",
    themeVariables: {
      fontFamily: "Consolas",
    }
  });
  window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
});
