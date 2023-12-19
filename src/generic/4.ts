/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  // Оголосіть тут необхідні властивості для базового класу Component
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

interface PageProps extends ComponentProps {
  title: string;
  // Додайте інші властивості, які потрібні для класу Page
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};