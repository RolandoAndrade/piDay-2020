const NUMBER_OF_VERTICAL_BREAKS = 5;

class History
{
    constructor()
    {
        this.history = [];
        this.lastPlot = 1;
    }

    add(plot)
    {
        this.history.push(plot);
        this.lastPlot = plot;
        return this;
    }

    _plot(ctx, breaksX, breaksY)
    {
        let startX = 0;
        let startY = ctx.canvas.height - 1 * breaksY;
        new Rectangle(0,0, ctx.canvas.width, ctx.canvas.height, "#424242").draw(ctx);
        new CanvasText(''+this.lastPlot, ctx.canvas.width / 2, 9 * ctx.canvas.height/10, 15,
            '#aaaa9d').draw(ctx);
        this.history.forEach((i)=>
        {
            new Line(startX, startY, startX + breaksX, ctx.canvas.height - i * breaksY, "#51ba62").draw(ctx);
            startX += breaksX;
            startY = (ctx.canvas.height - i * breaksY);
        });
    }

    plot(ctx)
    {
        const breaksX = ctx.canvas.width  / this.history.length;
        const breaksY = ctx.canvas.height / NUMBER_OF_VERTICAL_BREAKS;
        this._plot(ctx, breaksX, breaksY);
        return this.history;
    }
}