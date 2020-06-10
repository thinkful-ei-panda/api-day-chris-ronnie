import $ from 'jquery';
import api from './api.js';
import 'normalize.css';
import './index.css';
import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
  .then(response => response.json())
  .then(response => console.log(response));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main); 
