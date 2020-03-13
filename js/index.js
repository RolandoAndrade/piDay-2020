const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const series = new LeibnizSeries();
const history = new History();

function loop()
{
    history.add(series.calculate()).plot(ctx);
}

window.setInterval(loop,200);