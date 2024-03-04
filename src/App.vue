<script>


</script>

<template>
  <header class="bg-black text-yellow-400 px-5 py-2">
    <div class="wrapper">
      <nav class="flex gap-5 relative">
        <RouterLink to="/">shopping</RouterLink>
        <RouterLink to="/shopTwo">shopTwo</RouterLink>
        <RouterLink to="/shopThree">shopThree</RouterLink>
        <RouterLink to="/shopFour">shopFour</RouterLink>
        <i class="fa-solid fa-cart-shopping absolute right-0"></i>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
