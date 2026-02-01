export const phases = [
  {
    id: 1,
    title: "Web Fundamentals",
    icon: "🔰",
    description: "Understanding how the web works and the foundation of internet communication",
    topics: [
      {
        title: "Basics of the Web",
        concepts: [
          {
            name: "How the Internet Works",
            definition: "The internet is a global network of connected computers that communicate with each other using standardized protocols. Data travels across this network in small packets.",
            example: "When you type a website address like 'google.com', your computer sends a request through your internet provider, through multiple routers around the world, until it reaches Google's servers. The server then sends back the webpage data the same way.",
            tips: [
              "Think of the internet like a postal system - data packets are like letters being delivered",
              "Your internet service provider (ISP) is your gateway to the internet"
            ]
          },
          {
            name: "Client-Server Architecture",
            definition: "A computing model where client devices (like your browser) request services and resources from centralized servers. The client sends requests, and the server sends responses.",
            code: `<!-- Client (Your Browser) makes a request -->
GET /index.html HTTP/1.1
Host: www.example.com

<!-- Server responds with content -->
HTTP/1.1 200 OK
Content-Type: text/html

<html>
  <body>Hello World!</body>
</html>`,
            example: "When you visit Netflix, your browser (client) requests the movie list from Netflix's servers. The server processes your request and sends back the webpage with movie thumbnails.",
            tips: [
              "Clients are typically user devices: phones, laptops, tablets",
              "Servers are powerful computers that are always online and ready to respond"
            ]
          },
          {
            name: "HTTP vs HTTPS",
            definition: "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. HTTPS is the secure version where all data is encrypted.",
            code: `<!-- HTTP - Not Secure -->
http://example.com

<!-- HTTPS - Secure with SSL/TLS Encryption -->
https://example.com`,
            example: "When you enter credit card information on Amazon, HTTPS ensures that no one can intercept and read your card details while they travel across the internet. Banks, shopping sites, and social media all use HTTPS.",
            tips: [
              "Always look for the padlock icon in your browser's address bar",
              "HTTPS encrypts data so hackers can't steal passwords or personal information",
              "Modern browsers warn users when a site isn't using HTTPS"
            ]
          },
          {
            name: "Domain, Hosting & DNS",
            definition: "A domain is your website's address (like google.com). Hosting is the server space where your website files live. DNS (Domain Name System) translates domain names into IP addresses.",
            code: `<!-- Domain Examples -->
https://www.example.com
https://blog.example.com
https://shop.example.co.uk

<!-- Behind the scenes DNS translation -->
example.com → 93.184.216.34 (IP Address)`,
            example: "When you buy a domain like 'mybakery.com' from GoDaddy, you're renting that name. You then need hosting (like from Bluehost) to store your bakery website files. DNS connects your domain name to your hosting server's IP address, so when people type 'mybakery.com', they see your website.",
            tips: [
              "Domain names must be unique and are rented yearly",
              "Hosting stores your actual website files (HTML, images, etc.)",
              "DNS acts like a phonebook for the internet"
            ]
          },
          {
            name: "How Browsers Render HTML",
            definition: "Browsers read HTML code and convert it into the visual webpage you see. This process involves parsing HTML, building a DOM tree, applying CSS styles, and executing JavaScript.",
            code: `<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

<!-- Browser processes this step by step:
1. Parse HTML
2. Build DOM tree
3. Load CSS and create style tree
4. Calculate layout
5. Paint pixels on screen -->`,
            example: "When you visit Wikipedia, your browser downloads the HTML file, reads it line by line, downloads images and stylesheets mentioned in the code, then displays everything as a formatted page. This happens in milliseconds.",
            tips: [
              "Browsers read HTML from top to bottom",
              "The rendering process happens very quickly (usually under 1 second)",
              "Different browsers may render pages slightly differently"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "HTML Core Fundamentals",
    icon: "🧱",
    description: "Master the building blocks of HTML and essential syntax",
    topics: [
      {
        title: "HTML Basics",
        concepts: [
          {
            name: "What is HTML?",
            definition: "HTML (HyperText Markup Language) is the standard language for creating web pages. It uses tags to structure content like headings, paragraphs, images, and links.",
            code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>HTML structures web content.</p>
  </body>
</html>`,
            example: "Every website you visit (Facebook, YouTube, Twitter) is built with HTML. Even this learning platform you're reading right now started with HTML code.",
            tips: [
              "HTML is not a programming language - it's a markup language",
              "HTML provides structure; CSS provides styling; JavaScript provides interactivity"
            ]
          },
          {
            name: "HTML5 Introduction",
            definition: "HTML5 is the latest version of HTML, introduced in 2014. It added new semantic tags, multimedia support (audio/video), and better mobile support.",
            code: `<!-- HTML5 New Features -->
<!DOCTYPE html>
<html>
  <body>
    <!-- Semantic tags -->
    <header>...</header>
    <nav>...</nav>
    <main>...</main>
    <footer>...</footer>
    
    <!-- Built-in media -->
    <video src="movie.mp4"></video>
    <audio src="song.mp3"></audio>
  </body>
</html>`,
            example: "YouTube uses HTML5's <video> tag to play videos directly in your browser without plugins. Before HTML5, you needed Flash Player installed.",
            tips: [
              "All modern browsers support HTML5",
              "HTML5 made websites work better on mobile phones",
              "HTML5 reduced the need for third-party plugins"
            ]
          },
          {
            name: "HTML Document Structure",
            definition: "Every HTML document follows a standard structure with three main parts: DOCTYPE declaration, <html> root element, <head> for metadata, and <body> for visible content.",
            code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
  </head>
  <body>
    <!-- All visible content goes here -->
    <h1>Page Heading</h1>
    <p>Page content...</p>
  </body>
</html>`,
            example: "Every webpage on Amazon, from the homepage to product pages, follows this exact structure. The <head> contains the page title you see in browser tabs, while the <body> contains all the products, images, and buttons you interact with.",
            tips: [
              "This structure is mandatory for valid HTML",
              "The <head> contains invisible metadata",
              "The <body> contains everything users see"
            ]
          },
          {
            name: "Doctype Declaration",
            definition: "The DOCTYPE declaration tells the browser which version of HTML you're using. For HTML5, it's simply <!DOCTYPE html>.",
            code: `<!DOCTYPE html>
<!-- This must be the first line -->

<!-- Old HTML 4.01 DOCTYPE (don't use) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
"http://www.w3.org/TR/html4/strict.dtd">`,
            example: "Think of DOCTYPE like telling a translator which language you're speaking. If you don't declare it, the browser might render your page in 'quirks mode' and things might look broken.",
            tips: [
              "Always put DOCTYPE as the very first line",
              "HTML5 DOCTYPE is much simpler than older versions",
              "Missing DOCTYPE can cause display issues"
            ]
          },
          {
            name: "Elements, Tags & Attributes",
            definition: "Tags are HTML commands in angle brackets (<tag>). Elements include the opening tag, content, and closing tag. Attributes provide additional information about elements.",
            code: `<!-- Element = Opening Tag + Content + Closing Tag -->
<p>This is a paragraph element</p>

<!-- Tag with Attributes -->
<a href="https://google.com" target="_blank">
  Click me
</a>

<!-- Self-closing tag -->
<img src="photo.jpg" alt="Description">`,
            example: "On Instagram, each photo is an <img> element with src attribute pointing to the image file and alt attribute describing the image for accessibility.",
            tips: [
              "Most tags come in pairs (opening and closing)",
              "Attributes always go in the opening tag",
              "Attribute values should be in quotes"
            ]
          },
          {
            name: "Block vs Inline Elements",
            definition: "Block elements start on a new line and take up the full width available (like <div>, <p>, <h1>). Inline elements only take up as much width as needed and don't start a new line (like <span>, <a>, <strong>).",
            code: `<!-- Block Elements -->
<div>This is a block element</div>
<div>This starts on a new line</div>
<p>Paragraphs are also block elements</p>

<!-- Inline Elements -->
<p>
  This is a <span>span element</span> and 
  this is a <strong>strong element</strong> inline.
</p>`,
            example: "In a news article, each paragraph (<p>) is a block element that takes the full width. Inside paragraphs, hyperlinks (<a>) are inline elements that flow with the text.",
            tips: [
              "Block elements stack vertically",
              "Inline elements flow horizontally like text",
              "You can't put block elements inside inline elements"
            ]
          }
        ]
      },
      {
        title: "Text & Formatting Tags",
        concepts: [
          {
            name: "Headings (h1–h6)",
            definition: "HTML provides six levels of headings from <h1> (most important) to <h6> (least important). They structure content hierarchically.",
            code: `<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>`,
            example: "Wikipedia articles use <h1> for the article title at the top, <h2> for major sections like 'History' or 'Description', and <h3> for subsections within those.",
            tips: [
              "Only use one <h1> per page",
              "Don't skip heading levels (don't go h1 → h3)",
              "Headings are crucial for SEO and accessibility"
            ]
          },
          {
            name: "Paragraphs & Spans",
            definition: "<p> creates a paragraph (block element). <span> is a generic inline container used to style parts of text without breaking the flow.",
            code: `<p>This is a complete paragraph of text.</p>

<p>
  This is a paragraph with a 
  <span style="color: red;">red word</span> 
  in the middle.
</p>`,
            example: "In Gmail, each email in your inbox is wrapped in a <p> tag. When you search and Gmail highlights matching words, those are wrapped in <span> tags.",
            tips: [
              "Use <p> for paragraphs, not <br> multiple times",
              "<span> is useful for styling specific words",
              "Paragraphs automatically have spacing between them"
            ]
          },
          {
            name: "Bold, Italic, Underline",
            definition: "<strong> makes text bold and indicates importance. <em> italicizes and adds emphasis. <u> underlines text. For purely visual styling without meaning, use <b> and <i>.",
            code: `<!-- Semantic (meaningful) -->
<strong>Important warning!</strong>
<em>Emphasized text</em>

<!-- Visual only -->
<b>Bold text</b>
<i>Italic text</i>
<u>Underlined text</u>`,
            example: "On Medium articles, important terms are wrapped in <strong> tags. Book titles or foreign words use <em> for italics. Warning messages use <strong> to indicate importance.",
            tips: [
              "Prefer <strong> over <b> for important content",
              "Prefer <em> over <i> for emphasized content",
              "Screen readers announce <strong> and <em> with different tones"
            ]
          },
          {
            name: "Superscript & Subscript",
            definition: "<sup> creates superscript (raised text) like exponents. <sub> creates subscript (lowered text) like chemical formulas.",
            code: `<!-- Superscript -->
<p>E = mc<sup>2</sup></p>
<p>2<sup>nd</sup> place</p>

<!-- Subscript -->
<p>H<sub>2</sub>O is water</p>
<p>CO<sub>2</sub> is carbon dioxide</p>`,
            example: "Wikipedia uses <sup> for mathematical equations like Einstein's E=mc² and footnote references. Chemistry websites use <sub> for formulas like H₂O or CO₂.",
            tips: [
              "Use <sup> for exponents and ordinal indicators (1st, 2nd)",
              "Use <sub> for chemical formulas",
              "These are semantic tags with specific purposes"
            ]
          },
          {
            name: "Quotes & Code Blocks",
            definition: "<blockquote> for long quotations. <q> for short inline quotes. <code> for inline code. <pre> for preformatted text preserving spaces and line breaks.",
            code: `<!-- Block Quote -->
<blockquote>
  To be or not to be, that is the question.
</blockquote>

<!-- Inline Quote -->
<p>Shakespeare said <q>All the world's a stage</q>.</p>

<!-- Code -->
<p>Use the <code>console.log()</code> function.</p>

<!-- Preformatted Code Block -->
<pre><code>
function hello() {
  console.log("Hello!");
}
</code></pre>`,
            example: "Stack Overflow uses <code> for inline code snippets and <pre><code> for full code examples. News sites use <blockquote> when quoting sources.",
            tips: [
              "<blockquote> is for citations, not visual indentation",
              "<pre> preserves spacing - useful for code or ASCII art",
              "Combine <pre> and <code> for code blocks"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Links, Media & Assets",
    icon: "🔗",
    description: "Learn to add hyperlinks, images, audio, and video to your web pages",
    topics: [
      {
        title: "Hyperlinks",
        concepts: [
          {
            name: "Anchor Tag",
            definition: "The <a> tag creates hyperlinks. The href attribute specifies the destination URL. Content between tags is the clickable text or image.",
            code: `<!-- Basic link -->
<a href="https://google.com">Visit Google</a>

<!-- Link with image -->
<a href="/about.html">
  <img src="logo.png" alt="Logo">
</a>

<!-- Link to email -->
<a href="mailto:hello@example.com">Email Us</a>

<!-- Link to phone -->
<a href="tel:+1234567890">Call Us</a>`,
            example: "Every blue underlined link on Wikipedia is an <a> tag. The navigation menu at the top of Amazon uses <a> tags to link to different departments.",
            tips: [
              "Always include descriptive link text (not just 'click here')",
              "Links can contain text, images, or other elements",
              "The href attribute is required for links to work"
            ]
          },
          {
            name: "Absolute vs Relative URLs",
            definition: "Absolute URLs include the full path (protocol + domain). Relative URLs are paths relative to the current page location.",
            code: `<!-- Absolute URLs (full path) -->
<a href="https://www.example.com/about">About</a>
<img src="https://cdn.example.com/logo.png">

<!-- Relative URLs -->
<a href="/about">About</a> <!-- Root relative -->
<a href="about.html">About</a> <!-- Same folder -->
<a href="../contact.html">Contact</a> <!-- Parent folder -->
<img src="images/logo.png"> <!-- Subfolder -->`,
            example: "External links to Facebook or Twitter use absolute URLs. Internal navigation within your website (Home, About, Contact) uses relative URLs. This way if you change domains, internal links still work.",
            tips: [
              "Use absolute URLs for external sites",
              "Use relative URLs for internal pages (easier to maintain)",
              "../ goes up one folder level"
            ]
          },
          {
            name: "Target Attributes",
            definition: "The target attribute specifies where to open the linked document. _blank opens in a new tab, _self opens in the same tab (default).",
            code: `<!-- Open in new tab -->
<a href="https://google.com" target="_blank">
  Google (New Tab)
</a>

<!-- Open in same tab (default) -->
<a href="/about" target="_self">About</a>

<!-- Best practice for external links -->
<a href="https://external-site.com" 
   target="_blank" 
   rel="noopener noreferrer">
  External Site
</a>`,
            example: "Social media share buttons use target='_blank' so users stay on your page while sharing opens in a new tab. Internal site navigation typically stays in the same tab.",
            tips: [
              "Use target='_blank' sparingly (users lose context)",
              "Always add rel='noopener noreferrer' with _blank for security",
              "External links often open in new tabs, internal links don't"
            ]
          }
        ]
      },
      {
        title: "Images & Media",
        concepts: [
          {
            name: "Image Formats",
            definition: "Different image formats serve different purposes: PNG (transparency), JPG (photos), SVG (scalable graphics), WebP (modern, smaller files).",
            code: `<!-- PNG - Transparency, screenshots -->
<img src="logo.png" alt="Company Logo">

<!-- JPG - Photos, no transparency -->
<img src="photo.jpg" alt="Beach sunset">

<!-- SVG - Icons, logos, scalable -->
<img src="icon.svg" alt="Menu icon">

<!-- WebP - Modern, best compression -->
<img src="image.webp" alt="Product photo">`,
            example: "Company logos use PNG or SVG. Instagram photos are JPG. Icons on modern websites use SVG. Google Images now serves WebP for faster loading.",
            tips: [
              "Use PNG for logos and images needing transparency",
              "Use JPG for photographs",
              "Use SVG for icons and graphics that need to scale",
              "Use WebP for best performance (with JPG fallback)"
            ]
          },
          {
            name: "img Tag & Alt Attribute",
            definition: "The <img> tag embeds images. The src attribute specifies the image path. The alt attribute provides text description for accessibility and when images fail to load.",
            code: `<!-- Basic image -->
<img src="photo.jpg" alt="Golden retriever playing in park">

<!-- Image with dimensions -->
<img src="logo.png" 
     alt="Company logo" 
     width="200" 
     height="100">

<!-- Decorative image -->
<img src="divider.png" alt="">`,
            example: "Screen readers for blind users read the alt text aloud. If Twitter images fail to load, you see the alt text. Google Images uses alt text to understand and rank images.",
            tips: [
              "Always include alt attribute (required for accessibility)",
              "Write descriptive alt text (not 'image' or 'photo')",
              "Use empty alt='' for purely decorative images",
              "Alt text appears when images don't load"
            ]
          },
          {
            name: "Responsive Images",
            definition: "Responsive images adapt to different screen sizes using srcset and sizes attributes, or the <picture> element for art direction.",
            code: `<!-- srcset for different resolutions -->
<img src="small.jpg"
     srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 2000w"
     sizes="(max-width: 600px) 500px,
            (max-width: 1200px) 1000px,
            2000px"
     alt="Responsive image">

<!-- Picture element for different formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Fallback">
</picture>`,
            example: "News websites serve small images to mobile phones and large images to desktop monitors. This saves data and loads faster on mobile.",
            tips: [
              "Responsive images improve performance",
              "Mobile users get smaller images (faster loading)",
              "Desktop users get high-resolution images"
            ]
          },
          {
            name: "Audio & Video Tags",
            definition: "HTML5 <audio> and <video> tags embed media directly without plugins. They support multiple formats and built-in controls.",
            code: `<!-- Audio player -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser doesn't support audio.
</audio>

<!-- Video player -->
<video controls width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser doesn't support video.
</video>

<!-- Autoplay video (muted required) -->
<video autoplay muted loop>
  <source src="background.mp4" type="video/mp4">
</video>`,
            example: "YouTube uses the <video> tag for all videos. Spotify's web player uses <audio> tags. Background videos on landing pages use autoplay muted loop.",
            tips: [
              "Always provide multiple formats for compatibility",
              "controls attribute adds play/pause buttons",
              "autoplay requires muted attribute (browser policy)",
              "Include fallback text for unsupported browsers"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Lists, Tables & Forms",
    icon: "📋",
    description: "Master structured data presentation and user input collection",
    topics: [
      {
        title: "Lists",
        concepts: [
          {
            name: "Ordered Lists",
            definition: "Ordered lists (<ol>) display numbered items in sequence. Each list item uses the <li> tag.",
            code: `<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<!-- Custom start number -->
<ol start="5">
  <li>Item 5</li>
  <li>Item 6</li>
</ol>

<!-- Different numbering types -->
<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
</ol>`,
            example: "Recipe instructions use ordered lists (Step 1, Step 2, etc.). Amazon product rankings use ordered lists. Tutorial steps are ordered lists.",
            tips: [
              "Use ordered lists when sequence matters",
              "Default numbering is 1, 2, 3...",
              "Can customize with letters (A, B) or Roman numerals (I, II)"
            ]
          },
          {
            name: "Unordered Lists",
            definition: "Unordered lists (<ul>) display bulleted items without specific order. Each item uses <li> tag.",
            code: `<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- Shopping list example -->
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
  <li>Butter</li>
</ul>`,
            example: "Navigation menus are unordered lists. Shopping carts show items as unordered lists. Feature lists on product pages use unordered lists.",
            tips: [
              "Use unordered lists when order doesn't matter",
              "Perfect for navigation menus",
              "Default bullet style can be changed with CSS"
            ]
          },
          {
            name: "Nested Lists",
            definition: "Lists can contain other lists as children, creating hierarchical structures with indentation.",
            code: `<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Bananas</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrots</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>`,
            example: "File explorers (like Windows Explorer) use nested lists to show folders and subfolders. Table of contents in documentation uses nested lists for chapters and sections.",
            tips: [
              "Nest lists by placing <ul> or <ol> inside <li>",
              "Can mix ordered and unordered lists",
              "Common for navigation with dropdowns"
            ]
          }
        ]
      },
      {
        title: "Tables",
        concepts: [
          {
            name: "Table Structure",
            definition: "Tables organize data in rows and columns. <table> is the container, <tr> creates rows, <td> creates data cells, <th> creates header cells.",
            code: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Sarah</td>
    <td>30</td>
    <td>London</td>
  </tr>
</table>`,
            example: "Pricing comparison tables, sports scores, spreadsheet-like data, calendar layouts all use HTML tables.",
            tips: [
              "Tables are for tabular data, not layout",
              "<th> for headers, <td> for data",
              "Each <tr> creates a new row"
            ]
          },
          {
            name: "thead, tbody, tfoot",
            definition: "Semantic grouping of table sections: <thead> for headers, <tbody> for main content, <tfoot> for footer/summary rows.",
            code: `<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Qty</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>$25</td>
      <td>5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$2123</td>
      <td>7</td>
    </tr>
  </tfoot>
</table>`,
            example: "Shopping carts use <tfoot> for subtotal and total rows. Financial reports use <thead> for column headers and <tfoot> for sum totals.",
            tips: [
              "Helps with accessibility and styling",
              "Browser can repeat <thead> when printing long tables",
              "<tfoot> can appear before <tbody> in code"
            ]
          },
          {
            name: "Row & Column Span",
            definition: "rowspan makes a cell span multiple rows vertically. colspan makes a cell span multiple columns horizontally.",
            code: `<table border="1">
  <tr>
    <th colspan="2">Full Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>First Name</td>
    <td>Last Name</td>
    <td rowspan="2">25</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
</table>`,
            example: "Complex schedules where one class spans multiple time slots use rowspan. Merged header cells in comparison tables use colspan.",
            tips: [
              "colspan='2' makes cell take 2 columns width",
              "rowspan='3' makes cell take 3 rows height",
              "Useful for complex table layouts"
            ]
          }
        ]
      },
      {
        title: "Forms",
        concepts: [
          {
            name: "Form Basics",
            definition: "Forms collect user input using <form> container with various input types. action specifies where to send data, method specifies how (GET/POST).",
            code: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>`,
            example: "Login forms, signup forms, contact forms, search bars - all use HTML forms. Google's search box is a form with one text input.",
            tips: [
              "Always use <label> with inputs for accessibility",
              "name attribute is sent to server",
              "id connects label to input"
            ]
          },
          {
            name: "Input Types",
            definition: "HTML5 provides many input types for different data: text, email, password, number, date, file, checkbox, radio, and more.",
            code: `<!-- Text inputs -->
<input type="text" placeholder="Username">
<input type="email" placeholder="email@example.com">
<input type="password" placeholder="Password">
<input type="number" min="0" max="100">
<input type="date">
<input type="tel" placeholder="Phone">

<!-- Selection inputs -->
<input type="checkbox" id="agree">
<label for="agree">I agree</label>

<input type="radio" name="size" value="small"> Small
<input type="radio" name="size" value="large"> Large

<!-- File upload -->
<input type="file" accept="image/*">`,
            example: "Email inputs show @ keyboard on mobile. Date inputs show calendar picker. File inputs open file browser. LinkedIn profile forms use all these input types.",
            tips: [
              "Use correct input type for better mobile keyboards",
              "email type validates email format",
              "Radio buttons share same name attribute",
              "Checkboxes can have different names"
            ]
          },
          {
            name: "Labels & Placeholders",
            definition: "Labels describe inputs for accessibility. Placeholders show example text inside inputs. Labels are persistent, placeholders disappear when typing.",
            code: `<!-- Good: Label with for attribute -->
<label for="username">Username:</label>
<input type="text" 
       id="username" 
       name="username"
       placeholder="johndoe123">

<!-- Alternative: Wrapping label -->
<label>
  Email:
  <input type="email" placeholder="you@example.com">
</label>`,
            example: "Sign-up forms use labels to identify fields ('Email', 'Password'). Placeholders show examples like 'john@example.com' to guide users.",
            tips: [
              "Always use labels for accessibility",
              "Clicking label focuses the input",
              "Placeholders are hints, not replacements for labels",
              "Screen readers read labels aloud"
            ]
          },
          {
            name: "Required & Pattern Validation",
            definition: "HTML5 provides built-in validation. required makes fields mandatory. pattern uses regex for custom validation rules.",
            code: `<!-- Required field -->
<input type="text" 
       name="username" 
       required>

<!-- Email validation (built-in) -->
<input type="email" 
       name="email" 
       required>

<!-- Pattern validation (regex) -->
<input type="text" 
       name="zipcode"
       pattern="[0-9]{5}"
       title="5-digit zip code"
       required>

<!-- Number range -->
<input type="number" 
       min="18" 
       max="99" 
       required>`,
            example: "Form won't submit if required fields are empty. Password fields check minimum length. Credit card forms validate card number format.",
            tips: [
              "Validation happens before form submission",
              "Browsers show error messages automatically",
              "Pattern uses regular expressions",
              "title attribute shows helpful error message"
            ]
          },
          {
            name: "Form Submission",
            definition: "Forms submit data to servers. GET appends data to URL (for searches). POST sends data in request body (for sensitive data like passwords).",
            code: `<!-- GET method (data in URL) -->
<form action="/search" method="GET">
  <input type="text" name="q">
  <button type="submit">Search</button>
</form>
<!-- Submits to: /search?q=userquery -->

<!-- POST method (data in body) -->
<form action="/login" method="POST">
  <input type="email" name="email">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>`,
            example: "Google search uses GET method (see search terms in URL). Login forms use POST method (passwords hidden from URL).",
            tips: [
              "Use GET for searches and filters",
              "Use POST for passwords and sensitive data",
              "GET data appears in browser history",
              "POST is more secure for private information"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Semantic HTML",
    icon: "🧩",
    description: "Use meaningful HTML5 tags for better structure, SEO, and accessibility",
    topics: [
      {
        title: "Semantic Tags",
        concepts: [
          {
            name: "Header, Nav, Main, Footer",
            definition: "Semantic tags give meaning to page sections. <header> for top content, <nav> for navigation, <main> for primary content, <footer> for bottom content.",
            code: `<!DOCTYPE html>
<html>
  <body>
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
    
    <main>
      <h2>Welcome</h2>
      <p>Main content goes here...</p>
    </main>
    
    <footer>
      <p>&copy; 2026 My Website</p>
    </footer>
  </body>
</html>`,
            example: "Every modern website (CNN, BBC, Medium) uses these tags. Screen readers jump to <nav> for navigation, <main> for content, making sites more accessible.",
            tips: [
              "Only one <main> per page",
              "Can have multiple <header> and <footer> elements",
              "<nav> is for major navigation blocks only",
              "These replace generic <div> tags"
            ]
          },
          {
            name: "Section, Article, Aside",
            definition: "<section> groups related content. <article> for self-contained content. <aside> for tangentially related content like sidebars.",
            code: `<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>Article content...</p>
    
    <section>
      <h3>Comments</h3>
      <!-- Comments here -->
    </section>
  </article>
  
  <aside>
    <h3>Related Posts</h3>
    <ul>
      <li><a href="#">Post 1</a></li>
      <li><a href="#">Post 2</a></li>
    </ul>
  </aside>
</main>`,
            example: "News websites: each article is an <article>. Blog posts with sidebar ads use <aside>. Product pages with reviews sections use <section>.",
            tips: [
              "<article> can stand alone (syndicated content)",
              "<section> groups thematic content",
              "<aside> for sidebars, pull quotes, ads",
              "Can nest these elements"
            ]
          },
          {
            name: "Why Semantic HTML Matters",
            definition: "Semantic HTML uses meaningful tags instead of generic divs. It improves accessibility, SEO, code readability, and makes websites work better with assistive technologies.",
            code: `<!-- Bad: Non-semantic -->
<div class="header">
  <div class="nav">
    <a href="/">Home</a>
  </div>
</div>

<!-- Good: Semantic -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>`,
            example: "Screen readers announce 'navigation region' when encountering <nav>, helping blind users navigate. Search engines give more weight to content in <article> tags.",
            tips: [
              "Makes code easier to understand and maintain",
              "Improves search engine rankings",
              "Essential for accessibility compliance",
              "Future-proofs your website"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Accessibility (A11y)",
    icon: "♿",
    description: "Make your websites usable for everyone, including people with disabilities",
    topics: [
      {
        title: "Accessibility Basics",
        concepts: [
          {
            name: "WCAG Guidelines",
            definition: "Web Content Accessibility Guidelines (WCAG) are international standards for making web content accessible. Four principles: Perceivable, Operable, Understandable, Robust.",
            code: `<!-- Perceivable: Alt text for images -->
<img src="chart.png" alt="Sales increased 50% in Q4">

<!-- Operable: Keyboard accessible -->
<button onclick="submit()">Submit</button>

<!-- Understandable: Clear labels -->
<label for="email">Email Address:</label>
<input type="email" id="email">

<!-- Robust: Valid HTML -->
<!DOCTYPE html>
<html lang="en">`,
            example: "Government websites must meet WCAG AA standards. Banks, airlines, and e-commerce sites follow WCAG to serve all customers including elderly and disabled users.",
            tips: [
              "WCAG has 3 levels: A (basic), AA (standard), AAA (enhanced)",
              "Most organizations aim for WCAG AA compliance",
              "Legal requirement in many countries"
            ]
          },
          {
            name: "ARIA Roles",
            definition: "ARIA (Accessible Rich Internet Applications) roles define what elements do. They help screen readers understand dynamic content and custom widgets.",
            code: `<!-- Navigation role -->
<div role="navigation">
  <a href="/">Home</a>
</div>

<!-- Alert role -->
<div role="alert">
  Form submitted successfully!
</div>

<!-- Button role for div -->
<div role="button" tabindex="0" onclick="submit()">
  Click Me
</div>

<!-- Better: Use native elements -->
<nav>
  <a href="/">Home</a>
</nav>`,
            example: "Gmail uses ARIA roles on their custom dropdown menus. Twitter uses role='alert' for notification pop-ups. Single-page apps use ARIA to announce content changes.",
            tips: [
              "Only use ARIA when native HTML isn't enough",
              "Native elements have built-in roles",
              "Common roles: button, navigation, alert, dialog",
              "Test with screen readers"
            ]
          },
          {
            name: "Keyboard Navigation",
            definition: "All functionality must be accessible via keyboard. Tab moves forward, Shift+Tab backward, Enter activates, Escape closes dialogs.",
            code: `<!-- Keyboard accessible button -->
<button onclick="handleClick()">Click Me</button>

<!-- Keyboard accessible div (avoid this) -->
<div 
  role="button" 
  tabindex="0"
  onclick="handleClick()"
  onkeypress="if(event.key==='Enter') handleClick()">
  Click Me
</div>

<!-- Skip to main content link -->
<a href="#main" class="skip-link">
  Skip to main content
</a>
<main id="main">
  <!-- Content -->
</main>`,
            example: "Power users navigate Amazon entirely with keyboard. Programmers coding on Stack Overflow rarely use mouse. Dropdown menus open with Enter, close with Escape.",
            tips: [
              "Test your site using only keyboard (no mouse)",
              "Visible focus indicators are required",
              "Tab order should be logical",
              "Add 'skip to content' links"
            ]
          },
          {
            name: "Color Contrast",
            definition: "Sufficient color contrast between text and background ensures readability. WCAG AA requires 4.5:1 ratio for normal text, 3:1 for large text.",
            code: `<!-- Bad: Low contrast -->
<p style="color: #999; background: #ccc;">
  Hard to read
</p>

<!-- Good: High contrast -->
<p style="color: #000; background: #fff;">
  Easy to read
</p>

<!-- Good: Dark mode -->
<p style="color: #fff; background: #000;">
  Easy to read
</p>`,
            example: "Light gray text on white background fails accessibility. Many elderly users or people with vision impairment can't read low-contrast text. Checking tools like WebAIM contrast checker ensure compliance.",
            tips: [
              "Use contrast checkers in browser dev tools",
              "Don't rely on color alone to convey information",
              "Test in different lighting conditions",
              "Dark mode also needs good contrast"
            ]
          },
          {
            name: "Accessible Forms",
            definition: "Forms need labels, error messages, and clear instructions. Every input must have associated label. Error messages should be clear and programmatically connected.",
            code: `<!-- Accessible form -->
<form>
  <label for="username">
    Username:
    <span aria-label="required">*</span>
  </label>
  <input 
    type="text" 
    id="username"
    name="username"
    aria-required="true"
    aria-describedby="username-error">
  
  <span id="username-error" role="alert">
    <!-- Error message appears here -->
  </span>
  
  <fieldset>
    <legend>Choose size:</legend>
    <input type="radio" id="small" name="size">
    <label for="small">Small</label>
    
    <input type="radio" id="large" name="size">
    <label for="large">Large</label>
  </fieldset>
  
  <button type="submit">Submit</button>
</form>`,
            example: "Bank forms announce errors clearly: 'Password field: Password must be at least 8 characters.' Signup forms group related fields with fieldset. Government forms meet strict accessibility standards.",
            tips: [
              "Every input needs a label",
              "Group related inputs with <fieldset>",
              "Use aria-describedby for error messages",
              "Make error messages clear and helpful"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Advanced HTML5",
    icon: "⚙️",
    description: "Master advanced HTML5 features for modern web development",
    topics: [
      {
        title: "Advanced Features",
        concepts: [
          {
            name: "HTML Data Attributes",
            definition: "Custom data attributes (data-*) store extra information on elements without affecting display. Accessible via JavaScript and CSS.",
            code: `<!-- Store user ID -->
<div data-user-id="12345" data-role="admin">
  User Profile
</div>

<!-- Store product info -->
<button 
  data-product-id="ABC123"
  data-price="29.99"
  data-category="electronics"
  onclick="addToCart(this)">
  Add to Cart
</button>

<!-- Access in JavaScript -->
<script>
  const btn = document.querySelector('button');
  console.log(btn.dataset.productId); // "ABC123"
  console.log(btn.dataset.price); // "29.99"
</script>`,
            example: "E-commerce sites store product IDs in data attributes. Dashboards store chart data. Social media 'Like' buttons store post IDs. Any data needed by JavaScript but not displayed.",
            tips: [
              "Prefix must be 'data-'",
              "Use for JavaScript, not styling (prefer classes)",
              "Access via element.dataset in JavaScript",
              "CamelCase in JS, kebab-case in HTML"
            ]
          },
          {
            name: "Meta Tags",
            definition: "Meta tags provide metadata about HTML document. Used for SEO, responsive design, character encoding, and social media previews.",
            code: `<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Responsive viewport -->
  <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
  
  <!-- SEO meta tags -->
  <meta name="description" 
        content="Learn HTML from basics to advanced">
  <meta name="keywords" 
        content="HTML, tutorial, web development">
  <meta name="author" content="Your Name">
  
  <!-- Social media preview (Open Graph) -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Description">
  <meta property="og:image" content="image.jpg">
  
  <!-- Twitter card -->
  <meta name="twitter:card" content="summary_large_image">
</head>`,
            example: "When you share a link on Facebook, the preview comes from Open Graph meta tags. Google search results show meta description. Mobile sites need viewport meta tag to display correctly.",
            tips: [
              "viewport meta tag is essential for mobile",
              "Description should be 150-160 characters",
              "Open Graph controls social media previews",
              "Always include charset UTF-8"
            ]
          },
          {
            name: "Favicon & Manifest",
            definition: "Favicon is the small icon shown in browser tabs. Web manifest enables progressive web app features like install-to-homescreen and custom icons.",
            code: `<head>
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  
  <!-- Web manifest -->
  <link rel="manifest" href="manifest.json">
</head>`,
            example: "Browser tabs show website favicons (Google's colored 'G', Facebook's 'f'). Installing Twitter as PWA on phone creates app icon from manifest.",
            tips: [
              "Favicon should be 16x16 or 32x32 pixels",
              "Include multiple sizes for different devices",
              "Manifest enables 'Add to Home Screen'",
              "Apple devices need apple-touch-icon"
            ]
          },
          {
            name: "Iframe Usage",
            definition: "Iframes embed external content or webpages within your page. Used for maps, videos, widgets, but use sparingly for security and performance.",
            code: `<!-- Embed YouTube video -->
<iframe 
  width="560" 
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

<!-- Embed Google Map -->
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>`,
            example: "YouTube embeds, Google Maps, payment processors (Stripe checkout), embedded tweets, code playgrounds (CodePen) all use iframes.",
            tips: [
              "Iframes can slow down page loading",
              "Use sandbox attribute for security",
              "Always include title for accessibility",
              "loading='lazy' improves performance"
            ]
          },
          {
            name: "HTML Entities",
            definition: "HTML entities display reserved characters and special symbols. Start with & and end with ;. Used for <, >, &, copyright symbols, etc.",
            code: `<!-- Reserved characters -->
&lt;  <!-- < less than -->
&gt;  <!-- > greater than -->
&amp; <!-- & ampersand -->
&quot; <!-- " quotation mark -->

<!-- Special symbols -->
&copy;  <!-- © copyright -->
&reg;   <!-- ® registered -->
&trade; <!-- ™ trademark -->
&euro;  <!-- € euro -->
&nbsp;  <!-- non-breaking space -->

<!-- Example usage -->
<p>Use &lt;p&gt; tag for paragraphs</p>
<p>&copy; 2026 Company Name</p>`,
            example: "Blog posts showing code use &lt; and &gt; to display HTML tags. Footer copyright notices use &copy;. Math websites use &times; for multiplication.",
            tips: [
              "Required for displaying HTML code on page",
              "&nbsp; prevents text from breaking across lines",
              "Can also use numeric codes like &#169; for ©",
              "Modern browsers support most characters directly"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "SEO & Performance",
    icon: "🔐",
    description: "Optimize your HTML for search engines and fast loading times",
    topics: [
      {
        title: "SEO Basics",
        concepts: [
          {
            name: "Meta Title & Description",
            definition: "Page title (<title>) appears in browser tabs and search results. Meta description summarizes page content in search results.",
            code: `<head>
  <!-- Title (50-60 characters) -->
  <title>Learn HTML - Complete Beginner to Advanced Guide</title>
  
  <!-- Description (150-160 characters) -->
  <meta name="description" 
        content="Master HTML with our comprehensive guide covering fundamentals, semantic HTML, accessibility, and best practices. Start building websites today.">
  
  <!-- Good title example -->
  <title>Product Name | Category | Brand</title>
  
  <!-- Bad title example -->
  <title>Home</title>
</head>`,
            example: "When you Google 'HTML tutorial', the blue clickable links are page titles. The gray text underneath is meta descriptions. Amazon product pages have titles like 'Product Name - Amazon.com'.",
            tips: [
              "Title should be unique for each page",
              "Include main keyword in first 50 characters",
              "Description should encourage clicks",
              "Google may rewrite poor titles/descriptions"
            ]
          },
          {
            name: "Heading Hierarchy",
            definition: "Proper heading structure (h1 → h6) helps search engines and users understand content organization. Only one h1 per page, then h2, h3 in logical order.",
            code: `<!-- Good hierarchy -->
<h1>Main Page Title</h1>

<h2>First Major Section</h2>
<p>Content...</p>

<h3>Subsection of First Section</h3>
<p>Content...</p>

<h2>Second Major Section</h2>
<p>Content...</p>

<!-- Bad: Skipping levels -->
<h1>Title</h1>
<h4>Subsection</h4> <!-- Wrong: skipped h2, h3 -->`,
            example: "Wikipedia articles: h1 for article title, h2 for major sections (History, Description), h3 for subsections. Google scans heading hierarchy to understand page structure.",
            tips: [
              "Only one h1 per page (usually page title)",
              "Don't skip heading levels",
              "Don't use headings for styling (use CSS)",
              "Headings create document outline"
            ]
          },
          {
            name: "Semantic Markup for SEO",
            definition: "Using semantic HTML tags helps search engines understand content meaning. Structured data and schema markup provide even more context.",
            code: `<!-- Semantic HTML for article -->
<article>
  <header>
    <h1>Article Title</h1>
    <time datetime="2026-01-31">January 31, 2026</time>
  </header>
  
  <p>Article content...</p>
  
  <footer>
    <p>Author: <span>John Doe</span></p>
  </footer>
</article>

<!-- Schema.org structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "datePublished": "2026-01-31"
}
</script>`,
            example: "Recipe websites use schema markup so Google shows cooking time and ratings in search results. News sites use Article schema for rich snippets. Product pages use Product schema for price and reviews.",
            tips: [
              "Use semantic tags over generic divs",
              "Add schema.org structured data",
              "Helps Google create rich search results",
              "Improves click-through rates"
            ]
          },
          {
            name: "Image Optimization",
            definition: "Optimize images with proper format, compression, dimensions, and alt text. Smaller images load faster and rank better in search.",
            code: `<!-- Optimized image -->
<img 
  src="product-800w.jpg"
  alt="Red running shoes with white laces"
  width="800"
  height="600"
  loading="lazy">

<!-- Responsive images -->
<img 
  src="image-small.jpg"
  srcset="image-small.jpg 400w,
          image-medium.jpg 800w,
          image-large.jpg 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1200px"
  alt="Descriptive alt text">`,
            example: "E-commerce sites compress product photos to load fast. News sites use responsive images for different devices. Pinterest optimizes images for fast scrolling.",
            tips: [
              "Compress images (use tools like TinyPNG)",
              "Serve correct size for device (don't load 4K on mobile)",
              "Use modern formats (WebP) with fallbacks",
              "Always include descriptive alt text"
            ]
          }
        ]
      },
      {
        title: "Performance",
        concepts: [
          {
            name: "Lazy Loading",
            definition: "Lazy loading defers loading of off-screen images and iframes until user scrolls near them. Improves initial page load time.",
            code: `<!-- Lazy load images -->
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy">

<!-- Lazy load iframe -->
<iframe 
  src="https://youtube.com/embed/..."
  loading="lazy">
</iframe>

<!-- Eager loading (default) -->
<img 
  src="hero-image.jpg"
  alt="Hero image"
  loading="eager">`,
            example: "Instagram feed lazy loads images as you scroll. Medium articles load images on demand. Facebook timeline loads posts progressively, not all at once.",
            tips: [
              "Use loading='lazy' for below-fold images",
              "Don't lazy load above-fold content",
              "Reduces initial page load time significantly",
              "Saves bandwidth for users"
            ]
          },
          {
            name: "Minimal DOM Structure",
            definition: "Keep HTML structure simple with fewer nested elements. Excessive nesting slows rendering and makes code harder to maintain.",
            code: `<!-- Bad: Too many nested divs -->
<div class="wrapper">
  <div class="container">
    <div class="inner">
      <div class="content">
        <p>Text</p>
      </div>
    </div>
  </div>
</div>

<!-- Good: Minimal structure -->
<div class="container">
  <p>Text</p>
</div>

<!-- Better: Semantic HTML -->
<main>
  <p>Text</p>
</main>`,
            example: "Modern frameworks like Tailwind encourage minimal DOM. Over-engineered sites with excessive divs load slower. Clean structure improves performance and maintainability.",
            tips: [
              "Avoid unnecessary wrapper divs",
              "Use semantic tags instead of generic divs",
              "Flatter DOM tree = faster rendering",
              "Simpler HTML = easier debugging"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Tools & Best Practices",
    icon: "🛠️",
    description: "Industry-standard tools and professional coding practices",
    topics: [
      {
        title: "Professional Practices",
        concepts: [
          {
            name: "Code Formatting & Readability",
            definition: "Well-formatted code uses consistent indentation, spacing, and line breaks. Makes code easier to read, maintain, and collaborate on.",
            code: `<!-- Bad formatting -->
<div><h1>Title</h1><p>Text</p><ul><li>Item 1</li><li>Item 2</li></ul></div>

<!-- Good formatting -->
<div>
  <h1>Title</h1>
  <p>Text</p>
  
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>

<!-- Consistent indentation (2 or 4 spaces) -->
<article>
  <header>
    <h1>Title</h1>
  </header>
  
  <section>
    <p>Content</p>
  </section>
</article>`,
            example: "Professional developers use code formatters like Prettier. Companies enforce style guides. GitHub code reviews check formatting. VS Code auto-formats on save.",
            tips: [
              "Use consistent indentation (2 or 4 spaces)",
              "One blank line between sections",
              "Close tags on same indentation level as opening",
              "Use code formatter tools"
            ]
          },
          {
            name: "HTML Validation",
            definition: "HTML validators check for syntax errors and compliance with standards. W3C Markup Validator is the official tool.",
            code: `<!-- Valid HTML5 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Valid Page</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </body>
</html>

<!-- Common errors caught by validator -->
<!-- Missing closing tag -->
<div>
  <p>Text
</div> <!-- Error: <p> not closed -->

<!-- Invalid nesting -->
<p>
  <div>Text</div> <!-- Error: Can't nest block in inline -->
</p>`,
            example: "Use validator.w3.org to check HTML. Browser dev tools highlight errors. Automated testing includes validation. Government and enterprise sites must pass validation.",
            tips: [
              "Validate during development, not just at end",
              "Use browser dev tools to catch errors",
              "Valid HTML works better across browsers",
              "Improves accessibility and SEO"
            ]
          },
          {
            name: "Version Control (Git Basics)",
            definition: "Git tracks changes to code over time. Enables collaboration, version history, and safe experimentation. Essential professional skill.",
            code: `<!-- Not code, but Git commands -->
# Initialize repository
git init

# Add files
git add index.html

# Commit changes
git commit -m "Add homepage structure"

# Push to GitHub
git push origin main

<!-- HTML comment for version tracking -->
<!-- 
  Version: 2.0
  Last updated: 2026-01-31
  Author: John Doe
-->`,
            example: "GitHub hosts millions of websites' code. Teams collaborate on same codebase. Can revert to previous versions if bugs occur. All professional developers use Git.",
            tips: [
              "Commit often with clear messages",
              "Use branches for new features",
              "GitHub is the most popular Git platform",
              "Essential for team collaboration"
            ]
          },
          {
            name: "Clean & Maintainable Markup",
            definition: "Write HTML that's easy to understand and modify. Use semantic tags, meaningful class names, comments for complex sections, and consistent patterns.",
            code: `<!-- Bad: Unclear purpose -->
<div class="box">
  <div class="thing">
    <div class="item">Text</div>
  </div>
</div>

<!-- Good: Clear purpose -->
<article class="blog-post">
  <header class="post-header">
    <h1 class="post-title">Article Title</h1>
  </header>
  
  <!-- Article introduction -->
  <div class="post-intro">
    <p>Introduction text...</p>
  </div>
  
  <!-- Main content -->
  <div class="post-content">
    <p>Content...</p>
  </div>
</article>`,
            example: "Large codebases at Google, Facebook use strict naming conventions. Component libraries have clear structure. Documentation sites are self-explanatory.",
            tips: [
              "Use descriptive class names",
              "Add comments for complex sections",
              "Group related elements together",
              "Follow consistent patterns across site"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Real-World Projects",
    icon: "📁",
    description: "Apply your knowledge with practical project examples",
    topics: [
      {
        title: "Beginner Projects",
        concepts: [
          {
            name: "Personal Portfolio Page",
            definition: "A single-page website showcasing your skills, projects, and contact information. Perfect first project to apply HTML fundamentals.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Web Developer</title>
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Web Developer & Designer</p>
  </header>
  
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>Passionate web developer...</p>
    </section>
    
    <section id="projects">
      <h2>My Projects</h2>
      <article>
        <h3>Project 1</h3>
        <p>Description...</p>
      </article>
    </section>
    
    <section id="contact">
      <h2>Contact</h2>
      <a href="mailto:john@example.com">Email Me</a>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 John Doe</p>
  </footer>
</body>
</html>`,
            example: "Personal portfolio sites on GitHub Pages, Netlify. Shows potential employers your skills. Simple, professional presence online.",
            tips: [
              "Keep it simple and focused",
              "Include: about, projects, contact sections",
              "Use semantic HTML",
              "Make it mobile-friendly"
            ]
          },
          {
            name: "Resume Website",
            definition: "Digital version of your resume as a webpage. Includes work experience, education, skills. More dynamic than PDF resume.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>John Doe - Resume</title>
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Web Developer</p>
    <p>
      Email: john@example.com | 
      Phone: (555) 123-4567
    </p>
  </header>
  
  <main>
    <section>
      <h2>Experience</h2>
      <article>
        <h3>Senior Developer - Tech Corp</h3>
        <p><time>2024</time> - Present</p>
        <ul>
          <li>Built responsive websites</li>
          <li>Led team of 5 developers</li>
        </ul>
      </article>
    </section>
    
    <section>
      <h2>Education</h2>
      <article>
        <h3>BS Computer Science</h3>
        <p>University Name - <time>2023</time></p>
      </article>
    </section>
    
    <section>
      <h2>Skills</h2>
      <ul>
        <li>HTML5 & CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>
  </main>
</body>
</html>`,
            example: "LinkedIn profiles are essentially resume websites. Many professionals host HTML resumes on personal domains. Easier to update than PDF.",
            tips: [
              "Use semantic tags (article for jobs)",
              "Include contact information",
              "List experience chronologically",
              "Keep formatting clean and professional"
            ]
          },
          {
            name: "Landing Page",
            definition: "Single-page website designed to convert visitors to action (signup, purchase, download). Focuses on one goal with clear call-to-action.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Best productivity app for teams">
  <title>ProductName - Boost Team Productivity</title>
</head>
<body>
  <header>
    <nav>
      <img src="logo.png" alt="ProductName Logo">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
    </nav>
  </header>
  
  <main>
    <!-- Hero section -->
    <section class="hero">
      <h1>Boost Your Team's Productivity</h1>
      <p>The all-in-one workspace for modern teams</p>
      <a href="#signup">Start Free Trial</a>
    </section>
    
    <!-- Features -->
    <section id="features">
      <h2>Features</h2>
      <article>
        <h3>Real-time Collaboration</h3>
        <p>Work together seamlessly...</p>
      </article>
      <article>
        <h3>Task Management</h3>
        <p>Organize your projects...</p>
      </article>
    </section>
    
    <!-- Call to action -->
    <section id="signup">
      <h2>Ready to get started?</h2>
      <form action="/signup" method="POST">
        <input type="email" placeholder="Enter your email" required>
        <button type="submit">Start Free Trial</button>
      </form>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 ProductName</p>
  </footer>
</body>
</html>`,
            example: "SaaS products (Slack, Notion) have landing pages. App downloads (Spotify, Netflix) use landing pages. Course sales use landing pages to convert visitors.",
            tips: [
              "Clear headline explaining value proposition",
              "Prominent call-to-action button",
              "Social proof (testimonials, logos)",
              "Mobile-responsive design essential"
            ]
          }
        ]
      }
    ]
  }
];
