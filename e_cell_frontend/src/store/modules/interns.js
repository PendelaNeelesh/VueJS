import jQuery from "jquery";


const state = {
    allinterns: [
        {
            id: 1,
            title: "Soft-ware-developer at Google",
            location: "Guntur",
            type: "software-devloper",
            minpay: 10000,
            maxpay: 20000,
            description: "Lorem...",
            company: "Google"

          },
          {
            id: 2,
            title: "Soft-ware-developer at hippo",
            location: "Hyderabad",
            type: "product-developer",
            minpay: 1000,
            maxpay: 2000,
            description: "Lorem...",
            company: "hippo"
          },
          {
            id: 4,
            title: "Soft-ware-developer at hippo",
            location: "Hyderabad",
            type: "product-developer",
            minpay: 1000,
            maxpay: 2000,
            description: "Lorem...",
            company: "hippo"
          },
          {
            id: 3,
            title: "Soft-ware-developer at hippo",
            location: "Hyderabad",
            type: "product-developer",
            minpay: 1000,
            maxpay: 2000,
            description: "Lorem...",
            company: "hippo"
          }
    ],
};


const getters = { 
    getinterns: function (state){
        return state.allinterns;
    },
 };


const actions = { 
    getinterns: async function (state){
        console.log("in getinterns")
        jQuery.ajax('http://127.0.0.1:8000/users/interns',{
            all: 'true'
        },
        function (data,textStatus,xhr){
            console.log(data)
        })
    }
 };


const mutations = { };


export default{
    state,
    getters,
    actions,
    mutations,
}