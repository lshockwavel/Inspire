import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Weather } from './models/Weather.js';
// import { Clock } from './models/Clock.js';
import { Image } from './models/Image.js';
import { Quote } from './models/Quote.js';
import { Todo } from './models/Todo.js';

class ObservableAppState extends EventEmitter {

  user = null

  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {Weather} */
  weather = null

  // /**@type {Clock} */
  // clock = null

  /**@type {Image} */
  image = null

  /**@type {Quote} */
  quote = null

  /**@type {Todo[]} */
  todos = []

  /** @type {Todo} */
  todo = null

  isFahrenheit = true;

}

export const AppState = createObservableProxy(new ObservableAppState())