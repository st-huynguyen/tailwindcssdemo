## What is TailwindCSS?

TailwindCSS is basically a utility-first CSS framework for rapidly building custom user interfaces.

Each utility class presents only CSS property.

Tailwind provides a lot of utility classes.

## Ultility classes

Traditionally, whenever you need to style something on the web, you write CSS.

With Tailwind, you style elements by applying pre-existing classes directly in your HTML.

## Advantages

- Not waste energy inventing class names.
- CSS stops growing.
- When building for production, unused classes are automatically removed.
- Build a reusable component by using @apply directive.
- Avoid dealing with media queries in CSS by using Tailwind’s screen sizes.
- Have the possibility to use the Dark mode.
- Easy to customize everything in the tailwind.config.js file.

## Disavantages

- Many classes in HTML file, make it more messy.
- Take some time to get used to the framework and learn the names of all the classes.

## Extracting utility patterns with @apply

Let’s say you’re reusing a certain button style in multiple places. Tailwind has a way to reuse styling with @apply.

Using Tailwind in this way has got more similarities with how you would write regular CSS.

If you start using @apply for everything, you are basically just writing CSS again and throwing away all of the workflow and maintainability advantages Tailwind gives you.

## Handling states, responsive and dark mode

## Custom styles

### Adding base style

To set some defaults style for the page, adding some classes to the `html` or `body` elements.

To add own default base styles for HTML elements, use the `@layer` directive to add those styles to Tailwind’s base layer.

### Adding component class

Use the `@layer components` for complicated components like `card`, `btn`, `badge`.

Able to override the components style with utility classes.

### Adding custom utilities

Add any of your own custom utility classes to Tailwind’s utilities layer.

Support Tailwind’s modifier syntax for handling things like hover states, responsive breakpoints.

## Dev tools

### IntelliSense for VS Code

- Suggestions for class names.
- See the complete CSS for a Tailwind class name by hovering over it.
- Highlights errors and bugs in both CSS and your markup.

### Prettier plugin TailwindCSS

- Automatic class sorting with Prettier.

## TailwindCSS vs. Bootstrap
