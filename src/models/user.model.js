export default class UserModel {
    static users = []
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.password = password
        this.email = email
    }

   static addUser(newUser) {
        newUser.id = UserModel.users.length + 1
        UserModel.users.push( new UserModel(newUser.id, newUser.name, newUser.email, newUser.password))
    }

    static checkUser(email, password) {
        return UserModel.users.find( user => user.email == email && user.password ==  password)
    }

}

