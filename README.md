# Simple 3-Tier Blog App

A minimal Node/Express + React + MongoDB blog app, built for you to practice
dockerizing yourself. No Dockerfiles or docker-compose are included on purpose.

## Structure
```
blog-app/
  backend/    # Express API (port 5000)
  frontend/   # React app via Vite (port 5173)
```

## Tiers
1. **Frontend** — React (Vite), talks to the API via `VITE_API_URL`.
2. **Backend** — Express + Mongoose, exposes REST endpoints under `/api/posts`.
3. **Database** — MongoDB (local container or Atlas cloud), connected via `MONGODB_URI`.

## Env files
Copy each `.env.example` to `.env` before running/building:

### backend/.env
```
PORT=5000
MONGODB_URI=mongodb://mongodb:27017/blogdb
CLIENT_ORIGIN=http://localhost:5173
```
- `MONGODB_URI` — if you run Mongo as a container in the same docker
  network, use the container/service name as the host, e.g.
  `mongodb://mongodb:27017/blogdb` (here `mongodb` is whatever you name
  the Mongo service in your compose file).
- To use MongoDB Atlas (cloud) instead of a local container, swap in your
  Atlas SRV string instead:
  `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/blogdb`

### frontend/.env
```
VITE_API_URL=http://localhost:5000/api
```
- This is used by the browser (not container-to-container), so keep it as
  `localhost:<published-port>` — whatever port you map the backend
  container to on your host.

## Running without Docker (sanity check first)
```bash
# backend
cd backend
cp .env.example .env
npm install
npm run dev

# frontend (separate terminal)
cd frontend
cp .env.example .env
npm install
npm run dev
```

## API Endpoints
- `GET    /api/posts`
- `GET    /api/posts/:id`
- `POST   /api/posts`      body: { title, content, author }
- `PUT    /api/posts/:id`
- `DELETE /api/posts/:id`
- `GET    /api/health`

## Docker practice notes
- Build the backend image from `backend/` (needs `npm install` + `node server.js`, port 5000).
- Build the frontend image from `frontend/` — for dev use `npm run dev`,
  or for a production image, `npm run build` then serve the `dist/` folder
  with something like nginx.
- Run MongoDB as its own container (official `mongo` image) or point
  `MONGODB_URI` at Atlas instead and skip a Mongo container entirely.
- Put backend + frontend + mongo on the same user-defined docker network so
  they can resolve each other by service/container name.
