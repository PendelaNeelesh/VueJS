import jQuery from 'jquery'

const state = {
    userinfo: {
        username: "",
        password: "",
        ismanager: false,
        verified: false
    }
}

const getters = {
    userstatus: (state)=>{
        return state.userinfo;
    },
    verifeidstatus: (state)=>{
        return state.verified;
    }
};

const actions = {
    verifyuser:  async (state)=>{
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
                    state.state.userinfo.verified = false;
                }
                else{
                    console.log("true")
                    state.state.userinfo.verified = true;

                }
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log(errorMessage)
            }
        });
    }
};

const mutations = {
    changeverified: (state)=>{
        state.userinfo.verified = true;
    }
};

export default{
    state,
    getters,
    actions,
    mutations
};