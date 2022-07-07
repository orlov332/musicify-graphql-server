import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class SecurityService {
  constructor(@Inject(REQUEST) private readonly request) {}

  getAuthHeaders() {
    const authorizationHeader =
      this.request.req.headers['authorization'] ||
      this.request.req.headers['Authorization'];
    return { Authorization: authorizationHeader };
  }
}
