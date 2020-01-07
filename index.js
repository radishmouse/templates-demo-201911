const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const PORT = 3000;

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const blogData = [
    {
        title: 'first blog post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam laboriosam saepe aut inventore, amet distinctio ipsa quisquam debitis assumenda, vel voluptatem exercitationem necessitatibus fuga perspiciatis qui molestias vitae ullam?'
    },
    {
        title: 'second blog post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam laboriosam saepe aut inventore, amet distinctio ipsa quisquam debitis assumenda, vel voluptatem exercitationem necessitatibus fuga perspiciatis qui molestias vitae ullam?'
    },
    {
        title: 'third blog post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam laboriosam saepe aut inventore, amet distinctio ipsa quisquam debitis assumenda, vel voluptatem exercitationem necessitatibus fuga perspiciatis qui molestias vitae ullam?'
    }
];

app.get('/', (req, res) => {
    res.render('home', {
        locals: {
            pageTitle: 'The Home Page!!!!',
            pageHeader: 'lalalalalalalala'
        },
        partials: {
            nav: 'partials/nav',
            header: 'partials/header',
            footer: 'partials/footer'
        }
    });
});

app.get('/blog', (req, res) => {

    // const blogHTML = [];
    // for (let post of blogData) {
    //     blogHTML.push(`<h2>${post.title}</h2>`);
    //     blogHTML.push(`<p>${post.content}</p>`);
    // }
    
    // one-line equivalent of doing the for-loop:
    // const blogHTML = blogData.map(post => `<h2>${post.title}</h2><p>${post.content}</p>`);
    res.render('blog', {
        locals: {
            pageTitle: 'The blog',
            // blogPosts: blogHTML.join('')
            blogPosts: blogData
        },
        partials: {
            nav: 'partials/nav',
            header: 'partials/header',
            footer: 'partials/footer'
        }
    });
});

server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
})