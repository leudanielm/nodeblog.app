const BASE_URL = 'https://api.nodeblog.app';

class API {
  public async getArticles(): Promise<any> {
    return await this.request('articles');
  }

  public async createArticle(body: Record<any, any>) {
    await this.request('articles', body);
  }

  public async getArticle(slug: string) {
    return await this.request(`articles/${slug}`);
  }

  private async request(path: string, body?: Record<any, any>) {
    const options = body && {
      method: 'POST',
      body: JSON.stringify(body),
    };

    const response = await fetch(`${BASE_URL}/${path}`, options);
    const jsonBody = await response.json();
    return jsonBody;
  }
}

export default new API();
