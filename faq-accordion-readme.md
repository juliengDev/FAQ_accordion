# FAQ Accordion Component

![Design preview for the FAQ accordion coding challenge](/public/images/design/desktop-preview.jpg)

## Overview

This project is an **interactive FAQ accordion component** that allows users to **expand and collapse answers** to frequently asked questions. It prioritizes **accessibility**, **keyboard navigation**, and **responsive design**, ensuring an intuitive experience across all devices.

---

### Key Features

- **Accordion functionality** for expanding/collapsing answers  
- **Full keyboard navigation support** for seamless interaction  
- **Responsive design** adapting to different screen sizes  
- **Hover and focus states** for better user feedback  
- **ARIA attributes** for improved screen reader support  

---

## Accessibility Focus

This project follows **best accessibility practices**, ensuring usability for all users:
- **Semantic HTML5 elements** for proper document structure  
- **ARIA attributes**:
  - `aria-expanded` to indicate the accordion state  
  - `aria-controls` to link buttons to corresponding content  
  - `role="region"` to provide context to assistive technologies  
- **Keyboard-friendly navigation**:
  - Users can open/close questions using `Enter` or `Space`  
  - Focus is managed dynamically for smooth navigation  
- **Screen reader support** with descriptive labeling  

---

## Accordion Functionality

The accordion is built with a **focus on usability and smooth interactions**:

1. **Expand/Collapse Answers**  
   - Clicking a question toggles the visibility of the corresponding answer  
   - Only one question is open at a time for better readability  

2. **Keyboard Navigation**  
   - Arrow keys navigate between questions  
   - `Enter` or `Space` expands/collapses an answer  

3. **Smooth Transitions**  
   - CSS animations create a **fluid opening/closing effect**  
   - Optimized for **performance and responsiveness**  

---

### Code Examples

#### TypeScript - Accordion Toggle Logic
```typescript
const toggleAccordion = (button: HTMLButtonElement) => {
  const content = document.getElementById(button.getAttribute("aria-controls")!);
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  
  button.setAttribute("aria-expanded", String(!isExpanded));
  content?.setAttribute("aria-hidden", String(isExpanded));
};
```

### Accessible Accordion Markup
```html
<button aria-expanded="false" aria-controls="faq1">
  What is TypeScript?
</button>
<div id="faq1" role="region" aria-hidden="true">
  TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
</div>
```

---

## Live Demo

[FAQ Accordion Component](#)

---

## Built With

- TypeScript for improved maintainability
- Semantic HTML5 for structured content
- SCSS (BEM methodology) for modular styling
- Mobile-first workflow for optimal responsiveness
- ARIA Attributes for enhanced accessibility
- CSS Transitions for smooth animations

---

## Continued Development

Future improvements planned:
- Multi-panel support (allowing multiple questions to stay open)
- Advanced animations for a more dynamic experience
- Improved keyboard navigation with Home/End keys support
- Dark mode support for enhanced usability

---

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**
```bash
git clone https://github.com/juliengDev/faq-accordion-component.git
cd faq-accordion-component
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview the production build**
```bash
npm run preview
```

---

## Useful Resources

- [GitHub Repository: FAQ Accordion Component](#)
- [MDN Web Docs on ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - Guide to implementing ARIA for better accessibility
- [CSS-Tricks: CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/) - Learn how to create smooth animations
- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) - Best practices for accessible web content

---

## Author

- **Portfolio** - [Julien Gilbert](#)
- **GitHub** - [@juliengDev](#)
- **LinkedIn** - [Julien Gilbert](#)

*Feel free to reach out if you have any feedback or questions!* 🚀
