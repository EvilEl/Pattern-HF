<script setup lang="ts">
import { ObservableShop } from "./api/ObservableShop";
import { UserOne } from "./api/UserOne";
import { UserTwo } from "./api/UserTwo";

const shop = new ObservableShop<string>();
const user = new UserOne(shop);
const userTwo = new UserTwo(shop);
</script>

<template>
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
</template>
