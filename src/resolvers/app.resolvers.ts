import {hash} from 'bcryptjs';
import {User} from "../entity/User";

export const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        userById: async (_:any, {id}: GQL.IUserByIdOnQueryArguments) => {
            return await User.findOneOrFail({where:{id}});
        }
    },
    Mutation: {
        register: async (_: any, {firstName, lastName, email, password}: GQL.IRegisterOnMutationArguments) => {
            const hashedPassword = await hash(password, 10);
            const user = User.create({
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: hashedPassword
            });

            return await user.save();
        }
    }
}
