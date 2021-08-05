import jQuery from 'jquery'


const state = {
    signindata: {
        user: "",
        pass1: "",
        pass2: "",
        type: "",
        email: "",
        existerror: false,
        created: false,
    }
}

const getters = {
    signindata: (state)=>{
        return state.signindata
    }
}

const actions = {
    createnewuser: async function (state){
        await jQuery.ajax('/users/create',{
            type: 'POST',
            data: {
                user: state.state.signindata.user,
                pass: state.state.signindata.pass1,
                email: state.state.signindata.email,
                type: state.state.signindata.type,
            },
            success: (data,status,xhr)=>{
                if(data.message == "User already exist"){
                    state.commit("alreadyexist")
                }
                else{
                    state.commit("success")
                }
            },
            error: (jqXhr,textStatus,errorMessage)=>{
                console.log(errorMessage)
            }
        })
    }
}


const mutations = {
    alreadyexist: (state)=>{
        state.signindata.existerror = true;
        state.signindata.created = false;
    },
    success: (state)=>{
        state.signindata.existerror = false;
        state.signindata.created = true;
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}