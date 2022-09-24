// run $ npm run start


const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 5000

app.use(function (req, res, next) {
    var date = new Date();
    if(date.getDay > 0 && date.getDay < 6 && date.getHours() > 9 && date.getHours < 17){
        next();
    }else{
        res.render('offlinepage');
    }
});

// Static Files
app.use(express.static('public'))
// Example for other folders - not required
// app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layout/navbar')
app.set('view engine', 'ejs')

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page'})
})

app.get('/services', (req, res) => {
    res.render('services', { title: 'our services' })
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'contact us' })
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))