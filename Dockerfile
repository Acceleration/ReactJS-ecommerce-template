###
# Build stage
###
FROM node:12-alpine AS builder
WORKDIR /build

COPY package.json package-lock.json ./

COPY . .
RUN npm install
RUN npm run build

###
# Exec Stage
###
FROM node:12-alpine
WORKDIR /app

COPY package.json package-lock.json ./


CMD ["npm", "run", "start:production"]