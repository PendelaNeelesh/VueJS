import jQuery from "jquery";


const state = {
    allinterns: [
        
    ],
    page: 0,
    perpage: 10,
    totalinterns: 0,
    filterele: "default",
};


const getters = { 
    getinterns: function (state){
        return state.allinterns;
    },
    page: function (state){
        return state.page;
    },
    total: function(state){
        return state.totalinterns
    },
    filterele: function(state){
        return state.filterele
    }
 };


const actions = { 
    getinterns: async function (state){
        console.log(state.state.filterele)
        await jQuery.ajax({
            url: `/users/count?loc=${state.state.filterele}`,
            success: (data)=>{
                state.commit("changetotal",data)
            }

        })
        const url = `/users/interns?page=${state.state.page}&loc=${state.state.filterele}`
        await jQuery.ajax({
            url: url,
            success: (data)=>{
                state.commit("adddata",data)
            }
        })
    },
    getmanagerinterns: async function (state){
        await jQuery.ajax({
            url: `/users/count`,
            success: (data)=>{
                state.commit("changetotal",data)
            }

        })
        const url = `/users/interns?page=${state.state.page}&user=${state.getters.getuser}`
        console.log(url)
        await jQuery.ajax({
            url: url,
            success: (data)=>{
                state.commit("adddata",data)
            }
        })
    },
    deleteintern: async function (state,id){
        await jQuery.ajax({
            url: `/users/delinterns?id=${id}`,
            success: (data)=>{
                if(data.message=="deleted"){
                    console.log("deleted")
                }
            }
        })
    },
    addintern: async function(state,data){
        await jQuery.ajax({
            url: `/users/addintern`,
            type: 'POST',
            data: data,
            success: function(data,status,xhr){
                console.log(data)
                location.href='/';
            }
        })
    },
    getnext: async function (state){
        console.log("in getnext")
        await state.commit("increase")
        console.log(state.state.page)
        await jQuery.ajax({
            url: `/users/interns?page=${state.state.page}`,
            success: (data)=>{
                console.log(data)
                state.commit("adddata",data)
            }
        })
    },
    getprev: async function (state){
        await state.commit("decrease")
        await jQuery.ajax({
            url: `/users/interns?page=${state.state.page}`,
            success: (data)=>{
                console.log(data)
                state.commit("adddata",data)
            }
        })
    },
    changeele: function(state,filele){
        state.commit("changeele",filele)
    }
 };


const mutations = { 
    changetotal: (state,data)=>{
        state.totalinterns = data.count
    },
    adddata: (state,data)=>{
        state.allinterns = data;
    },
    increase: (state)=>{
        state.page = state.page +1;
    },
    decrease: (state)=>{
        state.page = state.page -1;
    },
    changeele: (state,filele)=>{
        state.filterele = filele
    }
};


export default{
    state,
    getters,
    actions,
    mutations,
}