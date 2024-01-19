document.getElementById('loadImages').addEventListener('click', async function(event) {
    event.preventDefault();
    var loader = document.getElementById('loader');
    loader.style.display = 'block'; 
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
      const data = await response.json();
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = ''; 
      data.message.forEach(imageUrl => {
        const div = document.createElement('div');
        div.className = 'gallery__item';
        const img = document.createElement('img');
        img.src = imageUrl;
        div.appendChild(img);
        gallery.appendChild(div);
      });
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      loader.style.display = 'none'; 
    }
  });
  