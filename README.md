## Avataaars generator

Avataaars generator is a simple web-based app for generating avatars developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), the original avatar is designed by [Pablo Stanley](https://twitter.com/pablostanley), the Sketch library can be [found here](http://www.avataaars.com/).

You can see it here: http://getavataaars.com

### Run the server

To run the web app locally for development, you can run

```bash
yarn install --frozen-lockfile
```

```bash
yarn start
```

### Run the server with Docker

Run in docker with this command

```bash
docker build -t avataaars-generator:latest . && docker run --rm -it --name avataaars-generator -p 3000:8080 avataaars-generator:latest
```

### React component

Besides generating avatars with this generator, you can also add avatar to your React app with our [React component](https://github.com/fangpenlin/avataaars).
