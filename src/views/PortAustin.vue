<template>
    <div class="lh-attractions-list">
        <lh-card v-for="(attr, index) in attractions" type="attr" :key="index" :title="attr.name" :href="attr.href" :img="attr.img" :list="attr.list"></lh-card>
    </div>
</template>

<script>
    import LhCard from '../components/Card';

    export default {
        name: 'PortAustin',
        data() {
            return {
                attractions: [
                    {
                        name: 'Port Austin Farmers Market',
                        href: 'https://portaustinarea.com/about-the-farmers-market',
                        img: require('../assets/img/farmer-market.jpg'),
                        list: [
                            'Locally grown produce',
                            'Coffee Hut',
                            'Wine Tasting',
                            'PUPPIES! (Sometimes)',
                            'T-shirts & Knickknacks'
                        ]
                    },
                    {
                        name: 'Breakwall/Public Beach/Marina',
                        href: 'https://www.portaustinoutdooradventure.com/port-austin-break-wall',
                        img: require('../assets/img/breakwall.png'),
                        list: [
                            'Carve your initials in the pole at the end of the breakwall',
                            'Enjoy the water and fresh lake air at the beach',
                            'Check out the boats at the marina'
                        ]
                    },
                    {
                        name: 'Port Austin Kayak (PAK)',
                        href: 'https://www.portaustinkayak.com/',
                        img: require('../assets/img/kayaks.png'),
                        list: [
                            'Cool t-shirts & gear',
                            'Turnip Rock kayak tour',
                            'Broken Rocks kayak tour',
                            'Bike Rentals'
                        ]
                    },
                    {
                        name: 'Bird Creek Farms & Tap House',
                        href: 'https://www.birdcreekfarms.com/',
                        img: require('../assets/img/bird-creek.jpg'),
                        list: [
                            'Farmhouse setting',
                            'Covered patio',
                            'Good beer & wine selection',
                            'Yummy food'
                        ]
                    },
                    {
                        name: 'Grindstone',
                        href: 'https://www.michigan.org/city/grindstone-city#?c=44.4299:-85.1166:6&tid=781&page=0&pagesize=20&pagetitle=Grindstone%20City',
                        img: require('../assets/img/grindstone.jpg'),
                        list: [
                            'Huge grindstone rocks (I promise they\'re interesting)',
                            'Cute general store',
                            'BIG ice cream cones'
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