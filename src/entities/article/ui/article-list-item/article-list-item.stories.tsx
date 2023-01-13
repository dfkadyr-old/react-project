import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { ArticleView } from '../../model/consts'
import { Article } from '../../model/types/article'

import { ArticleListItem } from './article-list-item'

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />

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

export const PrimaryList = Template.bind({})
PrimaryList.args = {
  article: data,
  view: ArticleView.LIST
}
PrimaryList.decorators = [StoreDecorator({})]

export const PrimaryListDark = Template.bind({})
PrimaryListDark.args = {
  article: data,
  view: ArticleView.LIST
}
PrimaryListDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
