# Content Placeholder

## Overview

The **Content Placeholder** project is a dynamic loading animation effect that mimics a content placeholder while waiting for the actual content to load. After a simulated delay, the real content is displayed, creating a smooth transition for users.

---

## Features

- **Loading Animation**: Animated placeholders mimic the layout of the final content while data is being fetched.
- **Dynamic Content Update**: Actual content replaces placeholders after a set timeout (e.g., 2.5 seconds).
- **User-Friendly Design**: The animation and transition make the content-loading experience seamless.

---

## Project Structure

The project includes the following files:

- `index.html`: Defines the structure of the card and placeholders.
- `style.css`: Adds styles for the placeholders, animation effects, and final content.
- `script.js`: Manages the logic to simulate data loading and replace placeholders with actual content.

---

## Screenshots

### 1. Placeholder State (Loading Content)

When the page first loads, animated placeholders are shown while waiting for the content.

![Placeholder State](https://github.com/imtahirnaseer/Content-Placeholder/blob/680ae43e1978ff122ea3beaa395323a3eeab905a/Screenshot%202024-12-08%20182052.png)

---

### 2. Content Loaded

After the loading process completes (2.5 seconds), the actual content is displayed.

![Content Loaded State](https://github.com/imtahirnaseer/Content-Placeholder/blob/680ae43e1978ff122ea3beaa395323a3eeab905a/Screenshot%202024-12-08%20182105.png)

---

## How It Works

1. **Initial Placeholder State**:
   - When the page loads, all elements (e.g., title, excerpt, profile image) have `animated-bg` and `animated-bg-text` classes that add placeholder animations.

2. **Simulated Content Fetching**:
   - A `setTimeout` function is used to simulate a delay of 2.5 seconds to represent data fetching.

3. **Content Replacement**:
   - After the delay, the placeholders are replaced with actual content using JavaScript.
   - The placeholder classes (`animated-bg` and `animated-bg-text`) are removed, revealing the final content.

---

## Live Demo

You can see the **Content Placeholder** in action by visiting the following link:

[Live Demo](https://imtahirnaseer.github.io/Content-Placeholder/)

---

## How to Run the Project Locally

To run this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
