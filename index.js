import Koa from "koa";

const PORT = process.env.PORT || 85;

const app = new Koa();
app.use(function* () {
    this.body = 'Hello world!';
});

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
 });