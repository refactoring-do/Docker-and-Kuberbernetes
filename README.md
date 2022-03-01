# dockerizando un API en nodejs y desplegando a kubernetes
## Rebootcamp 2019 - `tendencias que lideran la industria del software`

[![relearning](ReLearning.jpg)](/https://refactoring.com.do/learning.html)

## Descripcion del proyecto.
| simple API para una tienda de suplementos

- [como instalar docker ](https://platzi.com/tutoriales/1432-docker/1779-como-instalar-docker-en-windows-y-mac/)
## Como usar

### En la raiz del proyecto encontrarras un archivo con el nombre `Dockerfile` el cual contiene lo siguiente:

```dockerfile
FROM node:latest

COPY ./ ./

RUN npm install

CMD [ "npm", "start" ]

```
Este archivo es que el se usa para crear lo que se conoce como `imagen de Docker`

Luego puede crear la `imagen de Docker`:

```console
$ docker build -t my-nodejs-app .
```

Y finalmente puedes correr la imagen docker
```console
$ docker run -d -p 3000:3000 my-nodejs-app my-nodejs-app
```


- Alexis Mateo ([alexismateo](https://github.com/alexismateo))

## Desplegando a Kubernetes.
- Para configurar tu ambiente de kubernetes de formar local debes instalar `Minikube`, puedes usar el siguiente [link](https://kubernetes-io-vnext-staging.netlify.com/es/docs/tasks/tools/install-minikube/) para aprender a como intall minikube en tu maquina.

- Una vez `Minikube` instalado usar el siguiente comando :

    ```console
    $ kubectl apply -f Kubernetes/deployment.yml
    ```
- para ver tus contenedores en kubernetes:
    ```console
    $ minikube proxy
    ```
