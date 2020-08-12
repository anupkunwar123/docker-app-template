FROM node:lts
WORKDIR /app
ARG PORT=3030
ENV PORT $PORT
COPY package*.json ./
RUN npm install --only=prod
COPY dist ./dist
COPY server ./server
WORKDIR client
COPY client/package*.json ./
COPY client/public ./public
RUN npm install --only=prod
RUN cd ..
WORKDIR /app
EXPOSE 3030
CMD ["node", "dist/server/index.js"]

