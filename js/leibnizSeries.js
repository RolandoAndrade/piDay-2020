class LeibnizSeries
{
    constructor()
    {
        this.pi = 4;
        this.iteration = 0;
        this.denominator = 3;
    }

    calculate()
    {
        this.pi += 4 / this.denominator * (this.iteration % 2 ? 1 : -1);
        this.iteration++;
        this.denominator += 2;
        return this.pi;
    }
}