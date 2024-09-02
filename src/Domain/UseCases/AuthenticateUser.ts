import { generateToken } from '../../Infrastructure/utils/tokenUtils';
import { User } from '../Entities/User';
import { UserRepository } from '../UserRepository';


interface AuthenticateUserRequest {
  email: string;
  password: string;
}

interface AuthenticateUserResponse {
  user: User;
  token: string;
}

export class AuthenticateUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(authenticateUserRequest: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const user = await this.userRepository.findUserByEmail(authenticateUserRequest.email);
    if (!user || !this.validatePassword(user, authenticateUserRequest.password)) {
      throw new Error('E-mail ou senha inválidos');
    }
    const token = generateToken(user.id);
    return { user, token };
  }
    // Implementação da validação de senha
  private validatePassword(user: User, password: string): boolean {
    return true; // ou false
  }
}

