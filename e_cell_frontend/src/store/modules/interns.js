import jQuery from "jquery";


const state = {
    allinterns: [
        
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