const posts = [
  {
    title: "Bienvenida a Bitácora Creativa",
    date: "30 de marzo de 2025",
    summary: "¡Hola! Este es un nuevo espacio donde comparto ideas, reflexiones y proyectos personales.",
    link: "post1.html"
  },
  {
    title: "Cómo me enamoré del desarrollo web",
    date: "29 de marzo de 2025",
    summary: "Mi historia con la programación, desde la primera línea de código hasta construir sitios como este.",
    link: "post2.html"
  }
];

const container = document.getElementById("blog-posts");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post-preview";
  div.innerHTML = `
    <h2><a href="${post.link}">${post.title}</a></h2>
    <p><em>${post.date}</em></p>
    <p>${post.summary}</p>
    <a href="${post.link}">Leer más...</a>
  `;
  container.appendChild(div);
});