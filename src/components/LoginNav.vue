<template>
    <div class="lh-login-nav">
        <nav class="lh-login-nav-links">
            <lh-button type="inline" color-reverse>
                <a :href="url">Dashboard</a>
            </lh-button>
        </nav>
    </div>
</template>

<script>

import LhButton from './Button';

export default {
    name: 'lh-login-nav',
    data() {
        return {
            url: 'https://dashboard.humphreyhillaryhitchin.com'
        }
    },
    components: {
        LhButton
    }
}
</script>

<style scoped lang="scss">

    @import "../assets/sass/mixins.scss";
    @import "../assets/sass/globals.scss";

    .lh-login-nav {
        background-color: $black;
        padding: 0.25em 2em;

        .lh-login-nav-links {
            display: flex;
            justify-content: flex-end;

            a {
                text-transform: uppercase;

                @media (max-width: 1024px) {
                    font-size: 14px;
                }
            }
        }
    }
    
</style>