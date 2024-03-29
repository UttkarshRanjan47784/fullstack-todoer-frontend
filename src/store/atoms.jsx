import { atom, selector } from "recoil"

const currentUser = atom({
    default: {
        username : null,
        isLoggedIn : false,
    },
    key : "currentUser"
});


export { currentUser }