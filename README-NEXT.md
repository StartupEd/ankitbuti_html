# Ankit Buti — Next.js App

This is the Next.js version of the portfolio site, with API routes, MongoDB, and OpenAI integration.

## Setup

1. **Install dependencies** (already done if you ran `npm install`):
   ```bash
   npm install
   ```

2. **Environment variables**  
   Copy `.env.example` to `.env.local` and fill in:
   - `MONGODB_URI` — MongoDB connection string (e.g. from [MongoDB Atlas](https://www.mongodb.com/atlas))
   - `OPENAI_API_KEY` — API key from [OpenAI](https://platform.openai.com/api-keys)
   - `NEXT_PUBLIC_GA_ID` — Optional; Google Analytics ID (e.g. `G-SPWB0RYRVG`)

   ```bash
   cp .env.example .env.local
   ```

3. **Run in development**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## API Endpoints

- **POST `/api/newsletter`**  
  Body: `{ "email": "user@example.com", "domain": "https://..." }`  
  Stores the email in MongoDB (`subscribers` collection). Returns `{ "message": "..." }`.

- **POST `/api/chat`**  
  Body: `{ "message": "What did Ankit do at Startuped?" }`  
  Uses OpenAI to answer questions about Ankit’s profile. Returns `{ "reply": "..." }`.

## MongoDB

- **Database**: Use the default DB from your connection string (or create one, e.g. `ankitbuti`).
- **Collection**: `subscribers` — used by the newsletter signup. Documents: `{ email, domain?, createdAt, source }`.

## Project structure

- `app/` — App Router: `layout.tsx`, `page.tsx`, `api/` routes, `globals.css`
- `components/` — React components (Header, Experience, Newsletter, Chat, etc.)
- `data/` — Static data (experience, boards, education, articles, blogs)
- `lib/` — `mongodb.ts` (getDb), `openai.ts` (OpenAI client + profile system prompt)
- `public/images/` — Static images (copied from original `images/`)
