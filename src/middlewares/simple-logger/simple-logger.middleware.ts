import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SimpleLoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`request masuk methode : ${req.method} url : ${req.originalUrl}`);
    next();
  }
}
