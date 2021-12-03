import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  /**
   *
   * @param data
   * @returns
   */
  getData(data): string {
    // evaluar que query tenga los datos necesarios
    if (data.hasOwnProperty('code') && data.hasOwnProperty('status')) {
      fs.writeFileSync(
        'datos.json',
        JSON.stringify({ code: data.code, status: data.status }),
      );
      return 'Working...';
    }

    return 'Faltan campos';
  }
}
