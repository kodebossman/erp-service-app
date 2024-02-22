# https://medium.com/geekculture/dockerizing-a-react-application-with-multi-stage-docker-build-4a5c6ca68166
# https://typeofnan.dev/how-to-serve-a-react-app-with-nginx-in-docker/
# pull official base image
FROM node:16.15-alpine as buildStage
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"
COPY package.json ./
RUN yarn install  && yarn cache clean
# Copies everything over to Docker
COPY . ./
RUN yarn build
#CMD ["npm", "run",  "production"]
#RUN npm run build

#pull the official nginx base image
FROM nginx:1.19.0

# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from build stage
COPY --from=buildStage /app/build .
EXPOSE 3060

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
# COPY ./env.sh .
# COPY .env .

# Make our shell script executable
#RUN chmod +x env.sh

# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]