FROM node:12
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
RUN npm i npm@latest -g
RUN mkdir /opt/node_app && chown node:node /opt/node_app
WORKDIR /opt/node_app
USER node
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH
HEALTHCHECK --interval=30s CMD node healthcheck.js
WORKDIR /opt/node_app/app
COPY . .
COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]
CMD [ "node", "./bin/www" ]
