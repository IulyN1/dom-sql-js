# QDOM JS - DOM Manipulation with SQL-like syntax

**QDOM JS** is a JavaScript library for SQL-like DOM manipulation. It provides an intuitive interface for interacting with the DOM in a way that mimics SQL syntax, such as `SELECT`, `INSERT`, `UPDATE`, `DELETE`, and other commands for efficient DOM manipulation.

This package is designed for developers with some knowledge of JavaScript, enabling them to interact with DOM elements more effectively using SQL-like syntax.

QDOM JS uses:

-   [Vite](https://vite.dev/) for bundling
-   [DOMPurify](https://github.com/cure53/DOMPurify) for sanitizing content

## 🔥 Features

-   ⚡ Lightweight (only ~36 KB)
-   🎯 Pure client-side execution
-   ✨ SQL-like syntax for DOM manipulation
-   🧩 Easy integration into any project via a `<script>` tag
-   🔒 Protection against XSS when inserting HTML

## 🚀 Installation

### Import QDOM JS into the HTML file

If you're using it in a project with a `<script>` tag, you can include the minified version directly:

```html
<script src="https://cdn.jsdelivr.net/npm/qdom-js/dist/qdom.min.js"></script>
```

## ⚙️ Usage

### Basic DOM Operations

Once you include the library in your project, you can use the available commands to manipulate the DOM.

### 1. **SELECT**

To select an element and perform an operation on it:

```javascript
QDOM.select('#elementId').count('*');
QDOM.select('.container').sum('.value');
```

`SELECT` only allows applying aggregation functions, not directly selecting elements as that can be done with CSS selectors. `SELECT` supports `COUNT`, `SUM`, `AVG`, `MIN` and `MAX` operations. Both `SELECT` and `DELETE` support `*` selector alongside with normal CSS selectors.

### 2. **INSERT**

To insert content into a DOM element:

```javascript
QDOM.insert('<div><span>Test</span></div>').into('#elementId');
```

### 3. **UPDATE**

To update the properties of an element:

```javascript
QDOM.update('#elementId').set({ text: 'New Text' });
QDOM.update('#header').set({ html: '<div>Hello!</div>' });
```

**Note:** `UPDATE` allows for `text` property which sets the `innerText` property to the given value, and for `html` property which sets the `innerHTML` property to the given value. The rest of the properties are taken for granted and don't present any special rules (`color`, `fontSize`, etc.).

### 4. **DELETE**

To delete a DOM element:

```javascript
QDOM.delete('#elementId').from('body');
QDOM.delete('*').from('.list');
```

### 5. **DROP**

To drop an element from the DOM:

```javascript
QDOM.drop('#elementId');
```

### 6. **CREATE TRIGGER**

To create a trigger for DOM operations:

```javascript
QDOM.createTrigger('click')
	.on('#buttonId')
	.execute(() => {
		console.log('Button clicked');
	});
```

### 7. **EXECUTE TRIGGER**

To manually execute a trigger:

```javascript
QDOM.executeTrigger('click').on('#buttonId');
```

## 📚 API

The core methods provided by QDOM JS are:

-   **select(selector)** - Select elements based on the given selector for which to apply later defined functions (such as `COUNT`).
-   **insert(content)** - Insert HTML content into selected elements.
-   **update(selector)** - Update properties of the selected elements.
-   **delete(selector)** - Delete elements from the DOM.
-   **drop(selector)** - Drop an element from the DOM.
-   **createTrigger(event)** - Create a trigger on an element.
-   **executeTrigger(event)** - Execute a trigger manually.

Each of these methods returns a chainable object that can be used for further operations (like in the create trigger example).
