# briefica.ai

An AI-powered React application that generates UI components from natural language prompts. Users can describe a component, and the system returns generated UI code with a smooth loading experience and theme support.

---

## Features

- AI-based component generation from text prompts  
- Dark/Light theme toggle using React Context  
- Loading skeleton while AI response is generated  
- Error handling for empty input or API failures  
- Dynamic rendering of generated component output  
- Responsive UI with Tailwind CSS styling  
- Real-time input handling and state management  

---

## Tech Stack

- React.js  
- Tailwind CSS  
- React Context API  
- React Icons  
- External AI API (via generateContent helper)

---

## How It Works

1. User enters a prompt in the input bar  
2. App sends request using `generateContent()`  
3. AI returns component code  
4. UI renders:
   - Skeleton while loading  
   - Generated component after response  

---

## Theme System

- React Context API (`ThemeContext`)  
- Adds/removes `dark` class on `<html>`  
- Easily extendable for localStorage persistence  

---

## Error Handling

- Empty input validation  
- API error catching  
- User-friendly error messages  

---

## Future Improvements

- Save generated components history  
- Add copy-to-clipboard feature  
- Code preview mode  
- Authentication system  
- Database storage for components  

---
