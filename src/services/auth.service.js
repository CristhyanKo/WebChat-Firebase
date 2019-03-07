class Auth {
    isAuthenticated() {
        const nickname = localStorage.getItem('@WebChat:nickname')
        const email = localStorage.getItem('@WebChat:email')

        const validate = (!!nickname && email.includes("@"))

        return validate
    }
}

export default Auth