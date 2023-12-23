const con = document.getElementById('container');

async function getAll() {
  let data = await fetch('https://api.jikan.moe/v4/anime');
  let allAnimes = await data.json();

  let dataAnime = allAnimes.data;

  console.log(dataAnime);

  dataAnime.forEach((r) => {
    let div = document.createElement('div');
    div.classList.add('anime');
    let a = document.createElement('a');
    a.innerHTML = r.title;
    a.href = 'index.html?id=' + r.mal_id;
    let img = document.createElement('img');
    img.src = r.images.jpg.image_url;
    img.style.width = '200px';
    div.appendChild(a);
    div.appendChild(img);
    con.appendChild(div);
  });
}

getAll();
