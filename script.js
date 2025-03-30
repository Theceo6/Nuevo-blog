const posts = [
  {
    title: "5 ideas creativas para comenzar un proyecto personal",
    date: "30 de marzo de 2025",
    summary: "¿Buscas inspiración? Aquí tienes ideas para crear algo increíble desde cero.",
    link: "post1.html",
    image: "https://source.unsplash.com/800x400/?creativity,notebook"
  },
  {
    title: "Herramientas digitales que cambiaron mi vida",
    date: "28 de marzo de 2025",
    summary: "Estas aplicaciones y servicios te ahorrarán tiempo y aumentarán tu productividad.",
    link: "post2.html",
    image: "https://source.unsplash.com/800x400/?technology,apps"
  },
  {
    title: "Cómo mantenerte motivado mientras aprendes algo nuevo",
    date: "26 de marzo de 2025",
    summary: "La clave está en la mentalidad, la rutina y celebrar pequeños logros.",
    link: "post3.html",
    image: "https://source.unsplash.com/800x400/?motivation,learning"
  }
];

const container = document.getElementById("blog-posts");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post-preview";
  div.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <h2><a href="${post.link}">${post.title}</a></h2>
    <p><em>${post.date}</em></p>
    <p>${post.summary}</p>
    <a href="${post.link}">Leer más...</a>
  `;
  container.appendChild(div);
});