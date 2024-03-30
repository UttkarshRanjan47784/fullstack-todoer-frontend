import { atom, selector } from "recoil"

const currentUser = atom({
    default: {
        username : null,
        isLoggedIn : false,
    },
    key : "currentUser"
});

const todoListList = atom({
    default: [],
    key : "todolistlist"
})


export { currentUser, todoListList }