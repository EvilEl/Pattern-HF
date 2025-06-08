<script setup lang="ts">
import { ObservableShop } from "./api/Observable/ObservableShop";
import { UserOne } from "./api/Observable/UserOne";
import { UserTwo } from "./api/Observable/UserTwo";

import { Human, Fast, Slow, Running } from "./api/Strategy/Strategy";

const shop = new ObservableShop<string>();
const user = new UserOne(shop);
const userTwo = new UserTwo(shop);

const strategyHuman = new Human("Jon Doe", 25, new Fast());
</script>

<template>
  <h2>Наблюдатель</h2>
  <div>
    user 1 - {{ user.book }}
    <button @click="user.addedSubscribe">Подписаться</button>
    <button @click="user.removeSubscribe">Отписаться</button>
    <button @click="user.update">Обновить</button>
  </div>
  <div>
    user 2 - {{ userTwo.book }}
    <button @click="userTwo.addedSubscribe">Подписаться</button>
    <button @click="userTwo.removeSubscribe">Отписаться</button>
    <button @click="userTwo.update">Обновить</button>
  </div>
  <br />
  <button @click="shop.setBook(Math.random() * 100 * 100)">Обновить</button>
  <br />
  <br />
  <br />
  <h2>Стратегия</h2>
  <div>
    <button @click="strategyHuman.setMove(new Slow())">
      Будет идти медленно
    </button>
    <button @click="strategyHuman.setMove(new Fast())">
      Будет идти быстро
    </button>
    <button @click="strategyHuman.setMove(new Running())">Будет Бежать</button>
  </div>

  <button @click="strategyHuman.move">Как я иду ?(в консоль лог пишет)</button>
</template>
