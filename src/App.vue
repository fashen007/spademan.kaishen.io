<template>
  <div>
    <cnav></cnav>
    <transition><router-view></router-view></transition>
    <myfooter></myfooter>
  </div>
</template>
<script>
import Cnav from './components/Cnav'
import Myfooter from './components/Myfooter'
export default {
  components: {
    Cnav,
    Myfooter
  }
}
</script>

<style>

/*html {
  height: 100%;·
}*/

body {
  margin: 0;
  padding: 0;
  background: #fff;
  font-family: 'Microsoft YaHei';
  min-width: 1200px;
}
ul{
  list-style: none;
}
.fl{
  float: left;
}
#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  min-width: 1200px;
}

#app a {
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@keyframes fadeIn {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@import './vendor/css/bootstrap.min.css'
</style>
