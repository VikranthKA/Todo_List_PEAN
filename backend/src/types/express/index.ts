import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string; // Adjust this type based on your actual user ID type
            };
        }
    }
}
