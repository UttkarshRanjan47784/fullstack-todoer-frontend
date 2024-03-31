import { atom, selector } from "recoil"

const currentUser = atom({
    default: {
        username : null,
        isLoggedIn : false,
    },
    key : "currentUser"
});

const todos = atom({
    key : "todos",
    default : {}
})

export { currentUser, todos }