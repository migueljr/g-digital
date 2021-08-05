<template>
<!--  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");

:root {
  --font-size-default-title: 1.2em;
  --font-size-default: 0.9em;
  --font-size-default-small: 0.8em;
  --color-primary: #2133D2 ;
  --color-primary-opacity: rgba(33, 51, 210, 0.1);
  --color-primary-opacity-2: rgba(33, 51, 210, 0.2);
  --color-font-sub: #81858E;
  --color-border-grey: #EDEDF0;
  --font-family-default: 'Montserrat', sans-serif;
}


*{
  font-family: var(--font-family-default)
}
body{
  overflow-x: hidden;
}

.button-default{
  color:var(--color-primary);
  background-color: var(--color-primary-opacity);
  border:0;
  padding: 10px 50px;
  border-radius:5px;
  font-size: var(--font-size-default);
  font-weight: bold;
}

.button-default:hover{
  color:var(--color-primary);
  background-color: var(--color-primary-opacity-2);
  border:0;
  border-radius:5px;
  font-size: var(--font-size-default);
}


</style>

<script>
  import {onMounted} from "vue";
  import {useStore} from "vuex";

  export default {
    setup(){
      const store = useStore();
      onMounted(()=>{
        if(localStorage.getItem('data'))
          store.dispatch('loadDataLocalStorage')
      })
    }
  }
</script>
