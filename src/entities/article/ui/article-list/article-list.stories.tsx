import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { ArticleView } from '../../model/consts'
import { Article } from '../../model/types/article'

import { ArticleList } from './article-list'

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

const data = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'What new in Javascript right now',
  img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'dfkadyr',
    avatar: 'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png'
  },
  type: ['IT'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. ' +
          'В нашем случае речь идёт о браузерах и о серверной платформе Node.js. ' +
          'Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, ' +
          'на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой ' +
          'JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. ' +
          'Так, если говорить об обычном использовании программ на JavaScript, ' +
          'они загружаются в браузер для обеспечения работы веб-страниц. ' +
          'Как правило, код оформляют в виде отдельных файлов с расширением .js, ' +
          'которые подключают к веб-страницам, но программный код можно включать и непосредственно ' +
          'в код страницы. Всё это делается с помощью тега <script>. ' +
          '' +
          'Когда браузер обнаруживает такой код, он выполняет его. ' +
          'Подробности о теге script можно посмотреть на сайте w3school.com. ' +
          'В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами ' +
          'JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами ' +
          'данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. ' +
          'А именно, создадим в каком-нибудь текстовом редакторе (например в VS Code или в Notepad++) ' +
          'новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '4',
      type: 'CODE',
      // eslint-disable-next-line max-len
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. ' +
          'В нашем случае речь идёт о браузерах и о серверной платформе Node.js. ' +
          'Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, ' +
          'на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой ' +
          'JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. ' +
          'Так, если говорить об обычном использовании программ на JavaScript, ' +
          'они загружаются в браузер для обеспечения работы веб-страниц. ' +
          'Как правило, код оформляют в виде отдельных файлов с расширением .js, ' +
          'которые подключают к веб-страницам, но программный код можно включать и непосредственно ' +
          'в код страницы. Всё это делается с помощью тега <script>. ' +
          '' +
          'Когда браузер обнаруживает такой код, он выполняет его. ' +
          'Подробности о теге script можно посмотреть на сайте w3school.com. ' +
          'В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами ' +
          'JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами ' +
          'данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. ' +
          'А именно, создадим в каком-нибудь текстовом редакторе (например в VS Code или в Notepad++) ' +
          'новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '3',
      type: 'CODE',
      // eslint-disable-next-line max-len
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. ' +
          'В нашем случае речь идёт о браузерах и о серверной платформе Node.js. ' +
          'Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, ' +
          'на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой ' +
          'JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. ' +
          'Так, если говорить об обычном использовании программ на JavaScript, ' +
          'они загружаются в браузер для обеспечения работы веб-страниц. ' +
          'Как правило, код оформляют в виде отдельных файлов с расширением .js, ' +
          'которые подключают к веб-страницам, но программный код можно включать и непосредственно ' +
          'в код страницы. Всё это делается с помощью тега <script>. ' +
          '' +
          'Когда браузер обнаруживает такой код, он выполняет его. ' +
          'Подробности о теге script можно посмотреть на сайте w3school.com. ' +
          'В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами ' +
          'JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами ' +
          'данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. ' +
          'А именно, создадим в каком-нибудь текстовом редакторе (например в VS Code или в Notepad++) ' +
          'новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. ' +
          'В нашем случае речь идёт о браузерах и о серверной платформе Node.js. ' +
          'Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, ' +
          'на настольном компьютере, это значит, что вы буквально в считанных секундах от своей ' +
          'первой JavaScript-программы.'
      ]
    }
  ]
} as Article

export const ListView = Template.bind({})
ListView.args = {
  articles: new Array(9).fill(0).map((_item, index) => ({
    ...data,
    id: String(index)
  })),
  isLoading: false,
  view: ArticleView.LIST
}

export const ListViewDark = Template.bind({})
ListViewDark.args = {
  articles: new Array(9).fill(0).map((_item, index) => ({
    ...data,
    id: String(index)
  })),
  isLoading: false,
  view: ArticleView.LIST
}
ListViewDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ListViewLoading = Template.bind({})
ListViewLoading.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.LIST
}
ListViewLoading.story = {
  parameters: {
    loki: { skip: true }
  }
}

export const CardView = Template.bind({})
CardView.args = {
  articles: new Array(9).fill(0).map((_item, index) => ({
    ...data,
    id: String(index)
  })),
  isLoading: false,
  view: ArticleView.CARD
}

export const CardViewDark = Template.bind({})
CardViewDark.args = {
  articles: new Array(9).fill(0).map((_item, index) => ({
    ...data,
    id: String(index)
  })),
  isLoading: false,
  view: ArticleView.CARD
}
CardViewDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CardViewLoading = Template.bind({})
CardViewLoading.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.CARD
}
CardViewLoading.story = {
  parameters: {
    loki: { skip: true }
  }
}
