# 🚀 Landing Website Documentation

This is a modular, scroll-based landing page built with **React**, **TailwindCSS**, and several libraries for interaction and effects.

---

## 🧱 General Styling

### 🔘 Button Component
- Displays a **marker SVG**, **icon**, and **button text**.
- Styled with glowing edges using two utility classes:
  ```jsx
  <button className="relative">
    {/* content */}
    <span className="glow-before glow-after" />
  </button>
  ```
- `glow-before`: gradient effect at the top  
- `glow-after`: gradient effect at the bottom  
- Returns either a `<button>` or a `<a>` depending on context.

---

## 📁 `/constants/index.jsx`

- Centralized config file for **site content**.
- Contains:
  - Arrays of objects for each section’s content
  - SVG icon components  
- All data is fetched from here dynamically during section rendering.

---

## 🧭 Header Section

### 💻 Desktop View
- Displays a navigation bar (`nav > ul > li`)
- The nav bar is `fixed top-0 left-0 z-50 w-full` for persistent positioning.
- When scrolled:
  - Background darkens via state (`hasScroll`)
  - Logic handled in a `useEffect` hook:
    ```jsx
    useEffect(() => {
      const handleScroll = () => setHasScroll(window.scrollY > 32);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    ```
  - Smooth scroll via `react-scroll`:
    ```jsx
    <Link
      to="<section_id>"
      smooth
      spy
      offset={-100}
      activeClass="nav-active"
      className="transition-colors duration-500"
    >
      {title}
    </Link>
    ```
- **Smooth transitions** are added using Tailwind classes like `transition duration-300`.
- `smooth` property in **Link** element is for smooth scrolling.
- `spy` property in **Link** element enables the link to **"watch"** the scroll position and add an active class when its target section is in view.
- `offset={-100px}` property in **Link** element adjusts the final scroll position by -100px, because of the fixed navigation bar.
- `activeClass="nav-active"` property in **Link** element, because of spy setting, when the section is reached, the respective link is styled.
- 5 links including the logo navigate to sections.

### 📱 Mobile View
- Displays:
  - Logo
  - Menu icon
- When menu icon is clicked:
  - Opens navigation menu with 4 links
  - Menu includes background images and animations
  - Icon toggles between **hamburger** and **close**
  - Clicking any link:
    - Scrolls to section
    - Closes the menu
  - Opening/closing handled by local `state`.

---

## 🦸‍♂️ Hero Section

- Uses `react-scroll`’s `<Element name="hero">` to mark this section.
- Includes:
  - Introductory text about the site
  - A button that links to **Features** section

---

## 🛠️ Features Section

- Displays a list of features with:
  - Icon
  - Caption
  - Title
  - Description
  - Button
- Layout:
  - **Flexbox**
  - At the end of the section, **additional details** are shown on larger screens

---

## 💰 Pricing Section

- Supports **Monthly** and **Annual** pricing views
- Controlled by state:
  - Active pricing tab is highlighted
  - Display updates based on selection
- Animated pricing using [`react-countup`](https://www.npmjs.com/package/react-countup):
  ```jsx
  <CountUp
    start={plan.priceMonthly}
    end={monthly ? plan.priceMonthly : plan.priceYearly}
    duration={0.4}
    useEasing={false}
    preserveValue
  />
  ```
- Pricing cards include:
  - Icon
  - Plan type
  - Price
  - List of features
  - Button
- Second card styled as a **Limited Offer**
- `first:`, `last:`, `odd:`, `even:` utilities used for distinct card styles
- `preserveValue`- If the component re-renders (for example, switching between monthly and yearly pricing), preserveValue={true} will retain the previously counted-up value and just count up/down from there to the new end value. Without preserveValue, it would reset to the start value each time and animate from scratch.
- `useEasing`- This tells the animation not to use easing, meaning the number will change at a constant speed—linear animation. By default, CountUp uses an ease-out effect: It starts fast and slows down towards the end — makes it feel more natural or smooth.
---

## ❓ FAQ Section

- Rendered in **one column** on mobile, **two columns** on desktop
- Splitting logic:
  ```js
  const halfLength = Math.floor(faq.length / 2);
  const firstHalf = faq.splice(0, halfLength);
  const secondHalf = faq.splice(halfLength);
  ```
- Each FAQ is rendered via the `FaqItem` component:
  - Controlled by `activeId` state
  - Uses `react-slidedown` for showing the answer:
    ```jsx
    <SlideDown>
      {activeId === item.id && (
        <div>{item.answer}</div>
      )}
    </SlideDown>
    ```
  - Displays a **plus** icon that toggles to **minus** when expanded (`before:` and `after:` styling)

---

## 🗣️ Testimonials Section

- Testimonials displayed in:
  - **Single column** on smaller screens
  - **Two columns** on larger screens
- Same logic as FAQ section for splitting content

---

## 📥 Download Section

- Displays platform icons for:
  - 📱 iOS
  - 🤖 Android
  - 🪟 Windows
- Clicking each icon opens a dummy **preview version**

---
