<template>
    <div class="lh-card">
        <a class="lh-card-img" :href="href" target="_blank" v-if="img">
            <img class="object-fit_cover" :src="img" :alt="title" />
            <div class="overlay"></div>
        </a>
        <div class="lh-card-contents" v-if="type === 'accom'">
            <a :href="href" target="_blank">{{ title }}</a>
            <p>{{ address }}</p>
            <p>{{ phone }}</p>
        </div>
        <div class="lh-card-contents" v-else-if="type === 'attr'">
            <a :href="href" target="_blank">{{ title }}</a>
            <ul class="lh-list">
                <li v-for="(item, index) in list" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lh-card',
        props: {
            type: {
                type: String,
                default: 'accom' // or attr
            },
            title: {
                type: String,
                default: ''
            },
            address: {
                type: String,
                default: ''
            },
            phone: {
                type: String,
                default: ''
            },
            href: {
                type: String,
                default: ''
            },
            img: String,
            list: Array
        }
    }
</script>

<style lang="scss" scoped>

@import "../assets/sass/globals.scss";
@import "../assets/sass/mixins.scss";

p, a {
    font-size: 20px !important;
    margin: 0.25em;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0,0,0,0.25);
}

.lh-card {
    width: 100%;
    max-width: 400px;
    padding: 1em;
    margin: 1em;

    @media (max-width: 960px) {
        padding: 0.5em;
        margin: 1em;
        max-width: 600px;
    }

    @media (max-width: 800px) {
        margin: 0.5em;
        padding: 0.5em;
    }

    a {
        text-decoration: underline;
        text-transform: uppercase;
    }

    .lh-card-img {
        position: relative;
        display: block;
        max-height: 200px;
        margin-bottom: 1em;

        img {
            width:100%;
            height: 200px;
        }

        &:hover .overlay {
            opacity: 1;
        } 
    }

    .lh-list {
        list-style-type: none;
        margin-left: 0;
        padding-left: 1em;

        li {
            margin-bottom: 5px;
            font-size: 16px;

            &:before {
                display: inline-block;
                content: "-";
                width: 1em;
                margin-left: -1em;
            }
        }
    }
}

</style>