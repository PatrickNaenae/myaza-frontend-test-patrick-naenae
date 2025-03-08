## Table of Contents

1. [Project Setup](#project-setup)
2. [Assumptions](#assumptions)
3. [Running the Project Locally](#running-the-project-locally)
4. [Additional Notes](#additional-notes)
5. [Technologies Used](#technologies-used)

---

## Project Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PatrickNaenae/myaza-frontend-test-patrick-naenae.git

   ```

2. Install dependencies:

   ```bash
   pnpm install

   ```

3. Set up environment variables:

   - Create a .env.local file in the root directory.
   - Add the required environment variables (e.g., API keys, endpoints):
     **AUTH_SECRET**=your_next_auth_secret_key  
     Run the following command to generate your key:

   ```bash
    npx auth secret

   ```

   **GOOGLE_API_KEY**=your_google_gemini_api_key [Get Key here](https://aistudio.google.com/apikey)

4. Run development server:

   ```bash
   pnpm run dev

   ```

## Assumptions

During development, the following assumptions were made:

1. **Authentication**:
   - Authentication is handled using **NextAuth.js**.
   - A dummy user account has been created for testing purposes:
     - **Email**: `testuser@uifry.com`
     - **Password**: `password123`
   - This account can be used to log into the platform for testing and development.

## Running the Project Locally

1. Start the development server:

   ```bash
   pnpm dev

   ```

2. Open your browser and navigate to:
   http://localhost:3000

3. Explore the app:

- Use the following test account to log in:
  Email: testuser@uifry.com
  Password: password123

## Additional Notes

1. **Onboarding Tour**:

   - A guided tour is available to help new users navigate the dashboard.

2. **Chatbox AI**:

   - A chatbox AI is integrated into the platform to assist users.
   - The AI is designed to answer questions **only related to Uifry**,

3. **Unit Tests**
   - Run unit tests using the following command:
   ```bash
    pnpm test

   ```

## Technologies Used

### Frontend

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript.
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component library built on top of Tailwind CSS and Radix UI.
- [Aceternity UI](https://aceternity.com/) - Modern UI library for building animated and interactive components.
- [React Joyride](https://github.com/gilbarbara/react-joyride) - Guided tour for onboarding users.
- [NextAuth.js](https://next-auth.js.org/) - Authentication library for Next.js.

### AI Integration

- [Google Gemini API](https://aistudio.google.com/prompts/new_chat) - API for integrating the Gemini AI model, powering the chatbox for Uifry-related queries.

### Testing

- [Jest](https://jestjs.io/docs/getting-started) - JavaScript testing framework for unit tests.

### Tools

- [pnpm](https://pnpm.io/) - Fast, disk-space-efficient package manager.
- [ESLint](https://eslint.org/) - Linting tool for JavaScript/TypeScript.
