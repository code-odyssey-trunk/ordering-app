import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger = new Logger();
  getHello(): string {
    return 'Hello World!';
  }

  
  bill(data: any) {
    this.logger.log(data);
  }
}
