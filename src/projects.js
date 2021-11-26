import typing_ninja_img from './assets/projects/typing-ninja.PNG';
import shoping_cart_img from './assets/projects/shoping-cart.PNG';
import memory_game_img from './assets/projects/memory-game.PNG';
import weather_app_img from './assets/projects/weather-app.PNG';
import todo_app_img from './assets/projects/todo-app.PNG';
import note_keep_app_img from "./assets/projects/note-keep.PNG"

const Icons = {
    react: <i className="devicon-react-original colored"></i>,
    javaScript: <i className="devicon-javascript-plain colored"></i>,
    HTML: <i className="devicon-html5-plain colored"></i>,
    CSS: <i className="devicon-css3-plain colored"></i>,
    node: <i className="devicon-nodejs-plain colored"></i>,
    express: <i className="devicon-express-original colored"></i>,
    mongoDB: <i className="devicon-mongodb-plain colored"></i>,
    bootstrap: <i className="devicon-bootstrap-plain colored"></i>,
    redux: <i className="devicon-redux-original colored"></i>,
    CPlusPlus: <i className="devicon-cplusplus-plain colored"></i>
}
export default [
    {
        name: "Note Keep",
        description: "Note keeping app",
        image: note_keep_app_img,
        liveDemoLink: "https://note-keep-v.herokuapp.com/home/",
        codeLink: "https://github.com/vinayak41/notes-keep",
        teckStack: [Icons.react, Icons.node, Icons.express, Icons.mongoDB, Icons.redux]
    },
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