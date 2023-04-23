import camelcaseKeys from 'camelcase-keys';
import { ApiService } from '../api.service';

export class QuestionApi extends ApiService {
  constructor() {
    super();
  }

  public async getList({ amount, category, type }: { amount: number; category: number; type: string }) {
    const {
      data: { results },
    } = await this.api.get('/api.php', {
      params: {
        amount,
        category,
        type,
      },
    });

    const response = results.map((item: any) => {
      return {
        ...item,
        result: false,
      };
    });

    return camelcaseKeys(response);
  }
}
