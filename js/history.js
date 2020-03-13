class History
{
    constructor()
    {
        this.history = [];
    }

    add(plot)
    {
        this.history.push(plot);
        return this;
    }

    _plot(ctx, breaks)
    {
        let startX = 0;
        let startY = 1;
        new Rectangle(0,0, ctx.canvas.width, ctx.canvas.height).draw(ctx);
        this.history.forEach((i)=>
        {
            new Line(startX, startY, startX + breaks, startY + (i - startY)).draw(ctx);
            startX += breaks;
            startY +=  (i - startY);
        });
    }

    plot(ctx)
    {
        const breaks = ctx.canvas.width  / this.history.length;
        this._plot(ctx, breaks);
        return this.history;
    }
}