import User from "../domain/entity/User"
import { UserDTO } from "../dto/UserDTO";

export class UserService{
    
    public createUser = async (userData: User) => {
        const user = await User.create(userData);
        user.save();
        return user;
    }

    public findUserByEmail = async(email: string) => {
        return await User.findOne({
            where: {
                email: email
            }
        })
    }

    public getAllUser = async() => {
        return await User.findAll();
    }

    public updateUser = async(userNewData: UserDTO) => {
        try {
            const userFromDb = await User.findOne({
                where: {
                    id: userNewData.id
                }
            })
            if(!userFromDb) throw new Error('usuário não encontrado')
            const user = {
                email: userNewData.email ? userNewData.email : userFromDb.email,
                username: userNewData.username ? userNewData.username : userFromDb.username,
            }

            return await User.update({
                email: user.email,
                username: user.username,
            },{
                where:{
                    id: userNewData.id
                }
            })

        } catch (error) {
            console.error("erro no servidor => ", error)
        }
    }

    public deleteUser = async(userId: number) => {
        return await User.destroy({
            where: {
                 id: userId
            }
        })
    }
}