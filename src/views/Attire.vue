<template>
    <div class="lh-attractions">
        <div class="left-attractions">
            <span class="smallcaps highlight">Wedding Attire</span>
            <h1 class="display">What to Wear!</h1>
            <p>We fully expect formal/cocktail. JUST KIDDING! This will be a very informal affair, and you are free to wear whatever you'd like. If you'd like a little guidance, or want to know how best to fit in, the wedding party will each be wearing some combination of graphic t-shirt and sport coat/blazer.</p>
            <p>Keep in mind, too, that if the weather holds up, the wedding ceremony will be taking place outside on the beach. So if you want to bring your flip flops, that's cool, too.</p>
            </div>
        <div class="right-attractions">
            <div class="lh-img-holder">
                <img src="../assets/img/attire.png" alt="Lydia & Diana" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Attractions'
    }
</script>

<style scoped lang="scss">

    @import "../assets/sass/mixins.scss";
    @import "../assets/sass/globals.scss";

    h1, h3, p {
        text-align: left;
    }

    p {
        font-size: 20px !important;
        padding-right: 4em;

        @media (max-width: 800px) {
            padding: 0 2em;
        }

        @media (max-width: 460px) {
            padding: 0 2em 0 0;
        }
    }

    h1 {
        margin-bottom: 0.25em;
    }

    .lh-attractions {
        height: 100vh;
        min-height: 500px;
        display: flex;

        @media (max-width: 800px) {
            flex-direction: column;
        }

        .left-attractions {
            width: 50%;

            @media (max-width: 800px) {
                width: 100%;
            }
        }

        .right-attractions {
            width: 50%;
            background-color: $yellow;

            img {
                width: 100%;
                padding-bottom: 0.4em;
            }

            .lh-img-holder {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h1 {
                    text-align: center;

                    @media (max-width: 800px) {
                        font-size: 4em !important;
                    }
                }
            }

            @media (max-width: 800px) {
                width: 100%;
            }
        }

        .left-attractions, .right-attractions {
            padding: 5em 1em 5em 3em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            @media (max-width: 800px) {
                padding-left: 2em;
                align-items: center;
            }

            @media (max-width: 460px) {
                align-items: flex-start;
            }
        }
    }
    
</style>