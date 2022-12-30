import { Article } from '../../../src/entities/article'

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'БиологиЯ',
  img: 'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd' +
    '7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: [
    'SCIENCE'
  ],
  blocks: []
}

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'asasf' },
    body: article ?? defaultArticle
  }).then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asasf' }
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      createArticle(article?: Article): Chainable<Article>
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
