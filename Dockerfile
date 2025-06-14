#
# Base
#
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

#
# Dev
#
FROM base AS dev
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

#
# Build
#
FROM base AS build
RUN npm install
COPY . .
RUN npm run build

#
# Prod
#
FROM node:22-alpine AS prod
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm", "start"]
