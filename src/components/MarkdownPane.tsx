import MarkdownViewer from './MarkdownViewer'

function MarkdownPane() {
  return (
    <div className="mt-6">
      <MarkdownViewer
        content={`# Welcome to Windsurf

This is a simple React + TypeScript application built with Vite and styled with TailwindCSS.

## Features

- Centered headline
- Click counter
- Markdown viewer

## Getting Started

To run this application:

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Technologies Used

- React 18
- TypeScript
- Vite
- TailwindCSS
- React Markdown

Enjoy coding! 🚀`}
      />
    </div>
  )
}

export default MarkdownPane
