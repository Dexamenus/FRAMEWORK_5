import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

//definisi interceptor untuk transformasi response
export interface StandardResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformResponseInterceptor <T> implements NestInterceptor <T, StandardResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse<T>> {
    const httpcontent = context.switchToHttp();
    const response = httpcontent.getResponse();
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((data: T) => ({
        success: true,
        statusCode,
        message: 'Success',
        data
      }))
    );
  }
}
