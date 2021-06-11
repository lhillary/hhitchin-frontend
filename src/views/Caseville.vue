<template>
    <div class="lh-attractions-list">
        <lh-card v-for="(attr, index) in attractions" type="attr" :key="index" :title="attr.name" :href="attr.href" :img="attr.img" :list="attr.list"></lh-card>
    </div>
</template>

<script>
    import LhCard from '../components/Card';

    export default {
        name: 'Caseville',
        data() {
            return {
                attractions: [
                     {
                        name: 'Breakwall/Caseville Public Beach',
                        href: 'https://www.michigan.org/property/caseville-county-park',
                        img: require('../assets/img/caseville-breakwall.jpg'),
                        list: [
                            'Great beach time & fishing',
                            'See the marina & breakwall',
                            'Enjoy the fresh air!',
                            'Carve your initials at the end of the breakwall here, too'
                        ]
                    },
                    {
                        name: 'Thumb Brewery',
                        href: 'https://www.thumbbrewery.com/',
                        img: require('../assets/img/thumb-brewery.jpg'),
                        list: [
                            'Nice outdoor patio',
                            'GOOD BOOZE & FOOD'
                        ]
                    },
                    {
                        name: 'Shipwreck Distillery',
                        href: 'https://www.google.com/maps/place/Shipwreck+Distillery/@43.9283974,-83.2830093,15z/data=!4m5!3m4!1s0x0:0xa4d6b963f338f6ba!8m2!3d43.928453!4d-83.283012',
                        img: require('../assets/img/shipwreck.jpg'),
                        list: [
                            'Really cool environment',
                            'Intimate & cozy',
                            'Awesome drinks'
                        ]
                    },
                    {
                        name: 'Key North Mini Golf & Family Fun Center',
                        href: 'http://keynorthminigolf.com/',
                        img: require('../assets/img/key-north.jpg'),
                        list: [
                            'Diana spend many summers here as a teenager',
                            'Giant slide',
                            'Mini golf, go karts, & bumber boats',
                            'Game room & ice cream'
                        ]
                    },
                    {
                        name: 'Lefty\'s Drive-In',
                        href: 'https://www.leftysdinermi.com/',
                        img: require('../assets/img/lefty.jpg'),
                        list: [
                            'Great food - unhealthy but so, so good',
                            'Friday night perch!'
                        ]
                    }
                ]
            }
        },
        components: {
            LhCard
        }
    }
</script>