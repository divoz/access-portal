   # Access Request Portal

   Employees request access to company systems. An AI agent investigates each
   request against company policy and recommends a decision; a manager makes
   the final call.

   **Status:** in progress (milestone 1 of 8: project setup)

   **Stack:** NestJS, PostgreSQL, Prisma, React (coming), Anthropic API (coming),
   AWS + Terraform (coming)

   ## Run locally
   
    docker compose up -d
    npm install
    cd apps/api
    npx prisma migrate dev
    npx prisma db seed
    cd ../..
    npm run dev:api
