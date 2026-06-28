# softwear-lab.github.io

Welcome to the **Softwear Lab** homepage! This is a personal portfolio and hub bridging the gap between tactile textile craft and software engineering.

## 🚀 Live Page
The website is hosted on GitHub Pages: [https://softwear-lab.github.io](https://softwear-lab.github.io)

## 🛠 Features Included
- **Responsive Profile & Hero**: Features a modern dark theme, animated glassmorphic background blobs, and customized visual elements.
- **Interactive Tool Viewports**: Responsive, mock-browser wrappers containing inline frames (`iframe`) for our active tools:
  - [Knitting Chart Generator](https://softwear-lab.github.io/knitting-chart-generator/)
  - [Punchcard Scanner](https://softwear-lab.github.io/punchcard-scanner/)
- **Lazy Loading**: Embeds are loaded on-demand ("Run Inline") to preserve memory, CPU cycles, and load speed.
- **In-Page Maximize**: The mock-browser viewports can be maximized to take up the full screen directly inside the user's browser tab.
- **Reload Controls**: Easily refresh the active state of embedded tools.
- **Scrollspy Navigation**: Automatic highlighters for the portfolio sections.

## 💻 Local Development
To preview the webpage locally, run a static server from the project directory:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (http-server)
npx http-server .
```

Then open your browser and navigate to `http://localhost:8000`.

## 📁 Repository Structure
- `index.html`: Webpage structure and SEO-optimized markup.
- `style.css`: Design system, layouts, custom transitions, animations, and typography imports.
- `script.js`: Interactive viewport loading, fullscreen states, reload behavior, and navigation listeners.
