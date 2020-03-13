const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const series = new LeibnizSeries();
const history = new History();

function loop()
{
    const a = series.calculate();
    console.log(a);
    history.add(a).plot(ctx);
}

window.setInterval(loop,200);