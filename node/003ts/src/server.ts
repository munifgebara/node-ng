import app from './app'

const port = process.env.PORT || 3000

console.log("munifgebara@gmail.com");

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})