import { AuthController } from './controllers/AuthController.js';
import { ClockController } from './controllers/ClockController.js';
import { ImageController } from './controllers/ImageController.js';
import { QuoteController } from './controllers/QuoteController.js';
import { TodoController } from './controllers/TodoController.js';
import { WeatherController } from './controllers/WeatherController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController();
  ClockController = new ClockController();
  WeatherController = new WeatherController();
  TodoController = new TodoController();
  ImageController = new ImageController();
  QuoteController = new QuoteController();

  
  constructor() {
    if(USE_ROUTER){
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
