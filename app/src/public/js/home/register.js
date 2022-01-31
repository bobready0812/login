"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const name = document.querySelector("#name");
const confirmPsword = document.querySelector("#confirm-psword");
const registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register () {
   
    const req = {
        id: id.value,
        psword: psword.value,
        name: name.value,
        confirmPsword: confirmPsword.value,
    };
    console.log(req);

    // fetch("/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    // .then((res) => res.json())
    // .then((res) => {
    //     if(res.success){
    //         location.href= "/";
    //     } else {
    //         alert(res.msg);
    //     }
    // })
    // .catch((err) => {
    //     console.error(new Error("로그인 중 에러 발생"));
    // });
}