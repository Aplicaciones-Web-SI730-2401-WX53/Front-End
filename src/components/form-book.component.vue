<template>
    {{ $t('hello',{ msg :'Juan'}) }}

    <br />
    <label for="name" >Name</label>
    <pv-input-text id="name" />
    <img src="../assets/logo.svg" alt="logo"/>

    <br />
    <pv-button label="Submit" aria-label="submit" />
</template>

<script>
export default {
    name: "form-book"
}
</script>

<style scoped>

</style>