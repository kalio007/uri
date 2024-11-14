FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
