const title = document.getElementById('title');
const gambar = document.getElementById('gambar');
const vid = document.getElementById('id');
const sino = document.getElementById('sinopsis');

const searchParam = new URLSearchParams(window.location.search);

let id = 1;

if (searchParam.has('id')) {
  id = searchParam.get('id');
}

async function getData() {
  let data = await fetch('https://api.jikan.moe/v4/anime/' + id);
  let hasil = await data.json();
  console.log(hasil);
  title.innerHTML = hasil.data.title;
  gambar.src = hasil.data.images.jpg.image_url;
  vid.scr = hasil.data.trailer.youtube_id.url;
  sino.innerHTML = hasil.data.synopsis;
}

getData();
