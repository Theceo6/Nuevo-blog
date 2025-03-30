const posts = [
  {
    title: "Tendencias creativas para 2025",
    date: "30 de marzo de 2025",
    summary: "Descubre las ideas visuales y tecnológicas que marcarán este año.",
    link: "post1.html",
    image: "https://source.unsplash.com/900x400/?trend,design"
  },
  {
    title: "Cultura digital: cómo la tecnología cambia nuestra forma de pensar",
    date: "28 de marzo de 2025",
    summary: "Reflexión sobre cómo las redes y herramientas moldean nuestra creatividad.",
    link: "post2.html",
    image: "https://source.unsplash.com/900x400/?culture,digital"
  },
  {
    title: "Cómo crear una rutina creativa (y mantenerla)",
    date: "26 de marzo de 2025",
    summary: "Técnicas reales para producir ideas sin esperar inspiración.",
    link: "post3.html",
    image: "https://source.unsplash.com/900x400/?routine,creative"
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