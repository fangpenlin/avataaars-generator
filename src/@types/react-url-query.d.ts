declare module 'react-url-query' {
  namespace UrlQueryParamTypes {
    const string: string
  }

  interface HOC {
    <ComponentProps>(
      Component:
        | React.ComponentClass<ComponentProps>
        | React.StatelessComponent<ComponentProps>
    ): React.ComponentClass<{}>
  }

  export function addUrlProps (options: any): HOC

  export function configureUrlQuery (options: any): void

  namespace UrlUpdateTypes {
    const replace: string
    const replaceIn: string
    const push: string
    const pushIn: string
  }
}
