# AI_Samp

A secure Node.js sample for interacting with the OpenAI API.

## Features

- Uses [OpenAI Node.js SDK](https://www.npmjs.com/package/openai)
- Loads sensitive credentials from environment variables
- Example of a simple chat completion request
- Follows best practices for configuration and dependency management

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- An OpenAI API key

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/github_copilot.git
   cd github_copilot
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Copy the example environment file and set your credentials:
   ```sh
   cp .env.example .env
   # Edit .env and add your GITHUB_TOKEN (OpenAI API key)
   ```

### Usage

Run the sample script:

```sh
node sample.js
```

## Security Considerations

- **Never commit your `.env` file or API keys to version control.**
- All sensitive configuration is loaded from environment variables.
- Dependencies are kept up-to-date to minimize vulnerabilities.

## Project Structure

```
.
├── .env.example      # Environment variable template
├── .gitignore
├── package.json
├── sample.js         # Main sample script
└── README.md
```

## Best Practices

- Use environment variables for all secrets and API keys.
- Keep dependencies updated and audit regularly.
- Avoid logging sensitive data.
- Use `.gitignore` to prevent accidental commits of sensitive files.
