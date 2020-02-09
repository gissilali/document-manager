<template>
    <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Resumes</a></li>
        </ul>
        <slot/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Resumes</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>

</style>
