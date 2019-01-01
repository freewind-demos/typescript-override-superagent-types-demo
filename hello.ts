import * as superagent from 'superagent';
import {Response} from 'superagent';

interface FixedResponse extends Response {
  get(header: string): string;
  get(header: 'Set-Cookie'): string[];
}

superagent
    .get('http://test.com')
    .end((err, response) => {
      const fixedResponse: FixedResponse = response as FixedResponse;
      const cookies: string[] = fixedResponse.get('Set-Cookie');
      const otherHeader: string = fixedResponse.get('others');
    });
