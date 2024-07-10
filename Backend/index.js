import express from 'express'; // this is a module js for this add module in type

const app = express();

app.get('/',(req ,res) =>{
    res.send('server is online');
})

app.get('/niti',(req ,res) =>{
    res.send('Nitish is online');
})


//get a list of 5 jockes
app.get('/jokes',(req , res) => {
    const jokes =[
        {
            "id": 1,
            "title": "Why don't scientists trust atoms?",
            "content": "Because they make up everything!"
        },
        {
            "id": 2,
            "title": "How do you organize a space party?",
            "content": "You planet."
        },
        {
            "id": 3,
            "title": "Why was the math book sad?",
            "content": "Because it had too many problems."
        },
        {
            "id": 4,
            "title": "What do you call fake spaghetti?",
            "content": "An impasta."
        },
        {
            "id": 5,
            "title": "Why don't skeletons fight each other?",
            "content": "They don't have the guts."
        }
    ]
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})