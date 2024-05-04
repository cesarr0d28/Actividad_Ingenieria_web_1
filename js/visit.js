var visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCount').textContent = 'Número de visitas: ' + visitCount;