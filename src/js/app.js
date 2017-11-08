const express = require('express');

const app = express();

let name = 'Paul';

app.get('/', (req, res)=>{
    res.send('<h1>This is the root route! Check...Again...Nice...</h1>');
});

app.get('/hello', (req, res)=>{
    res.send(`<p>Hello ${name}. You are an awesome developer ${name}!!!</p>`);
});

let dt = Date();
console.log('   ' + dt);

app.listen(3000, ()=>{
    console.log('Changes have been reloaded - '+dt );
});

