import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // categories array


        categories:[{
            id: 1,
            name: 'Men wear',
        },
        {
            id: 2,
            name: 'Foot wear',
        },
        {
            id: 3,
            name: 'Perfumes',
        }],

        // sub categories array

        sub_categories:[{
            id: 1,
            name: 'Shirts',
            cat_id: 1,
        },{
            id: 2,
            name: 'T-Shirts',
            cat_id: 1,
        },{
            id: 3,
            name: 'Kurta',
            cat_id: 1,
        },{
            id: 4,
            name: 'Casual Shoes',
            cat_id: 2,
        },{
            id: 5,
            name: 'Slippers',
            cat_id: 2,
        },{
            id: 6,
            name: 'Sport Shoes',
            cat_id: 2,
        },{
            id: 7,
            name: 'Arabic',
            cat_id: 3,
        },{
            id: 8,
            name: 'English',
            cat_id: 3,
        }],

        // products array


        products:[{
            id:1,
            name: 'Casual Shirt',
            src:'',
            sub_cat_id: 1,
        },{
            id:2,
            name: 'Formal Shirt',
            src:'',
            sub_cat_id: 1,
        },{
            id:3,
            name: 'Black',
            src:'',
            sub_cat_id: 1,
        },{
            id:4,
            name: 'Casual t-Shirt',
            src:'',
            sub_cat_id: 2,
        },{
            id:5,
            name: 'Formal Shirt',
            src:'',
            sub_cat_id: 2,
        },{
            id:6,
            name: 'Black t-Shirt',
            src:'',
            sub_cat_id: 2,
        },{
            id:7,
            name: 'Casual Kurta',
            src:'',
            sub_cat_id: 3,
        },{
            id:8,
            name: 'Formal Kurta',
            src:'',
            sub_cat_id: 3,
        },{
            id:9,
            name: 'Black Kurta',
            src:'',
            sub_cat_id: 3,
        },{
            id:10,
            name: 'Casual Shoes',
            src:'',
            sub_cat_id: 4,
        },{
            id:11,
            name: 'Formal Shoes',
            src:'',
            sub_cat_id: 4,
        },{
            id:12,
            name: 'Black Shoes',
            src:'',
            sub_cat_id: 4,
        },
        {
            id:13,
            name: 'Casual Slippers',
            src:'',
            sub_cat_id: 5,
        },{
            id:14,
            name: 'Formal Slippers',
            src:'',
            sub_cat_id: 5,
        },{
            id:15,
            name: 'Black Slippers',
            src:'',
            sub_cat_id: 5,
        },{
            id:16,
            name: 'Casual Sport-Shoes',
            src:'',
            sub_cat_id: 6,
        },{
            id:17,
            name: 'Formal Sport-Shoes',
            src:'',
            sub_cat_id: 6,
        },{
            id:18,
            name: 'Black Sport-Shoes',
            src:'',
            sub_cat_id: 6,
        },{
            id:19,
            name: 'RIIFFS',
            src:'',
            sub_cat_id: 7,
        },{
            id:20,
            name: 'ANFAR',
            src:'',
            sub_cat_id: 7,
        },{
            id:21,
            name: 'SWISS ARABIAN',
            src:'',
            sub_cat_id: 7,
        },{
            id:22,
            name: 'UDV',
            src:'',
            sub_cat_id: 8,
        },{
            id:23,
            name: 'Royal Blue',
            src:'',
            sub_cat_id: 8,
        },{
            id:24,
            name: 'Active Man',
            src:'',
            sub_cat_id: 8,
        },
    ]

    },
    mutations:{},
    actions:{},
    modules:{}
})