<script setup lang="ts">
import { computed } from "vue";
import { ObservableShop } from "./api/Observable/ObservableShop";
import { UserOne } from "./api/Observable/UserOne";
import { UserTwo } from "./api/Observable/UserTwo";
import { Shirt, Shoes, MichaelHuman } from "./api/Decorator/ClothesHuman.ts";
import { Human, Fast, Slow, Running } from "./api/Strategy/Strategy";
import { NYPizzaStore } from "./api/Fabrica/NYPizzaStore.ts";

const shop = new ObservableShop<string>();
const user = new UserOne(shop);
const userTwo = new UserTwo(shop);

const strategyHuman = new Human("Jon Doe", 25, new Fast());

const michael = new Shirt(new Shoes(new MichaelHuman()));
const clothes = computed(() => {
  console.log("computed", michael);
  return michael;
});
</script>

<template>
  <h2>Наблюдатель</h2>
  <div>
    user 1 - {{ user.book }}
    <button class="ml-1" @click="user.addedSubscribe">Подписаться</button>
    <button class="ml-1" @click="user.removeSubscribe">Отписаться</button>
    <button class="ml-1" @click="user.update">Обновить</button>
  </div>
  <div>
    user 2 - {{ userTwo.book }}
    <button class="ml-1" @click="userTwo.addedSubscribe">Подписаться</button>
    <button class="ml-1" @click="userTwo.removeSubscribe">Отписаться</button>
    <button class="ml-1" @click="userTwo.update">Обновить</button>
  </div>
  <br />
  <button @click="shop.setBook(Math.random() * 100 * 100)">Обновить</button>
  <br />
  <br />
  <br />
  <h2>Стратегия</h2>
  <div>
    <button class="ml-1" @click="strategyHuman.setMove(new Slow())">
      Будет идти медленно
    </button>
    <button class="ml-1" @click="strategyHuman.setMove(new Fast())">
      Будет идти быстро
    </button>
    <button class="ml-1" @click="strategyHuman.setMove(new Running())">
      Будет Бежать
    </button>
  </div>

  <button @click="strategyHuman.move">Как я иду ?(в консоль лог пишет)</button>
  <!-- <br />
  <br />
  <br /> -->
  <!-- <h2>Декоратор</h2>
  <div>
    Кроссовки
    <button class="ml-1" @click="michael.putOnClothes('обувь')">Надеть</button>
    <button class="ml-1" @click="michael.unClothe('обувь')">Снять</button>
  </div>
  <div>
    Рубашка
    <button class="ml-1" @click="michael.putOnClothes('верх')">Надеть</button>
    <button class="ml-1" @click="michael.unClothe('верх')">Снять</button>
  </div>
  <button @click="michael.getDressed">Что надето ?</button>
  {{ michael.clothes.value }} -->
  <br />
  <br />
  <br />
</template>

<style scoped>
.ml-1 {
  margin-left: 1rem;
}
</style>
