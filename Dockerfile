FROM node:lts
EXPOSE 8080
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]
