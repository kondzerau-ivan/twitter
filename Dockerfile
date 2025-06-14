#
# Base
#
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

#
# Build
#
FROM base AS build
ENV NODE_ENV=development
RUN npm ci
COPY . .
RUN npm run build

#
# Dev
#
FROM base AS dev
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

#
# Prod
#
# docker build --build-arg PORT=8080 .
FROM base AS prod
ARG PORT=3000
ENV PORT=${PORT}
ENV NODE_ENV=production
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE ${PORT}
CMD ["npm", "start"]
