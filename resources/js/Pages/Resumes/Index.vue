<template>
    <layout>
        <inertia-link :href="route('documents.create')" type="button">create new</inertia-link>
    </layout>
</template>

<script>
    import Layout from "../../Shared/Layout";
    export default {
        name: "Index",
        components: {Layout}
    }
</script>

<style scoped>

</style>
