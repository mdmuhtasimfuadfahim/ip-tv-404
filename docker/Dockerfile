# ── Stage 1: Build frontend ─────────────────────────────────────
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
ARG VITE_PROXY_URL=""
ARG VITE_BASE_URL="/"
ENV VITE_PROXY_URL=$VITE_PROXY_URL
ENV VITE_BASE_URL=$VITE_BASE_URL
RUN npm run build

# ── Stage 2: Backend + serve ────────────────────────────────────
FROM node:20-alpine AS production
WORKDIR /app

# Install backend deps
COPY backend/package*.json ./backend/
RUN cd backend && npm ci --omit=dev

# Copy backend source
COPY backend/ ./backend/

# Copy frontend source (for data sync)
COPY frontend/src/data/ ./frontend/src/data/

# Copy built frontend from stage 1
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

# Non-root user for security
RUN addgroup -S iptv && adduser -S iptv -G iptv
RUN chown -R iptv:iptv /app
USER iptv

WORKDIR /app/backend
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]
