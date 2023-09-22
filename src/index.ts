import express, {Request, Response} from 'express'
const app = express()

const port = process.env.PORT || 3000

app.get('/', function(req: Request, res: Response) {
    res.send('Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
})