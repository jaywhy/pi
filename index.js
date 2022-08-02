export default function () {
  window.addEventListener("DOMContentLoaded", addCSS)
  window.addEventListener("DOMContentLoaded", addPiLink)
}

function addPiLink() {
  const link = document.createElement("a")
  link.setAttribute("class", "pi")
  link.innerHTML = "&pi;"
  link.addEventListener("click", addUnauthorized)
  document.body.appendChild(link)
}

function addCSS() {
  const style = document.createElement("link")
  style.type = "text/css"
  style.rel = "stylesheet"
  style.href = "index.css"
  document.head.appendChild(style)
}

function addUnauthorized() {
  const unauthorized = document.createElement("div")
  unauthorized.setAttribute("class", "background")
  unauthorized.innerHTML = `
  <div class="container">
    <div class="unauthorized">Unauthorized<br />access</div>
  </div>`
  document.body.appendChild(unauthorized)
}
