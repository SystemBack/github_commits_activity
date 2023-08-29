# GitHub Commit Activity Explorer

This is a repo that shows the last year's commits by repo, you can select any repo that is public.

## Requirements

- Docker & Docker Compose
- Internet Connection

## Set up

1. Download this [repo](https://github.com/SystemBack/github_commits_activity).
2. Create your Token on [GitHub Developer Settings](https://github.com/settings/tokens) just with read permissions.
3. Rename the file `.evn-example` to `.env` and put the value of the token created in the previous step.
4. Put the API version as well in this case I used the version `2022-11-28`.
5. Run these docker compose commands `docker-compose build` & `docker-compose up -d` to download the image and start the container.
6. Go to [localhost](http://localhost/) and enjoy the app :D

## Resources

- [Docker & Docker Compose](https://www.docker.com/products/docker-desktop/)
- [Vite + React](https://vitejs.dev/guide/)
- [Tailwindcss](https://tailwindcss.com/)
- [Octokit](https://github.com/octokit/octokit.js)
- [Recharts](https://recharts.org/en-US/)
- [Moment.js](https://momentjs.com/)
- [Github API](https://docs.github.com/en/rest?apiVersion=2022-11-28)

### Questions

- [Pre-Assignment Question & Answer](./questions/pre.md)

- [Post-Assignment Question & Answer](./questions/post.md)

I enjoyed this app, please follow me at Github [SystemBack](https://github.com/SystemBack)
