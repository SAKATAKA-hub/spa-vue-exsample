<template>
    <div class="">
        <div class="login-page">
            <div class="login-panel">
                <form>
                    <div class="input-group">
                        <label>メールアドレス</label>
                        <input type="email" class="input">
                    </div>
                    <div class="input-group">
                        <label>パスワード</label>
                        <input type="password" class="input">
                    </div>

                    <button type="submit" class="btn">ログイン</button>
                </form>
            </div>



            <div class="mt-3">
                <router-link v-bind:to="{name: 'help'}">
                    <a href="#">ヘルプ</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
