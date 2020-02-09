<template>
    <div>
        <h1>Login</h1>
        <form method="post" @submit.prevent="handleSubmit()" :action="route('login')">
            {{ $page.errors.email }}
            <input type="email"  v-model="form.email" placeholder="email">
            <input type="password" v-model="form.password"  placeholder="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$inertia.post(route('login'), {
                    'email': this.form.email,
                    'password' : this.form.password
                })
            }
        }
    }
</script>

<style scoped>

</style>
