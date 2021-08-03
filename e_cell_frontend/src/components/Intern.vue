<template>
  <div class="interncontainer">
    {{ internship.id }}
  </div>
</template>

<script>
export default {
    name: 'Intern',
    props: ['internship',]
}
</script>

<style>
  .interncontainer{
    margin: 10px;
    min-width: 70%;
    width: fit-content;
    min-height: 400px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    opacity: 0.8;
    align-self: center;
  }
</style>