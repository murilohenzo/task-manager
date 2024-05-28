import { UserModel } from "../../types"
import User from "../domain/entity/User"

export default class UserService{
    
    public createUser = async (userData: UserModel) => {
        const user = await User.create(userData);
        user.save();
        return user;
    }

    public getAllUser = async() => {
        return await User.findAll();
    }
}