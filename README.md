## Avataaars generator

Avataaars generator is a simple web-based app for generating avatars developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), the original avatar is designed by [Pablo Stanley](https://twitter.com/pablostanley), the Sketch library can be [found here](http://www.avataaars.com/).

You can see it here: http://getavataaars.com

### Run the server

To run the web app locally for development, you can run

```bash
yarn start
```

### Run the server with Docker

To run the web app with docker, you can run

```bash
docker build -t getavataaars .
docker run -d -p 3000:3000 --name getavataaars --restart=always getavataaars
```

Then open http://localhost:3000/

### React component

Besides generating avatars with this generator, you can also add avatar to your React app with our [React component](https://github.com/fangpenlin/avataaars).
