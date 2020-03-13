const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const series = new LeibnizSeries();

function loop()
{
    console.log(series.calculate());
}

window.setInterval(loop,500);