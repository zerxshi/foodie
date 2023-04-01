<template>
  <label
    class="wrapper flex items-center border border-b-2 border-blue-50 border-b-gray-300 pb-3 font-semibold text-gray-500"
    ><slot />
    <input type="checkbox" class="checkbox" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "check-box",
}
</script>

<style scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}

.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  background-color: white;
  border: 1px solid #ccc;
  transition: all 0.5s;
}

.wrapper input:checked ~ .checkmark {
  background-color: #b0c364;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.wrapper input:checked ~ .checkmark:after {
  display: block;
}

.wrapper .checkmark:after {
  left: 6px;
  top: 3px;
  width: 7px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
