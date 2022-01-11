import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { promises as fs } from 'fs';
import * as _fs from 'fs';

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
      _fs.writeFileSync(
        'datos.json',
        JSON.stringify({ code: data.code, status: data.status }),
      );
      return 'Working...';
    }

    return 'Faltan campos';
  }

  /**
   *
   * @param data
   * @returns
   */
  async getResultData():Promise<string> {
    return JSON.parse( await fs.readFile('datos.json', 'utf8') );
  }
}
