<template>
    <div class="container-fluid bg-dark">
        <div class="container">
            <nav class="navbar navbar-dark">
                <span class="navbar-brand mb-0 h1">Vue Laravel SPA</span>
                <div>
                    <router-link v-bind:to="{name: 'tasks'}">
                        <button class="btn btn-success">tasks</button>
                    </router-link>
                    <router-link v-bind:to="{name: 'help'}">
                        <button class="btn btn-success">help</button>
                    </router-link>
                    <router-link v-bind:to="{name: 'login'}">
                        <button class="btn btn-success">login</button>
                    </router-link>

                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
