import jQuery from 'jquery'

const state = {
    userinfo: {
        username: "",
        password: "",
        ismanager: false,
        verified: false,
        errors: false,
    }
}

const getters = {
    userstatus: (state)=>{
        return state.userinfo;
    },
    verifeidstatus: (state)=>{
        return state.userinfo.verified;
    },
    managerstatus: (state)=>{
        return state.userinfo.ismanager;
    },
    getuser: (state)=>{
        return state.userinfo.username;
    }
};

const actions = {
    verifyuser:  async function (state){
        console.log("in func")
        await jQuery.ajax('http://127.0.0.1:8000/users/verify', {
            type: 'POST',
            data: {
                user: state.state.userinfo.username,
                pass: state.state.userinfo.password
            },
            success: function (data, status, xhr) {
                console.log(data)
                if(data.message == "User does not exist please signUp"){
                    console.log("false")
                    state.commit("errors")
                    
                }
                else{
                    if(data.ismanager === "True"){
                        state.commit("toadmin")
                    }
                    else{
                        state.commit("touser")
                    }
                    state.commit("noerrors")
                }
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log(errorMessage)
            }
        });
    }
};

const mutations = {
    errors: (state)=>{
        state.userinfo.errors = true;
        state.userinfo.verified = false;
    },
    noerrors: (state)=>{
        state.userinfo.errors = false;
        state.userinfo.verified = true;


    },
    toadmin: (state)=>{
        console.log("in ver")
        state.userinfo.ismanager = true;
        console.log(state.userinfo.ismanager)
    },
    touser: (state)=>{
        console.log("in ver")
        state.userinfo.ismanager = false;
        console.log(state.userinfo.ismanager)

    }

};

export default{
    state,
    getters,
    actions,
    mutations
};