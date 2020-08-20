<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <!-- <div ref="msgDiv">{{msg}}</div>
    <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
    <button @click="changeMsg">Change the Message</button>-->
    <button type="text" @click="submit">防抖</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { debounce } from "@/utils/tools";
let testDoun = () => {
  console.log("外部的");
};
export default {
  name: "App",
  data() {
    return {
      msg: "Hello Vue.",
      msg1: "",
      msg2: "",
      msg3: "",
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    // submit() {
    //   return this.testDoun();
    //   // return function () {
    //   //   console.log(this);
    //   //   console.log(1);
    //   // };
    // },
    submit: debounce(() => {
      console.log("多次触发");
      console.log(this)
    }, 1000),
    testDoun() {
      console.log(123);
    },
    changeMsg() {
      this.msg = "Hello world.";
      // console.log(this.$refs.msgDiv.innerHTML)
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 75px;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  font-size: 28px;
  margin: 0;
  padding: 0;
}
</style>
