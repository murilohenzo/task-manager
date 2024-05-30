import User from "../domain/entity/User"
import { UserDTO } from "../dto/UserDTO";

export class UserService{
    
    public createUser = async (userData: User) => {
        const user = await User.create(userData);
        user.save();
        return user;
    }

    public findUserByReferenceId = async(referenceId: string) => {
        return await User.findOne({
            where: {
                referenceId: referenceId
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
                    referenceId: userNewData.referenceId
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
                    referenceId: userNewData.referenceId
                }
            })

        } catch (error) {
            console.error("erro no servidor => ", error)
        }
    }

    public deleteUser = async(referenceId: string) => {
        return await User.destroy({
            where: {
                 referenceId: referenceId
            }
        })
    }
}