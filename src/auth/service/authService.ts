import { getConnection } from "typeorm";
import { UserLoginDto, UserSignupDto } from "../../dto/user.dto";
import { User } from "../../entities/user.entity";


export const loginUser = async (userLoginDetails: UserLoginDto): Promise<User | null> => {
    const { username, password } = userLoginDetails;
    const userRepository = getConnection().getRepository(User);
    const user = await userRepository.findOne({
        where: {
            username, 
            password, 
        }
    })
    return user;
};

export const signupUser = async (userSignupDetails: UserSignupDto): Promise<User | null> => {
    const { username , password, email, phone } = userSignupDetails;
    const userRepository = getConnection().getRepository(User)
    const userEntity = userRepository.create({
        username,
        password,
        email, 
        phone
    });
    const newUser = await userRepository.save(userEntity)
    return newUser;
};
