import React from 'react';
import { render } from 'react-dom';
import './assets/css/App.css';
import App from './js/App';






//adding scripts and css sdn for boot strap



var head = document.getElementsByTagName('head').item(0);
//
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js');
head.appendChild(script);
//
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
head.appendChild(script);
//

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js');
head.appendChild(script);
//
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', ' https://code.jquery.com/jquery-3.3.1.min.js');
head.appendChild(script);
//
var x = document.createElement("LINK");
x.setAttribute("rel", "stylesheet");
x.setAttribute("type", "text/css");
x.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");
document.head.appendChild(x);

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(<App />, document.getElementById('root'));
