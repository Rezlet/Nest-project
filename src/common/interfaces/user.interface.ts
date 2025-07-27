// src/common/interfaces/request-with-user.interface.ts
import { Request } from 'express';
import { $Enums } from '@prisma/client';

export interface RequestWithUser extends Request {
  user: {
    sub: string;
    email: string;
    role: string;
  };
}

export interface AuthenticatedRequest extends Request {
  user: {
    role: $Enums.Role;
  };
}
