import { User } from "../Entities/User";
import { UserRepository } from "../UserRepository";
import bcrypt from 'bcrypt';

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string, password: string): Promise<User> {
    // Validar se o usuário já existe
    const existingUser = await this.userRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error('Usuário já existe');
    }

    // Hash da senha
    const hashedPassword = this.hashPassword(password);

    // Criar e salvar o novo usuário
    const newUser = await this.userRepository.saveUser({ name, email, password: hashedPassword });
    return newUser;
  }

  private hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
}
