import express, { Request, Response } from 'express';
import { AuthenticateUserController } from './Application/AuthenticateUserController';
import { GetUserProfileController } from './Application/GetUserProfileController';
import { RegisterUserController } from './Application/RegisterUserController';
import { AuthenticateUserUseCase } from './Domain/UseCases/AuthenticateUser';
import { GetUserProfileUseCase } from './Domain/UseCases/GetUserProfile';
import { RegisterUserUseCase } from './Domain/UseCases/RegisterUserUseCase';
import { UserRepositoryDatabase } from './Infrastructure/Persistency/UserRepositoryDatabase';

const app = express();
app.use(express.json());

// Inicializando componentes
const userRepository = new UserRepositoryDatabase();
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const getUserProfileUseCase = new GetUserProfileUseCase(userRepository);
const registerUserUseCase = new RegisterUserUseCase(userRepository);

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);
const getUserProfileController = new GetUserProfileController(getUserProfileUseCase);
const registerUserController = new RegisterUserController(registerUserUseCase);

// Endpoint para registrar usuário
app.post('/register', async (req: Request, res: Response) => {
    try {
        await registerUserController.handle(req, res);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
        }
    }
});

// Endpoint para autenticar usuário
app.post('/authenticate', async (req: Request, res: Response) => {
    try {
        await authenticateUserController.handle(req, res);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
        }
    }
});

// Endpoint para obter o perfil do usuário
app.get('/user/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        await getUserProfileController.handle(req, res);
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
        }
    }
});

// Configurando a porta
const PORT = process.env.PORT || 3081;
app.listen(PORT, () => {
  console.log(`O servidor está sendo executado na porta ${PORT}`);
});
