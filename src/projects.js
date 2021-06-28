import typing_ninja_img from './assets/projects/typing-ninja.PNG';
import shoping_cart_img from './assets/projects/shoping-cart.PNG';
import memory_game_img from './assets/projects/memory-game.PNG';
import weather_app_img from './assets/projects/weather-app.PNG';
import todo_app_img from './assets/projects/todo-app.PNG';

const Icons = {
    react: <i class="devicon-react-original colored"></i>,
    javaScript: <i class="devicon-javascript-plain colored"></i>,
    HTML: <i class="devicon-html5-plain colored"></i>,
    CSS: <i class="devicon-css3-plain colored"></i>,
    node: <i class="devicon-nodejs-plain colored"></i>,
    express: <i class="devicon-express-original colored"></i>,
    mongoDB: <i class="devicon-mongodb-plain colored"></i>,
    bootstrap: <i class="devicon-bootstrap-plain colored"></i>,
    redux: <i class="devicon-redux-original colored"></i>,
    CPlusPlus: <i class="devicon-cplusplus-plain colored"></i>
}
export default [
    {
        name: "Todo App",
        description: "Basic Todo app using MERN stack",
        image: todo_app_img,
        liveDemoLink: "https://todo-app-mern41.herokuapp.com/",
        codeLink: "https://github.com/vinayak41/todo-app-MERN",
        teckStack: [Icons.react, Icons.node, Icons.express, Icons.mongoDB, Icons.redux]
    },
    {
        name: "Typing Ninja",
        description: "Test your typing speed.",
        image: typing_ninja_img,
        liveDemoLink: "http://vinayak41.github.io/typing-ninja",
        codeLink: "https://github.com/vinayak41/typing-ninja",
        teckStack: [Icons.react]
    },
    {
        name: "Shoping Cart",
        description: "Created basic shoping cart using React and Bootstarp.",
        image: shoping_cart_img,
        liveDemoLink: "https://vinayak41.github.io/shopping-cart",
        codeLink: "https://github.com/vinayak41/shopping-cart",
        teckStack: [Icons.react, Icons.bootstrap]
    },
    {
        name: "Memory Game",
        description: "Simple memory game app using React.",
        image: memory_game_img,
        liveDemoLink: "https://vinayak41.github.io/memory-game/",
        codeLink: "https://github.com/vinayak41/memory-game",
        teckStack: [Icons.react]
    },
    {
        name: "Weather App",
        description: "Created weather app using OpenWeather API.",
        image: weather_app_img,
        liveDemoLink: "https://vinayak41.github.io/weather-app/",
        codeLink: "https://github.com/vinayak41/weather-app",
        teckStack: [Icons.javaScript, Icons.HTML, Icons.CSS]
    }
]