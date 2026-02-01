export const phases = [
  {
    id: 1,
    title: "Phase 1: Web Fundamentals",
    icon: "🔰",
    topics: [
      {
        title: "How the Internet Works",
        definition: "The internet is a global network of interconnected computers that communicate using standardized protocols. When you visit a website, your computer sends a request through your Internet Service Provider (ISP) to servers around the world, which then send back the requested information.",
        code: `<!-- Understanding the flow -->
<!-- 1. You type: www.example.com -->
<!-- 2. DNS translates to: 192.168.1.1 -->
<!-- 3. Browser sends HTTP request -->
<!-- 4. Server sends HTML response -->
<!-- 5. Browser displays the page -->`,
        realWorldExample: "Think of the internet like the postal system. Your home address is like your IP address, the post office routes mail like routers direct data packets, and the postal service protocols (zip codes, addresses) are like internet protocols (TCP/IP, HTTP). When you send a letter, it goes through multiple post offices before reaching its destination - just like data packets travel through multiple routers."
      },
      {
        title: "Client-Server Architecture",
        definition: "Client-server is a computing model where the client (your browser) requests resources or services, and the server provides them. The client initiates requests, and the server responds with the requested data.",
        code: `<!-- CLIENT SIDE (Your Browser) -->
<!-- Sends requests, displays content -->

<!-- SERVER SIDE (Web Server) -->
<!-- Processes requests, sends responses -->

<!-- Example flow: -->
<!-- Client: "Can I have the homepage?" -->
<!-- Server: "Here's the HTML, CSS, and images" -->`,
        realWorldExample: "Imagine a restaurant: You (the client) look at the menu and order food. The kitchen (the server) prepares your order and serves it to you. You don't need to know how the kitchen works - you just make requests and receive responses. Similarly, your browser requests web pages, and servers send them back without you needing to know the server's internal workings."
      },
      {
        title: "HTTP vs HTTPS",
        definition: "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. HTTPS (HTTP Secure) is the encrypted version that protects data during transmission using SSL/TLS encryption, making it secure from eavesdroppers.",
        code: `<!-- HTTP - Not Secure -->
http://example.com
<!-- Data sent in plain text -->
<!-- Anyone can intercept and read -->

<!-- HTTPS - Secure -->
https://example.com
<!-- Data is encrypted -->
<!-- Protected from hackers -->`,
        realWorldExample: "HTTP is like sending a postcard - anyone handling it can read your message. HTTPS is like sending a sealed, locked box - only the intended recipient has the key to open it. This is why banking websites, shopping sites, and login pages use HTTPS to protect your passwords, credit card numbers, and personal information."
      },
      {
        title: "Domain, Hosting & DNS",
        definition: "A domain name is your website's human-readable address (like google.com). Hosting is the server space where your website files are stored. DNS (Domain Name System) is like the internet's phonebook, translating domain names into IP addresses that computers understand.",
        code: `<!-- Domain Structure -->
https://www.example.com/page.html
<!-- https:// - Protocol -->
<!-- www - Subdomain -->
<!-- example - Domain name -->
<!-- .com - Top-level domain (TLD) -->
<!-- /page.html - Path -->`,
        realWorldExample: "Think of it like a physical store: The domain name (example.com) is your store's street address that people remember. The hosting is the actual building where your store operates. DNS is like GPS - when someone types your address, DNS directs them to the exact location of your store (the server's IP address like 192.168.1.1)."
      },
      {
        title: "How Browsers Render HTML",
        definition: "Browser rendering is the process of converting HTML, CSS, and JavaScript into the visual webpage you see. The browser reads HTML top to bottom, builds the DOM (Document Object Model), applies CSS styles, executes JavaScript, and paints the final result on screen.",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Rendering Process</title>
  <style>
    /* 2. CSS is parsed */
    h1 { color: blue; }
  </style>
</head>
<body>
  <!-- 1. HTML is parsed -->
  <h1>Hello World</h1>
  
  <script>
    // 3. JavaScript is executed
    console.log('Page loaded!');
  </script>
  <!-- 4. Page is painted to screen -->
</body>
</html>`,
        realWorldExample: "Rendering is like building a house from blueprints. The HTML is the blueprint (structure), CSS is the interior design (styling), and JavaScript is the electricity and plumbing (functionality). The browser reads the blueprint, applies the design, adds functionality, and finally shows you the completed house. Just as you see walls before paint, browsers render HTML structure before applying CSS styles."
      }
    ]
  },
  {
    id: 2,
    title: "Phase 2: HTML Core Fundamentals",
    icon: "🧱",
    topics: [
      {
        title: "What is HTML?",
        definition: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It uses tags to structure content and tell browsers how to display text, images, links, and other elements. HTML is not a programming language - it's a markup language that describes the structure of web content.",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML!</h1>
  <p>This is a paragraph of text.</p>
</body>
</html>`,
        realWorldExample: "HTML is like the skeleton and organs of a body. Just as bones give structure to your body, HTML gives structure to web pages. Each tag is like a different body part serving a specific purpose: <head> is the brain (contains metadata), <body> is the torso (contains visible content), headings are like chapter titles in a book, and paragraphs are like text blocks."
      },
      {
        title: "HTML5 Introduction",
        definition: "HTML5 is the latest version of HTML, introduced in 2014. It added new semantic elements (like <header>, <nav>, <article>), multimedia support (audio/video without plugins), improved form controls, and APIs for offline storage, geolocation, and drag-and-drop functionality.",
        code: `<!DOCTYPE html> <!-- HTML5 doctype -->
<html>
<body>
  <!-- HTML5 Semantic Elements -->
  <header>Site Header</header>
  <nav>Navigation</nav>
  <main>
    <article>Article Content</article>
    <aside>Sidebar</aside>
  </main>
  <footer>Site Footer</footer>
  
  <!-- HTML5 Multimedia -->
  <video src="movie.mp4" controls></video>
  <audio src="song.mp3" controls></audio>
</body>
</html>`,
        realWorldExample: "HTML5 is like upgrading from a flip phone to a smartphone. Old HTML could display text and images (like a flip phone with basic features). HTML5 added native video playback, location services, offline capabilities, and better structure - just like smartphones added cameras, GPS, apps, and touchscreens without needing extra accessories."
      },
      {
        title: "HTML Document Structure",
        definition: "Every HTML document follows a specific structure: DOCTYPE declaration, <html> root element, <head> for metadata, and <body> for visible content. This structure tells browsers how to interpret and display the page correctly.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Metadata section (not visible) -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- Visible content goes here -->
  <h1>Welcome!</h1>
  <p>This is visible to users.</p>
</body>
</html>`,
        realWorldExample: "An HTML document is like a business letter. The DOCTYPE is like the letterhead showing it's official. The <head> section is like the envelope with sender/recipient info (not part of the message but necessary for delivery). The <body> is the actual letter content that people read. Just as letters follow a format, HTML documents follow this structure so browsers can read them correctly."
      },
      {
        title: "Doctype Declaration",
        definition: "The DOCTYPE declaration (<!DOCTYPE html>) tells the browser which version of HTML the page uses. In HTML5, it's simply <!DOCTYPE html>. It must be the very first line and ensures the browser renders the page in standards mode rather than quirks mode.",
        code: `<!DOCTYPE html> <!-- HTML5 -->
<!-- Must be first line, before <html> -->

<!-- Old HTML4 doctype (don't use) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!-- Modern way (use this) -->
<!DOCTYPE html>`,
        realWorldExample: "The DOCTYPE is like showing your ID before entering a building. It tells the security guard (browser) what rulebook to follow. Without it, the guard might use old, outdated rules (quirks mode) which could make things look wrong. With <!DOCTYPE html>, everyone knows to use the latest HTML5 standards, ensuring consistency."
      },
      {
        title: "Elements, Tags & Attributes",
        definition: "Elements are the building blocks of HTML, defined by tags. Tags are enclosed in angle brackets (<tag>). Most elements have an opening tag, content, and closing tag. Attributes provide additional information about elements, written as name='value' pairs inside opening tags.",
        code: `<!-- ELEMENT = Opening Tag + Content + Closing Tag -->
<p>This is a paragraph element</p>

<!-- TAG: <p> and </p> -->
<!-- CONTENT: "This is a paragraph element" -->

<!-- ATTRIBUTES provide extra info -->
<a href="https://google.com" target="_blank">
  Click here
</a>
<!-- href and target are attributes -->

<!-- Self-closing tags (no content) -->
<img src="photo.jpg" alt="A photo">
<br>
<hr>`,
        realWorldExample: "Think of HTML like building with LEGO blocks. Each block type (element) serves a purpose - some are bricks (paragraphs), some are wheels (images), some are windows (links). The block's color and size (attributes) give extra details. Tags are like the connectors that hold blocks together. Just as LEGO instructions show how to assemble blocks, HTML tags show browsers how to build the webpage."
      },
      {
        title: "Block vs Inline Elements",
        definition: "Block elements start on a new line and take up the full width available, stacking vertically. Inline elements only take up as much width as needed and don't start new lines, flowing horizontally within text. Understanding this is crucial for layout.",
        code: `<!-- BLOCK ELEMENTS (full width, new line) -->
<div>Division block</div>
<p>Paragraph block</p>
<h1>Heading block</h1>
<ul>
  <li>List item block</li>
</ul>

<!-- INLINE ELEMENTS (flow with text) -->
<span>Inline span</span>
<a href="#">Inline link</a>
<strong>Bold inline</strong>
<em>Italic inline</em>
<img src="icon.png" alt="Inline image">

<!-- Example mixing both -->
<p>This is a <strong>paragraph</strong> with 
<a href="#">inline</a> elements inside.</p>`,
        realWorldExample: "Block elements are like shipping containers stacked vertically on a ship - each takes up the full width and sits on its own level. Inline elements are like items on a conveyor belt flowing left to right - they line up horizontally until the belt runs out of space, then wrap to the next line. A paragraph (<p>) is a container, while bold text (<strong>) is an item flowing inside that container."
      }
    ]
  },
  {
    id: 3,
    title: "Phase 3: Links, Media & Assets",
    icon: "🔗",
    topics: [
      {
        title: "Anchor Tag & Hyperlinks",
        definition: "The <a> (anchor) tag creates hyperlinks that connect web pages together. It uses the href attribute to specify the destination URL. Links can point to other pages, sections within the same page, email addresses, or phone numbers.",
        code: `<!-- Basic link -->
<a href="https://www.google.com">Visit Google</a>

<!-- Link to another page on your site -->
<a href="about.html">About Us</a>

<!-- Link to section on same page -->
<a href="#contact">Jump to Contact</a>
<section id="contact">Contact form here</section>

<!-- Email link -->
<a href="mailto:hello@example.com">Email Us</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>`,
        realWorldExample: "Hyperlinks are like doorways between rooms in a building. Clicking a link is like walking through a door to another room (webpage). The href attribute is the room number telling you where the door leads. Just as buildings have elevators (links to different floors/pages) and room numbers (section links), websites use links to navigate between different content areas."
      },
      {
        title: "Absolute vs Relative URLs",
        definition: "Absolute URLs include the full web address starting with http:// or https://, pointing to a specific location on the internet. Relative URLs are shortcuts that point to files relative to the current page's location, making them portable and easier to maintain.",
        code: `<!-- ABSOLUTE URL (complete address) -->
<a href="https://www.example.com/about.html">
  About (Absolute)
</a>

<!-- RELATIVE URL (relative to current page) -->
<a href="about.html">About (Same folder)</a>
<a href="pages/about.html">About (subfolder)</a>
<a href="../about.html">About (parent folder)</a>

<!-- Images work the same way -->
<img src="https://example.com/logo.png" alt="Absolute">
<img src="images/logo.png" alt="Relative">`,
        realWorldExample: "Absolute URLs are like giving someone your complete address: '123 Main Street, New York, NY 10001, USA.' Relative URLs are like saying 'two doors down' - it only makes sense from your current location. If you move houses (change domains), absolute addresses from others stay the same, but your relative directions ('upstairs', 'next room') move with you, making relative URLs better for internal site links."
      },
      {
        title: "Target Attributes",
        definition: "The target attribute specifies where to open the linked document. The most common value is _blank which opens links in a new tab/window. Other values include _self (same window), _parent, and _top for frame-based layouts.",
        code: `<!-- Open in same tab (default) -->
<a href="page.html">Same Tab</a>
<a href="page.html" target="_self">Same Tab</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank">
  New Tab
</a>

<!-- Security best practice with new tab -->
<a href="https://external-site.com" 
   target="_blank" 
   rel="noopener noreferrer">
  Secure External Link
</a>`,
        realWorldExample: "The target attribute is like choosing how to open a book while reading another. target='_self' is like putting down your current book to read the new one (same tab). target='_blank' is like keeping your current book open while opening another book beside it (new tab). Libraries (browsers) let you have multiple books (tabs) open at once, and you choose how to manage them."
      },
      {
        title: "Image Formats",
        definition: "Different image formats serve different purposes: JPEG for photos (lossy compression, smaller files), PNG for graphics with transparency (lossless), SVG for scalable vector graphics (perfect at any size), and WebP for modern browsers (better compression than JPEG/PNG).",
        code: `<!-- JPEG - Best for photographs -->
<img src="photo.jpg" alt="Photo" 
     width="600" height="400">

<!-- PNG - Best for logos, transparency -->
<img src="logo.png" alt="Logo">

<!-- SVG - Scalable vector graphics -->
<img src="icon.svg" alt="Icon">

<!-- WebP - Modern, smaller files -->
<img src="image.webp" alt="Modern format">

<!-- Picture element for multiple formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Fallback">
</picture>`,
        realWorldExample: "Image formats are like different types of paper for printing. JPEG is like magazine paper - great for colorful photos but you lose some quality for smaller file size. PNG is like glossy brochure paper - higher quality with transparent areas. SVG is like a rubber stamp - it stays sharp at any size because it's based on mathematical shapes, not pixels. WebP is like eco-friendly paper - same quality as traditional but uses less space."
      },
      {
        title: "img Tag & Alt Attribute",
        definition: "The <img> tag embeds images in web pages. It's self-closing and requires the src attribute (image source). The alt attribute provides alternative text for screen readers and displays when images fail to load, crucial for accessibility and SEO.",
        code: `<!-- Basic image -->
<img src="photo.jpg" alt="Sunset over mountains">

<!-- With dimensions (improves loading) -->
<img src="photo.jpg" 
     alt="Sunset over mountains"
     width="800" 
     height="600">

<!-- Decorative images (empty alt) -->
<img src="decoration.png" alt="">

<!-- Image as link -->
<a href="gallery.html">
  <img src="thumbnail.jpg" alt="View photo gallery">
</a>`,
        realWorldExample: "The img tag is like hanging a picture frame on a wall. The src tells you which painting to put in the frame. The alt text is like the title plaque next to artwork in a museum - it describes the image for people who can't see it (blind visitors using screen readers) or when the painting is being restored (image failed to load). Museums always label their art, and websites should always use alt text."
      },
      {
        title: "Responsive Images",
        definition: "Responsive images adapt to different screen sizes and resolutions. The srcset attribute provides multiple image versions for different device widths or pixel densities, allowing browsers to download the most appropriate size, saving bandwidth and improving performance.",
        code: `<!-- Basic responsive image with srcset -->
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w,
             photo-800.jpg 800w,
             photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Responsive photo">

<!-- High DPI displays (Retina) -->
<img src="logo.png"
     srcset="logo.png 1x,
             logo@2x.png 2x,
             logo@3x.png 3x"
     alt="Logo">

<!-- Picture element for art direction -->
<picture>
  <source media="(max-width: 600px)" 
          srcset="mobile.jpg">
  <source media="(max-width: 1200px)" 
          srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Responsive">
</picture>`,
        realWorldExample: "Responsive images are like a restaurant menu with different portion sizes. A phone (small screen) gets the small portion (small image), a tablet gets medium, and a desktop monitor gets large. Why serve a giant meal to someone who asked for a snack? Similarly, why send a massive 4K image to a phone screen? The browser picks the right 'portion size' based on the device's 'appetite' (screen size)."
      },
      {
        title: "Audio & Video Tags",
        definition: "HTML5's <audio> and <video> tags embed media directly in web pages without plugins. They support multiple formats, include built-in controls, and offer attributes for autoplay, looping, and preloading. Multiple source formats ensure browser compatibility.",
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

<!-- Video with poster and autoplay -->
<video controls 
       poster="preview.jpg"
       autoplay 
       muted 
       loop>
  <source src="video.mp4" type="video/mp4">
</video>`,
        realWorldExample: "The audio and video tags are like built-in media players in your car. Before HTML5, you needed to install separate plugins (like carrying a portable CD player). Now browsers have native players - just like modern cars have built-in systems. The controls attribute is like the play/pause buttons on your steering wheel, and multiple source formats are like playing both CDs and USB drives."
      }
    ]
  },
  {
    id: 4,
    title: "Phase 4: Lists, Tables & Forms",
    icon: "📋",
    topics: [
      {
        title: "Ordered Lists",
        definition: "Ordered lists (<ol>) display items in a numbered sequence. They're used when the order matters, like instructions or rankings. Browsers automatically number items using <li> (list item) tags. You can customize numbering with type and start attributes.",
        code: `<!-- Basic ordered list -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- Custom start number -->
<ol start="5">
  <li>Item 5</li>
  <li>Item 6</li>
</ol>

<!-- Different numbering types -->
<ol type="A"><!-- A, B, C... -->
  <li>Item A</li>
</ol>

<ol type="I"><!-- I, II, III... -->
  <li>Item I</li>
</ol>

<ol type="i"><!-- i, ii, iii... -->
  <li>Item i</li>
</ol>`,
        realWorldExample: "Ordered lists are like cooking recipes where steps must follow a specific sequence: 1) Preheat oven, 2) Mix ingredients, 3) Bake for 30 minutes. If you skip step 1 or do them out of order, the cake won't turn out right. Similarly, assembly instructions, tutorial steps, and top-10 rankings use ordered lists because the sequence matters."
      },
      {
        title: "Unordered Lists",
        definition: "Unordered lists (<ul>) display items with bullet points where order doesn't matter. They're perfect for grouping related items like features, ingredients, or navigation menus. Each item uses the <li> tag, just like ordered lists.",
        code: `<!-- Basic unordered list -->
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>

<!-- Navigation menu (common use) -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Feature list -->
<ul>
  <li>Fast performance</li>
  <li>Easy to use</li>
  <li>Secure</li>
</ul>`,
        realWorldExample: "Unordered lists are like a grocery shopping list. It doesn't matter if you pick up milk before eggs or bread before cheese - the order isn't important. Similarly, a list of product features, team members, or menu items works as an unordered list. The bullet points show these items are related but not sequential."
      },
      {
        title: "Definition Lists",
        definition: "Definition lists (<dl>) display term-definition pairs, perfect for glossaries, metadata, or FAQs. They use <dt> for the term and <dd> for the definition/description. One term can have multiple definitions and vice versa.",
        code: `<!-- Basic definition list -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  
  <dt>JavaScript</dt>
  <dd>Programming language for web interactivity</dd>
</dl>

<!-- Multiple definitions for one term -->
<dl>
  <dt>Bank</dt>
  <dd>Financial institution</dd>
  <dd>The side of a river</dd>
  <dd>To tilt an airplane</dd>
</dl>`,
        realWorldExample: "Definition lists are like a dictionary or glossary. Each entry has a word (term) followed by its meaning (definition). In a cookbook, the ingredients section uses this format: 'Flour - 2 cups', 'Sugar - 1 cup'. In FAQ sections, questions are terms and answers are definitions. It's perfect whenever you're explaining or defining things."
      },
      {
        title: "Nested Lists",
        definition: "Lists can be nested inside other lists to create hierarchical structures. Place a new <ul> or <ol> inside an <li> element to create sublists. This is common in navigation menus, outlines, and site maps.",
        code: `<!-- Nested list structure -->
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrots</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>

<!-- Mixed ordered and unordered -->
<ol>
  <li>Main Topic 1
    <ul>
      <li>Subtopic A</li>
      <li>Subtopic B</li>
    </ul>
  </li>
  <li>Main Topic 2
    <ul>
      <li>Subtopic C</li>
    </ul>
  </li>
</ol>`,
        realWorldExample: "Nested lists are like a company org chart or a file folder system. The main list is like department heads, and nested lists are employees within each department. Or think of your computer's folders: 'Documents' might contain 'Work' and 'Personal', and each of those contains more subfolders. The indentation shows the hierarchy - what belongs to what."
      },
      {
        title: "Table Structure",
        definition: "Tables organize data in rows and columns using <table>, <tr> (table row), <td> (table data/cell), and <th> (table header) tags. They're designed for tabular data like schedules, pricing, or statistics - not for page layout.",
        code: `<!-- Basic table structure -->
<table>
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
</table>

<!-- Table with border (use CSS instead) -->
<table border="1">
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$999</td>
  </tr>
</table>`,
        realWorldExample: "Tables are like spreadsheets or sports league standings. Each row is a record (like a player or team), and each column is a category (name, wins, losses). A train schedule is a perfect table - rows for different trains, columns for stations and times. Tables organize related data so you can quickly compare information across rows and columns."
      },
      {
        title: "thead, tbody, tfoot",
        definition: "Tables can be structured with <thead> for headers, <tbody> for body content, and <tfoot> for footers. This semantic structure helps browsers, screen readers, and printers handle tables better - for example, repeating headers on each printed page.",
        code: `<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>1</td>
      <td>$999</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>2</td>
      <td>$25</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td colspan="2">Total:</td>
      <td>$1049</td>
    </tr>
  </tfoot>
</table>`,
        realWorldExample: "Think of a receipt from a store. The <thead> is the header showing column names ('Item', 'Price'). The <tbody> is all your purchased items. The <tfoot> is the bottom showing subtotal, tax, and total. When printing a long table over multiple pages, the header and footer repeat on each page - just like multi-page receipts show store info at top and totals at bottom of each page."
      },
      {
        title: "Row & Column Span",
        definition: "The colspan attribute makes a cell span multiple columns, while rowspan makes it span multiple rows. This is useful for creating complex table layouts like merged cells in spreadsheets, calendar layouts, or timetables.",
        code: `<!-- Column span example -->
<table border="1">
  <tr>
    <th colspan="3">Student Grades</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Math</th>
    <th>Science</th>
  </tr>
  <tr>
    <td>John</td>
    <td>90</td>
    <td>85</td>
  </tr>
</table>

<!-- Row span example -->
<table border="1">
  <tr>
    <th rowspan="2">Name</th>
    <th colspan="2">Grades</th>
  </tr>
  <tr>
    <th>Math</th>
    <th>Science</th>
  </tr>
  <tr>
    <td>John</td>
    <td>90</td>
    <td>85</td>
  </tr>
</table>`,
        realWorldExample: "Row and column spanning is like merging cells in Excel. Imagine a class schedule: Monday spans across morning and afternoon slots (rowspan), or 'Lunch Break' spans across all weekdays (colspan). In a tournament bracket, the winner's name spans across multiple rounds. Anytime you need one cell to cover the space of multiple cells, you use row or column spanning."
      },
      {
        title: "Table Accessibility",
        definition: "Accessible tables use <caption> for titles, <th> with scope attributes for headers, and proper structure so screen readers can navigate them. The scope attribute ('row' or 'col') helps assistive technology understand header relationships.",
        code: `<table>
  <caption>Monthly Sales Report 2026</caption>
  
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$10,000</td>
      <td>$2,000</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$12,000</td>
      <td>$2,500</td>
    </tr>
  </tbody>
</table>`,
        realWorldExample: "Accessible tables are like a well-organized filing system with clear labels. The caption is like the folder name. The scope attribute tells screen readers which way to read (across columns or down rows) - like telling someone 'read across each row' vs 'read down each column'. This helps blind users navigate tables just as clear labels help anyone find information in filing cabinets."
      },
      {
        title: "Form Input Types",
        definition: "HTML5 provides various input types for collecting different data: text, email, number, date, password, checkbox, radio, file, and more. Each type provides appropriate keyboard layouts on mobile devices and built-in validation.",
        code: `<form>
  <!-- Text input -->
  <input type="text" name="username" placeholder="Username">
  
  <!-- Email (validates format) -->
  <input type="email" name="email" placeholder="Email">
  
  <!-- Password (hidden characters) -->
  <input type="password" name="password">
  
  <!-- Number (with min/max) -->
  <input type="number" name="age" min="0" max="120">
  
  <!-- Date picker -->
  <input type="date" name="birthday">
  
  <!-- Checkbox -->
  <input type="checkbox" name="subscribe" id="sub">
  <label for="sub">Subscribe to newsletter</label>
  
  <!-- Radio buttons -->
  <input type="radio" name="gender" value="male" id="male">
  <label for="male">Male</label>
  <input type="radio" name="gender" value="female" id="female">
  <label for="female">Female</label>
  
  <!-- File upload -->
  <input type="file" name="avatar">
</form>`,
        realWorldExample: "Form inputs are like different types of questionnaire fields. Text input is like a blank line for writing. Checkboxes are like 'check all that apply' questions. Radio buttons are like multiple choice where you can only pick one. Date input is like those forms where you circle a calendar date. Number inputs have up/down arrows like counters. Each input type is specialized for its purpose, just like different question formats on paper forms."
      },
      {
        title: "Labels & Placeholders",
        definition: "Labels (<label>) describe form inputs and improve accessibility by allowing users to click the label to focus the input. Placeholders provide example text inside inputs. Labels are crucial for screen readers and should always be used, while placeholders are optional hints.",
        code: `<!-- Label with for attribute (recommended) -->
<label for="username">Username:</label>
<input type="text" id="username" name="username" 
       placeholder="Enter your username">

<!-- Label wrapping input (alternative) -->
<label>
  Email:
  <input type="email" name="email" 
         placeholder="you@example.com">
</label>

<!-- Multiple inputs with labels -->
<form>
  <label for="fname">First Name:</label>
  <input type="text" id="fname" 
         placeholder="John">
  
  <label for="lname">Last Name:</label>
  <input type="text" id="lname" 
         placeholder="Doe">
</form>`,
        realWorldExample: "Labels are like the questions on a form, while inputs are the blank spaces where you write answers. Placeholders are like light gray example text ('e.g., John Doe') that disappears when you start typing. Think of a job application: 'Name:' is the label (question), the blank line is the input, and 'First Last' in light text is the placeholder (example format). Labels stay visible; placeholders disappear."
      },
      {
        title: "Required & Pattern Validation",
        definition: "The required attribute makes fields mandatory before form submission. The pattern attribute validates input against a regular expression. Browsers show error messages automatically when validation fails, providing client-side validation without JavaScript.",
        code: `<form>
  <!-- Required field -->
  <label for="name">Name (required):</label>
  <input type="text" id="name" name="name" 
         required>
  
  <!-- Email validation (built-in) -->
  <label for="email">Email:</label>
  <input type="email" id="email" 
         required>
  
  <!-- Pattern validation (phone) -->
  <label for="phone">Phone (XXX-XXX-XXXX):</label>
  <input type="tel" id="phone" 
         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
         placeholder="123-456-7890"
         required>
  
  <!-- Password with requirements -->
  <label for="pwd">Password (min 8 chars):</label>
  <input type="password" id="pwd" 
         minlength="8" 
         required>
  
  <button type="submit">Submit</button>
</form>`,
        realWorldExample: "Form validation is like having a smart assistant check your forms before mailing them. Required fields are like mandatory questions marked with asterisks - you can't submit until they're filled. Pattern validation is like when forms say 'SSN must be XXX-XX-XXXX format' and reject '123456789'. The browser won't let you submit until everything's correct, saving you from rejection and re-submission later."
      },
      {
        title: "Form Submission Methods",
        definition: "Forms use the action attribute to specify where to send data and method to specify how. GET appends data to the URL (visible, for searches), while POST sends data in the request body (hidden, for sensitive data). The submit button triggers the submission.",
        code: `<!-- GET method (data in URL) -->
<form action="/search" method="GET">
  <input type="text" name="q" placeholder="Search">
  <button type="submit">Search</button>
</form>
<!-- Submits to: /search?q=searchterm -->

<!-- POST method (data hidden) -->
<form action="/register" method="POST">
  <label for="user">Username:</label>
  <input type="text" id="user" name="username">
  
  <label for="pass">Password:</label>
  <input type="password" id="pass" name="password">
  
  <button type="submit">Register</button>
</form>

<!-- Form with multiple submit buttons -->
<form action="/process" method="POST">
  <input type="text" name="data">
  <button type="submit" name="action" value="save">
    Save Draft
  </button>
  <button type="submit" name="action" value="publish">
    Publish
  </button>
</form>`,
        realWorldExample: "Form methods are like different ways to send mail. GET is like a postcard - the message is visible on the outside (URL), fine for non-sensitive info like searches. POST is like a sealed envelope - the contents are hidden, necessary for passwords and personal data. Search engines use GET so you can share search result URLs. Login forms use POST so passwords aren't visible in the URL bar or browser history."
      }
    ]
  },
  {
    id: 5,
    title: "Phase 5: Semantic HTML",
    icon: "🧩",
    topics: [
      {
        title: "Semantic Tags Overview",
        definition: "Semantic HTML uses elements that clearly describe their meaning and purpose: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>. These tags make code more readable for developers, accessible for users, and understandable for search engines, replacing generic <div> tags with meaningful structure.",
        code: `<!DOCTYPE html>
<html>
<body>
  <!-- Page header -->
  <header>
    <h1>Website Title</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <!-- Main content -->
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Article content...</p>
    </article>
    
    <aside>
      <h3>Related Links</h3>
    </aside>
  </main>
  
  <!-- Page footer -->
  <footer>
    <p>&copy; 2026 Company Name</p>
  </footer>
</body>
</html>`,
        realWorldExample: "Semantic HTML is like organizing a newspaper. Instead of calling everything 'box', you have specific sections: masthead (header), table of contents (nav), main story (main/article), sidebar ads (aside), and copyright info (footer). Just as newspaper sections have clear purposes, semantic tags tell browsers, search engines, and screen readers exactly what each part of your webpage is for."
      },
      {
        title: "Why Semantic HTML Matters",
        definition: "Semantic HTML improves accessibility (screen readers understand page structure), SEO (search engines better index content), maintainability (developers understand code faster), and future compatibility. It makes your HTML self-documenting and meaningful beyond just visual presentation.",
        code: `<!-- Bad: Non-semantic (divitis) -->
<div class="header">
  <div class="logo">Logo</div>
  <div class="menu">
    <div class="menu-item">Home</div>
  </div>
</div>

<!-- Good: Semantic -->
<header>
  <h1>Logo</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Screen readers can now skip to navigation,
     search engines understand page structure,
     developers see meaning at a glance -->`,
        realWorldExample: "Imagine walking into an unlabeled building versus one with clear signs. Non-semantic HTML is like a building where every room is called 'Room' - you need to go inside each to know its purpose. Semantic HTML is like having signs: 'Reception', 'Conference Hall', 'Exit'. Blind visitors (screen reader users) can navigate by signs, new employees (developers) understand the layout faster, and fire marshals (search engines) can map the building correctly."
      },
      {
        title: "SEO Benefits",
        definition: "Search engines use semantic HTML to better understand content hierarchy and importance. Proper heading structure (<h1>-<h6>), semantic sectioning (<article>, <nav>), and meaningful tags help search engines index your content accurately, potentially improving search rankings.",
        code: `<!-- SEO-friendly structure -->
<article>
  <!-- One H1 per page (main topic) -->
  <h1>Ultimate Guide to Web Development</h1>
  
  <!-- Organized hierarchy -->
  <section>
    <h2>HTML Basics</h2>
    <p>Content about HTML...</p>
    
    <h3>HTML Elements</h3>
    <p>More specific content...</p>
  </section>
  
  <section>
    <h2>CSS Styling</h2>
    <p>Content about CSS...</p>
  </section>
</article>

<!-- Search engines understand:
     - Main topic (H1)
     - Subtopics (H2)
     - Related content (sections) -->`,
        realWorldExample: "Semantic HTML for SEO is like writing a well-organized book with a clear table of contents, chapter headings, and subheadings. Search engines are like librarians cataloging books - they need clear structure to understand what your book (webpage) is about and where to file it. A book with proper chapters and headings gets cataloged correctly; a wall of text without structure gets poorly indexed, just like websites without semantic HTML."
      },
      {
        title: "Screen Reader Compatibility",
        definition: "Screen readers use semantic HTML to help blind users navigate. They can jump between landmarks (<nav>, <main>, <aside>), skip to content sections, and understand page structure. Proper semantics transform a visual layout into a logical auditory experience.",
        code: `<!-- Screen reader friendly -->
<header role="banner">
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#main">Skip to content</a></li>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main id="main" role="main">
  <article>
    <h1>Page Title</h1>
    <p>Content...</p>
  </article>
</main>

<aside role="complementary" aria-label="Sidebar">
  <h2>Related Articles</h2>
</aside>

<footer role="contentinfo">
  <p>Copyright info</p>
</footer>

<!-- Screen readers announce:
     "Banner region", "Navigation", 
     "Main content", "Complementary" -->`,
        realWorldExample: "Screen readers with semantic HTML are like having a tour guide in a museum who can say 'We're now entering the Egyptian exhibit (main), here's the navigation desk (nav), and on your right is the gift shop (aside).' Without semantic tags, it's like a guide saying 'Room, room, room' for everything - no context about what each space is for. Semantic tags are the signs and labels that make the tour meaningful."
      }
    ]
  },
  {
    id: 6,
    title: "Phase 6: Accessibility (A11y)",
    icon: "♿",
    topics: [
      {
        title: "WCAG Guidelines",
        definition: "WCAG (Web Content Accessibility Guidelines) are international standards for web accessibility. They follow four principles: Perceivable (users can perceive information), Operable (users can navigate), Understandable (content is clear), and Robust (works with assistive technologies). Levels range from A (basic) to AAA (highest).",
        code: `<!-- Perceivable: Alt text for images -->
<img src="chart.jpg" alt="Sales increased 50% in Q1 2026">

<!-- Operable: Keyboard navigation -->
<button type="button">Click Me</button>
<!-- (Works with keyboard, not just mouse) -->

<!-- Understandable: Clear labels -->
<label for="email">Email Address:</label>
<input type="email" id="email" 
       aria-describedby="email-help">
<small id="email-help">We'll never share your email</small>

<!-- Robust: Valid HTML -->
<!DOCTYPE html>
<html lang="en">
<!-- Proper structure works with all browsers -->`,
        realWorldExample: "WCAG is like building codes for construction. Just as buildings need ramps (Operable), clear exit signs (Understandable), fire alarms with lights and sounds (Perceivable), and must work during power outages (Robust), websites must work for everyone regardless of ability. Meeting these standards ensures your digital building is accessible to all visitors, not just those who can see, hear, or use a mouse."
      },
      {
        title: "ARIA Roles",
        definition: "ARIA (Accessible Rich Internet Applications) roles, states, and properties provide additional semantic information to assistive technologies. They fill gaps where native HTML lacks sufficient meaning, especially in dynamic web applications with custom widgets.",
        code: `<!-- ARIA roles for landmarks -->
<div role="navigation" aria-label="Main menu">
  <ul>...</ul>
</div>

<!-- Custom button made accessible -->
<div role="button" 
     tabindex="0"
     aria-pressed="false"
     onclick="toggle()">
  Toggle
</div>

<!-- Live regions (announce updates) -->
<div role="alert" aria-live="assertive">
  Form submitted successfully!
</div>

<!-- Descriptive labels -->
<button aria-label="Close dialog">
  <span aria-hidden="true">&times;</span>
</button>

<!-- Expanded/collapsed state -->
<button aria-expanded="false" 
        aria-controls="menu">
  Menu
</button>
<div id="menu" hidden>...</div>`,
        realWorldExample: "ARIA roles are like adding Braille labels and audio descriptions to a museum. The exhibits (HTML elements) exist, but ARIA adds extra context for people who can't see. A button shaped like an X needs aria-label='Close' so screen readers say 'Close button' instead of just 'X'. Live regions are like PA announcements - they interrupt to announce important updates, just like 'The museum closes in 10 minutes' over speakers."
      },
      {
        title: "Keyboard Navigation",
        definition: "Keyboard accessibility ensures users can navigate and interact with your site using only a keyboard (Tab, Enter, Arrow keys, Escape). Interactive elements must be focusable, focus order must be logical, and focus indicators must be visible. This helps users with motor disabilities and power users.",
        code: `<!-- Proper tab order (tabindex) -->
<div>
  <button tabindex="0">First (natural order)</button>
  <a href="#" tabindex="0">Second</a>
  <div tabindex="-1">Not in tab order</div>
</div>

<!-- Custom widget with keyboard support -->
<div role="button"
     tabindex="0"
     onkeydown="if(event.key==='Enter' || 
                event.key===' ') handleClick()">
  Press Enter or Space
</div>

<!-- Skip navigation link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Focus management -->
<style>
  /* Visible focus indicator */
  button:focus {
    outline: 2px solid blue;
    outline-offset: 2px;
  }
</style>`,
        realWorldExample: "Keyboard navigation is like designing a building where elevators and stairs go to all floors, not just some. Mouse users can 'fly' directly to any element, but keyboard users 'walk' step by step using Tab. A skip link is like an express elevator to skip the lobby (header/nav) and go straight to main content. Focus indicators are like highlighting each floor button as the elevator arrives - you need to see where you are."
      },
      {
        title: "Screen Reader Testing",
        definition: "Screen reader testing involves using assistive technology (NVDA, JAWS, VoiceOver) to experience your site as blind users do. This reveals issues invisible to sighted users, like missing alt text, poor heading structure, or confusing navigation. Regular testing ensures your site is truly accessible.",
        code: `<!-- Screen reader best practices -->

<!-- 1. Meaningful alt text -->
<img src="chart.jpg" 
     alt="Bar chart showing 50% sales increase">
<!-- Not: alt="chart" or alt="image" -->

<!-- 2. Descriptive links -->
<a href="report.pdf">Download Q1 2026 Report (PDF, 2MB)</a>
<!-- Not: <a href="report.pdf">Click here</a> -->

<!-- 3. Logical heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
<!-- Not: <h1>, <h3>, <h2> (skipping/wrong order) -->

<!-- 4. Hidden content from screen readers -->
<span aria-hidden="true">★★★★☆</span>
<span class="sr-only">4 out of 5 stars</span>`,
        realWorldExample: "Screen reader testing is like navigating a city blindfolded with only audio directions. If street signs aren't announced (missing alt text), directions are unclear ('turn here' vs 'turn left at Main Street'), or the map is in the wrong order (heading chaos), you'll get lost. Testing with a screen reader reveals these navigation problems. It's experiencing your website the way millions of blind users do every day."
      },
      {
        title: "Color Contrast Awareness",
        definition: "Sufficient color contrast between text and background ensures readability for users with low vision or color blindness. WCAG requires a 4.5:1 contrast ratio for normal text and 3:1 for large text (Level AA). Tools can check if your color combinations meet these standards.",
        code: `<!-- Good contrast examples -->
<style>
  /* High contrast (passes WCAG AA) */
  .good {
    color: #000000; /* Black */
    background: #FFFFFF; /* White */
    /* Ratio: 21:1 - Excellent! */
  }
  
  .also-good {
    color: #333333; /* Dark gray */
    background: #FFFFFF; /* White */
    /* Ratio: 12.6:1 - Great! */
  }
  
  /* Poor contrast (fails WCAG) */
  .bad {
    color: #777777; /* Light gray */
    background: #FFFFFF; /* White */
    /* Ratio: 4.5:1 - Borderline */
  }
  
  .very-bad {
    color: #CCCCCC; /* Very light gray */
    background: #FFFFFF; /* White */
    /* Ratio: 1.6:1 - Fails! */
  }
</style>`,
        realWorldExample: "Color contrast is like reading in different lighting conditions. High contrast (black on white) is like reading in bright sunlight - easy for everyone. Low contrast (light gray on white) is like reading in dim candlelight - difficult even for people with perfect vision. For people with low vision or color blindness, it's like reading in near-darkness. Proper contrast is like turning on proper lights - it helps everyone, but it's essential for some."
      },
      {
        title: "Accessible Forms & Tables",
        definition: "Accessible forms use proper labels, fieldsets for grouping, error messages associated with fields, and clear instructions. Accessible tables use headers, captions, scope attributes, and summaries to help screen reader users navigate and understand tabular data.",
        code: `<!-- Accessible Form -->
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="name">Full Name:</label>
    <input type="text" id="name" 
           aria-required="true"
           aria-describedby="name-error">
    <span id="name-error" role="alert"></span>
    
    <label for="email">Email:</label>
    <input type="email" id="email" required>
  </fieldset>
  
  <button type="submit">Submit</button>
</form>

<!-- Accessible Table -->
<table>
  <caption>Employee Sales Q1 2026</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John</th>
      <td>$50,000</td>
    </tr>
  </tbody>
</table>`,
        realWorldExample: "Accessible forms are like well-designed paper forms with clear instructions, grouped sections (Personal Info, Payment Info), and labels directly next to each field. Screen readers need the same clarity - which label goes with which field, what's required, what's the error. Accessible tables are like spreadsheets with column and row headers frozen in place - you always know what each number represents even when scrolling."
      }
    ]
  },
  {
    id: 7,
    title: "Phase 7: Advanced HTML5 Features",
    icon: "⚙️",
    topics: [
      {
        title: "HTML Data Attributes",
        definition: "Data attributes (data-*) let you store custom data on HTML elements without affecting presentation or semantics. JavaScript can read and modify these values, making them perfect for storing configuration, state, or identifiers that don't belong in classes or IDs.",
        code: `<!-- Storing custom data -->
<article data-post-id="12345" 
         data-author="John"
         data-category="technology">
  Article content
</article>

<!-- JavaScript access -->
<button data-action="delete" 
        data-confirm="Are you sure?"
        onclick="handleAction(this)">
  Delete
</button>

<script>
function handleAction(btn) {
  const action = btn.dataset.action;
  const message = btn.dataset.confirm;
  if (confirm(message)) {
    // perform action
  }
}
</script>

<!-- Multiple data attributes -->
<div data-user-id="789"
     data-user-role="admin"
     data-user-status="active">
  User profile
</div>`,
        realWorldExample: "Data attributes are like invisible sticky notes attached to objects. Imagine a library where books (elements) have visible labels (classes, IDs) and hidden notes (data attributes) for staff. A book might show 'Fiction' (class) but have a hidden note with inventory number, last checkout date, and location code (data attributes). Patrons see the cover, but the library system reads the hidden data to manage the book."
      },
      {
        title: "Meta Tags (SEO, Viewport, Charset)",
        definition: "Meta tags provide metadata about the HTML document, including character encoding, viewport settings for responsive design, and SEO information like descriptions and keywords. They go in the <head> section and don't display on the page but affect how browsers and search engines handle your content.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding (always first) -->
  <meta charset="UTF-8">
  
  <!-- Responsive viewport -->
  <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
  
  <!-- SEO meta tags -->
  <meta name="description" 
        content="Learn HTML with easy examples and tutorials">
  <meta name="keywords" 
        content="HTML, tutorial, web development">
  <meta name="author" content="John Doe">
  
  <!-- Social media (Open Graph) -->
  <meta property="og:title" content="HTML Guide">
  <meta property="og:description" content="Complete HTML tutorial">
  <meta property="og:image" content="preview.jpg">
  
  <title>HTML Learning Guide</title>
</head>`,
        realWorldExample: "Meta tags are like the card catalog entry for a library book - information about the book, not the content itself. Charset is like declaring the language alphabet used. Viewport is like telling a reader whether to hold the book portrait or landscape. Description is the summary on the back cover. Just as librarians use catalog cards to organize books, search engines use meta tags to understand and rank your website."
      },
      {
        title: "Favicon & Manifest",
        definition: "A favicon is the small icon displayed in browser tabs and bookmarks. The web app manifest is a JSON file that defines how your app appears when installed on mobile devices, including icons, colors, and display mode. Together they make your site recognizable and installable.",
        code: `<!DOCTYPE html>
<html>
<head>
  <!-- Favicon (multiple sizes) -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" 
        href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" 
        href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" 
        href="/apple-touch-icon.png">
  
  <!-- Web app manifest -->
  <link rel="manifest" href="/manifest.json">
  
  <title>My Website</title>
</head>
</html>

<!-- manifest.json file -->
{
  "name": "My Web App",
  "short_name": "MyApp",
  "icons": [{
    "src": "/icon-192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "theme_color": "#2196F3",
  "background_color": "#FFFFFF",
  "display": "standalone"
}`,
        realWorldExample: "A favicon is like a logo on a business card - a small icon that identifies your brand. When you have dozens of browser tabs open, favicons help you find the right one, just like logos on app icons help you find apps on your phone. The manifest is like installation instructions that tell phones how to save your website as an app - what icon to use, what color scheme, whether to hide the browser bar."
      },
      {
        title: "Iframe Usage",
        definition: "The <iframe> element embeds another HTML page within the current page, creating a page-within-a-page. Common uses include embedding videos (YouTube), maps (Google Maps), or third-party widgets. Iframes run in isolation for security but can communicate with the parent page if from the same origin.",
        code: `<!-- Basic iframe -->
<iframe src="https://example.com" 
        width="800" 
        height="600"
        title="Example Website">
</iframe>

<!-- YouTube video embed -->
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media"
  allowfullscreen>
</iframe>

<!-- Google Maps embed -->
<iframe 
  src="https://www.google.com/maps/embed?pb=..."
  width="600" height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>

<!-- Security: sandbox attribute -->
<iframe src="untrusted.html" 
        sandbox="allow-scripts">
</iframe>`,
        realWorldExample: "An iframe is like a TV within a TV - picture-in-picture mode. The main channel (your webpage) continues playing while a smaller screen (iframe) shows different content. YouTube embeds are iframes showing YouTube's player on your page. Just as the small TV has its own remote and doesn't interfere with the main TV, iframes are isolated - they can't access your page's data for security, but you can still watch the content."
      },
      {
        title: "HTML Entities",
        definition: "HTML entities are special codes for displaying reserved characters (<, >, &), symbols (©, ™), and non-keyboard characters (€, é, ™). They start with & and end with ; preventing conflicts with HTML syntax and enabling international characters.",
        code: `<!-- Reserved characters -->
&lt;   <!-- < (less than) -->
&gt;   <!-- > (greater than) -->
&amp;  <!-- & (ampersand) -->
&quot; <!-- " (quote) -->
&#39;  <!-- ' (apostrophe) -->

<!-- Common symbols -->
&copy;   <!-- © (copyright) -->
&reg;    <!-- ® (registered) -->
&trade;  <!-- ™ (trademark) -->
&euro;   <!-- € (euro) -->
&pound;  <!-- £ (pound) -->

<!-- Example usage -->
<p>Use &lt;p&gt; tags for paragraphs</p>
<!-- Displays: Use <p> tags for paragraphs -->

<p>Price: &euro;49.99</p>
<!-- Displays: Price: €49.99 -->

<p>&copy; 2026 Company Name</p>
<!-- Displays: © 2026 Company Name -->

<!-- Non-breaking space -->
<p>Mr.&nbsp;Smith</p>
<!-- Keeps "Mr. Smith" on same line -->`,
        realWorldExample: "HTML entities are like escape codes or keyboard shortcuts for special characters. Imagine writing on a computer where '<' would always try to create a tag - you need a special code (&lt;) to actually display '<' as text. It's like typing 'copyright symbol' when you can't find © on your keyboard. Entities are the HTML keyboard's special key combinations for accessing symbols not directly available."
      },
      {
        title: "Custom Data Attributes in Practice",
        definition: "Custom data attributes shine in real applications for storing state, configuration, and relationships. They work with CSS for styling based on state and with JavaScript for interactive features, avoiding the need for global variables or complex DOM queries.",
        code: `<!-- Tabs with data attributes -->
<div class="tabs">
  <button data-tab="home" class="active">Home</button>
  <button data-tab="profile">Profile</button>
  <button data-tab="settings">Settings</button>
</div>

<div data-tab-content="home">Home content</div>
<div data-tab-content="profile" hidden>Profile content</div>
<div data-tab-content="settings" hidden>Settings content</div>

<!-- Accordion with state -->
<div class="accordion-item" data-expanded="false">
  <h3 data-toggle>Click to expand</h3>
  <div data-content>Hidden content</div>
</div>

<!-- Product with multiple data points -->
<div class="product" 
     data-id="12345"
     data-price="29.99"
     data-stock="in-stock"
     data-category="electronics">
  <h4>Product Name</h4>
  <button data-action="add-to-cart">Add to Cart</button>
</div>

<!-- CSS can style based on data attributes -->
<style>
  [data-stock="out-of-stock"] {
    opacity: 0.5;
  }
  [data-expanded="true"] [data-content] {
    display: block;
  }
</style>`,
        realWorldExample: "Data attributes in practice are like barcode stickers on products in a store. Each item (element) has visible labels (brand, price tag) and a barcode (data attributes) that scanners (JavaScript) read for inventory, pricing, and tracking. The barcode doesn't affect how customers see the product, but it's essential for store operations. Similarly, data attributes store information for your website's functionality without cluttering the visible content."
      }
    ]
  },
  {
    id: 8,
    title: "Phase 8: SEO & Performance",
    icon: "🔐",
    topics: [
      {
        title: "Meta Title & Description",
        definition: "The <title> tag defines the page title shown in browser tabs and search results (50-60 characters ideal). Meta descriptions summarize page content in search results (150-160 characters). Both significantly impact click-through rates from search engines and should be unique for each page.",
        code: `<head>
  <!-- Page title (appears in tab and search results) -->
  <title>Learn HTML - Complete Beginner's Guide 2026</title>
  
  <!-- Meta description (appears in search results) -->
  <meta name="description" 
        content="Master HTML with our comprehensive guide. 
        Learn tags, elements, forms, and semantic HTML 
        with practical examples. Perfect for beginners!">
  
  <!-- Bad examples to avoid -->
  <!-- Too short: <title>HTML</title> -->
  <!-- Too long: <title>Learn HTML CSS JavaScript...</title> -->
  <!-- Not unique: <title>Home</title> -->
</head>`,
        realWorldExample: "Title and description are like a book's spine and back cover text in a library. The title (on the spine) helps people find your book when browsing shelves (search results). The description (back cover summary) convinces them to pick it up and read more. A vague title like 'Book' or missing description won't attract readers. Specific, compelling titles and descriptions are like good marketing - they earn clicks and visits."
      },
      {
        title: "Heading Hierarchy",
        definition: "Proper heading hierarchy uses <h1> through <h6> in logical order to structure content. Each page should have one <h1> (main topic), followed by <h2> for sections, <h3> for subsections, etc. Don't skip levels or use headings for styling - this helps SEO and accessibility.",
        code: `<!-- Correct heading hierarchy -->
<article>
  <h1>Complete Guide to Web Development</h1>
  
  <h2>Frontend Development</h2>
  <p>Introduction to frontend...</p>
  
    <h3>HTML Basics</h3>
    <p>HTML content...</p>
    
      <h4>HTML Elements</h4>
      <p>Element details...</p>
    
    <h3>CSS Styling</h3>
    <p>CSS content...</p>
  
  <h2>Backend Development</h2>
  <p>Backend content...</p>
</article>

<!-- WRONG: Skipping levels -->
<h1>Title</h1>
<h3>Skipped H2!</h3> <!-- Bad! -->

<!-- WRONG: Multiple H1s -->
<h1>First Title</h1>
<h1>Second Title</h1> <!-- Bad! -->`,
        realWorldExample: "Heading hierarchy is like an outline for a research paper or a table of contents in a book. The main title is H1 (the book title), chapter titles are H2 (major sections), section titles are H3 (subsections), and so on. You wouldn't jump from Chapter 1 directly to subsection 1.2.1 without section 1.2. Search engines and screen readers navigate your content the same way - logical hierarchy helps them understand structure and importance."
      },
      {
        title: "Semantic Markup for SEO",
        definition: "Search engines understand semantic HTML better than generic divs. Using <article>, <header>, <nav>, <main>, <aside>, and <footer> helps search engines identify important content, navigation, and supplementary information, improving how they index and rank your pages.",
        code: `<!-- SEO-friendly semantic structure -->
<header>
  <h1>Website Name</h1>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <header>
      <h1>Article Title: How to Learn HTML</h1>
      <p>Published: <time datetime="2026-02-01">Feb 1, 2026</time></p>
      <p>By: <span itemprop="author">John Doe</span></p>
    </header>
    
    <p>Article content with proper semantic markup...</p>
    
    <footer>
      <p>Tags: <a href="/tags/html">HTML</a></p>
    </footer>
  </article>
  
  <aside>
    <h2>Related Articles</h2>
  </aside>
</main>

<footer>
  <p>&copy; 2026</p>
</footer>`,
        realWorldExample: "Semantic markup for SEO is like organizing a newspaper with clear sections: masthead, headlines, main story, sidebar, and footer. Search engine crawlers are like speed readers who scan section headings to understand content quickly. A newspaper where everything is unlabeled paragraphs is hard to scan. Similarly, a website using only <div> tags forces search engines to guess what's important, while semantic tags clearly label 'this is navigation', 'this is main content', 'this is supplementary'."
      },
      {
        title: "Image Optimization",
        definition: "Optimized images load faster through proper formatting, compression, and sizing. Use appropriate formats (JPEG for photos, PNG for graphics, SVG for icons, WebP for modern browsers), compress without visible quality loss, specify dimensions, and use lazy loading for images below the fold.",
        code: `<!-- Optimized image with dimensions -->
<img src="photo-800.jpg" 
     alt="Sunset over mountains"
     width="800" 
     height="600"
     loading="lazy">

<!-- Responsive images (browser picks best size) -->
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w,
             photo-800.jpg 800w,
             photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 
            (max-width: 1200px) 50vw,
            800px"
     alt="Optimized responsive image">

<!-- Modern format with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Fallback image">
</picture>

<!-- Lazy loading (loads when scrolled into view) -->
<img src="below-fold.jpg" 
     loading="lazy" 
     alt="Loads when needed">`,
        realWorldExample: "Image optimization is like choosing the right vehicle for a delivery. You wouldn't send a semi-truck to deliver a letter (huge image for a thumbnail), nor would you use a bicycle for furniture (tiny image blown up). JPEG is the compact car (good for most photos), PNG is the pickup truck (handles transparency/graphics), SVG is the motorcycle (tiny, perfect for icons), and WebP is the electric car (modern, efficient). Lazy loading is like only dispatching vehicles when orders come in."
      },
      {
        title: "Structured Data Basics",
        definition: "Structured data (Schema.org markup) helps search engines understand your content's meaning - whether it's a recipe, event, product, review, etc. This can earn rich snippets in search results (star ratings, prices, cooking times) that improve click-through rates and visibility.",
        code: `<!-- Article structured data -->
<article itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">How to Bake Chocolate Cake</h1>
  <p>By <span itemprop="author">Jane Chef</span></p>
  <time itemprop="datePublished" datetime="2026-02-01">
    Feb 1, 2026
  </time>
  <div itemprop="articleBody">
    <p>Article content...</p>
  </div>
</article>

<!-- Recipe structured data (rich snippets) -->
<div itemscope itemtype="https://schema.org/Recipe">
  <h2 itemprop="name">Chocolate Cake</h2>
  <img itemprop="image" src="cake.jpg" alt="Chocolate cake">
  <p itemprop="description">Delicious chocolate cake</p>
  
  <span itemprop="prepTime" content="PT30M">30 min prep</span>
  <span itemprop="cookTime" content="PT45M">45 min cook</span>
  
  <div itemprop="aggregateRating" 
       itemscope itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.8</span> stars
    (<span itemprop="reviewCount">127</span> reviews)
  </div>
</div>`,
        realWorldExample: "Structured data is like adding universal barcodes to products. Without barcodes, a store clerk must read labels and guess categories. With barcodes, scanners instantly know everything - price, brand, category. Similarly, without structured data, search engines parse your HTML and guess what it is. With Schema.org markup, you explicitly tell Google 'this is a recipe with 4.8 stars, 30 min prep time', earning special formatting in search results, just like verified products get prime shelf space."
      },
      {
        title: "Performance Best Practices",
        definition: "HTML performance involves minimizing file size, reducing HTTP requests, lazy loading non-critical resources, and optimizing the critical rendering path. Techniques include inlining critical CSS, deferring JavaScript, preloading important assets, and using efficient HTML structure.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  
  <!-- Preload critical assets -->
  <link rel="preload" href="critical.css" as="style">
  <link rel="preload" href="logo.webp" as="image">
  
  <!-- Inline critical CSS (above fold) -->
  <style>
    /* Critical CSS here */
    header { background: #333; }
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="stylesheet" href="styles.css" media="print" 
        onload="this.media='all'">
</head>
<body>
  <!-- Content here -->
  
  <!-- Defer JavaScript (loads after HTML) -->
  <script src="app.js" defer></script>
  
  <!-- Async for independent scripts -->
  <script src="analytics.js" async></script>
  
  <!-- Lazy load images -->
  <img src="hero.jpg" alt="Hero">
  <img src="feature.jpg" loading="lazy" alt="Feature">
</body>
</html>`,
        realWorldExample: "Performance optimization is like organizing a restaurant kitchen for fast service. Critical CSS/assets are like having knives, pans, and ingredients at arm's reach (preloaded, inline). Defer is like starting appetizers before mains (load HTML first, JavaScript after). Async is like having independent stations (salad station works independently of grill). Lazy loading is like only cooking desserts when ordered, not preparing them for everyone upfront. Efficiency = faster service (page loads)."
      }
    ]
  },
  {
    id: 9,
    title: "Phase 9: Tools & Best Practices",
    icon: "🛠️",
    topics: [
      {
        title: "Code Formatting & Readability",
        definition: "Well-formatted HTML uses consistent indentation (2 or 4 spaces), meaningful tag names, proper nesting, and logical organization. Readable code helps team collaboration, maintenance, and debugging. Use comments for complex sections but keep code self-documenting through semantic HTML.",
        code: `<!-- GOOD: Properly formatted HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Well Formatted Page</title>
</head>
<body>
  <!-- Main navigation -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
  
  <main>
    <article>
      <h1>Article Title</h1>
      <p>Paragraph with proper indentation.</p>
    </article>
  </main>
</body>
</html>

<!-- BAD: Poor formatting -->
<html><head><title>Bad</title></head><body><div>
<p>No indentation</p><div><span>Hard to read
</span></div></div></body></html>`,
        realWorldExample: "Code formatting is like organizing a closet versus throwing clothes in a pile. A well-organized closet has sections (shirts, pants, accessories), items folded uniformly, and everything in its place - you can find what you need quickly. Messy code is like a clothes pile - it works, but finding or changing anything is frustrating. Proper indentation shows parent-child relationships, like hangers showing which accessories belong to which outfits."
      },
      {
        title: "HTML Validation (W3C)",
        definition: "The W3C validator checks HTML against official standards, catching errors like unclosed tags, invalid attributes, or improper nesting. Valid HTML ensures cross-browser compatibility, better SEO, and fewer bugs. Use validator.w3.org to check your code regularly.",
        code: `<!-- Valid HTML example -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Valid Page</title>
</head>
<body>
  <h1>Heading</h1>
  <p>Paragraph with <strong>bold</strong> text.</p>
  <img src="image.jpg" alt="Description">
</body>
</html>

<!-- Common validation errors -->

<!-- ERROR: Unclosed tag -->
<p>Paragraph
<!-- Missing </p> -->

<!-- ERROR: Invalid nesting -->
<p>Text <div>Block inside inline</div></p>
<!-- Can't put block element inside <p> -->

<!-- ERROR: Missing required attribute -->
<img src="photo.jpg">
<!-- Missing alt attribute -->

<!-- ERROR: Duplicate IDs -->
<div id="main">Content</div>
<div id="main">More content</div>
<!-- IDs must be unique -->`,
        realWorldExample: "HTML validation is like spell-check and grammar-check for code. Just as Microsoft Word underlines errors in documents, W3C validator catches HTML mistakes. A document with spelling errors might be readable but looks unprofessional and could confuse readers. Invalid HTML might display in some browsers but break in others, fail accessibility tools, or hurt SEO - like how typos might confuse readers or look bad in print."
      },
      {
        title: "Version Control (Git Basics)",
        definition: "Version control systems like Git track changes to your code over time, allowing you to revert mistakes, collaborate with teams, and maintain history. Basic concepts include commits (save points), branches (parallel versions), and repositories (project storage).",
        code: `<!-- Not actual HTML, but Git commands for HTML projects -->

<!-- Initialize Git repository -->
git init

<!-- Track HTML files -->
git add index.html
git add styles.css
git add *.html

<!-- Save changes with message -->
git commit -m "Add homepage HTML structure"

<!-- Create branch for new feature -->
git branch new-feature
git checkout new-feature

<!-- Make changes to HTML -->
<!-- ... edit index.html ... -->

<!-- Commit changes -->
git add index.html
git commit -m "Add contact form to homepage"

<!-- Merge back to main -->
git checkout main
git merge new-feature

<!-- View history -->
git log`,
        realWorldExample: "Git is like a time machine for your code with multiple timelines. Each commit is a save point you can return to - like checkpoints in a video game. Branches are parallel universes where you can experiment (try a new homepage design) without affecting the main timeline. If the experiment works, merge it back; if not, delete the branch. It's essential for teams - like Google Docs version history, but more powerful."
      },
      {
        title: "Clean & Maintainable Markup",
        definition: "Maintainable HTML is semantic, modular, DRY (Don't Repeat Yourself), and follows conventions. Use components/partials for repeated elements, avoid inline styles, keep structure separate from presentation, and write code that others (including future you) can understand.",
        code: `<!-- GOOD: Clean, maintainable -->
<header class="site-header">
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
      </li>
    </ul>
  </nav>
</header>

<!-- BAD: Hard to maintain -->
<div style="background:blue;padding:20px;">
  <div style="display:flex;">
    <div style="margin:10px;">
      <a href="/" style="color:white;text-decoration:none;">
        Home
      </a>
    </div>
  </div>
</div>

<!-- GOOD: Reusable component structure -->
<!-- card.html partial -->
<article class="card">
  <img class="card-image" src="" alt="">
  <h3 class="card-title"></h3>
  <p class="card-description"></p>
</article>

<!-- Include card multiple times -->
<!-- (with templating or components) -->`,
        realWorldExample: "Maintainable code is like IKEA furniture with instructions versus a custom built-in bookshelf. IKEA furniture (modular, maintainable code) can be assembled by anyone following instructions, moved to different rooms, or repaired by replacing parts. Custom built-ins (messy code with inline styles) work but are hard to modify, can't be moved, and only the original builder understands them. Use consistent patterns like IKEA uses standard parts."
      },
      {
        title: "HTML Coding Standards",
        definition: "Coding standards are agreed-upon conventions for HTML structure, naming, and organization. Common standards include lowercase tag names, double quotes for attributes, meaningful class names, file organization, and documentation. Following standards ensures team consistency.",
        code: `<!-- Standard conventions -->

<!-- 1. Lowercase tags and attributes -->
<div class="container">  <!-- Good -->
<DIV CLASS="container">  <!-- Bad -->

<!-- 2. Double quotes for attributes -->
<img src="photo.jpg" alt="Photo">  <!-- Good -->
<img src='photo.jpg' alt='Photo'>  <!-- Acceptable but inconsistent -->

<!-- 3. Meaningful class names -->
<button class="btn-primary">  <!-- Good: descriptive -->
<button class="b1">           <!-- Bad: unclear -->

<!-- 4. Semantic HTML over divs -->
<article>  <!-- Good -->
<div class="article">  <!-- Bad -->

<!-- 5. Proper indentation (2 or 4 spaces) -->
<div>
  <p>Properly indented</p>
</div>

<!-- 6. Comments for complex sections -->
<!-- Primary navigation -->
<nav>...</nav>

<!-- 7. Organize attributes logically -->
<img 
  class="hero-image"
  src="hero.jpg" 
  alt="Hero image"
  width="1200"
  height="600"
  loading="lazy">`,
        realWorldExample: "Coding standards are like grammar rules for writing. Just as books follow grammar conventions (capitalize sentences, use punctuation), code follows standards (lowercase tags, meaningful names). A book with inconsistent capitalization and no punctuation is hard to read. Code without standards is like mixing British and American English randomly - understandable but confusing. Standards ensure everyone on the team 'speaks the same dialect' making collaboration smooth."
      }
    ]
  },
  {
    id: 10,
    title: "Phase 10: Real-World Projects",
    icon: "📁",
    topics: [
      {
        title: "Personal Portfolio Page",
        definition: "A portfolio page showcases your skills, projects, and experience. It should include a header with navigation, hero section with introduction, projects section with examples, skills/about section, contact information, and footer. Use semantic HTML and proper structure.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Web Developer Portfolio</title>
  <meta name="description" content="Portfolio of John Doe, 
        a web developer specializing in HTML, CSS, and JavaScript">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="hero">
      <h1>John Doe</h1>
      <p>Web Developer & Designer</p>
    </section>
    
    <section id="about">
      <h2>About Me</h2>
      <p>Passionate web developer with expertise in...</p>
    </section>
    
    <section id="projects">
      <h2>My Projects</h2>
      <article class="project">
        <h3>E-commerce Website</h3>
        <img src="project1.jpg" alt="E-commerce project">
        <p>Built a full e-commerce site with...</p>
      </article>
    </section>
    
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:john@example.com">
         john@example.com</a></p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 John Doe</p>
  </footer>
</body>
</html>`,
        realWorldExample: "A portfolio website is like a digital business card and resume combined. Just as a business card shows your name, title, and contact info, your hero section does the same. The projects section is like your resume's work experience - showcasing what you've built. The about section is your elevator pitch. It's your professional presence online, like how artists have gallery exhibitions, but yours is accessible 24/7 worldwide."
      },
      {
        title: "Resume Website",
        definition: "A resume website presents your professional experience in web format. Include personal info, professional summary, work experience, education, skills, and downloadable PDF resume. Use proper semantic markup for SEO and accessibility, making it easy for recruiters to find and read.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>John Doe - Resume</title>
  <meta name="description" content="Resume of John Doe, 
        Software Developer with 5 years experience">
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Software Developer</p>
    <p>Email: john@example.com | Phone: (555) 123-4567</p>
    <p><a href="resume.pdf" download>Download PDF Resume</a></p>
  </header>
  
  <main>
    <section id="summary">
      <h2>Professional Summary</h2>
      <p>Experienced developer with expertise in...</p>
    </section>
    
    <section id="experience">
      <h2>Work Experience</h2>
      <article>
        <h3>Senior Developer</h3>
        <p>Tech Company Inc. | 2022 - Present</p>
        <ul>
          <li>Led team of 5 developers</li>
          <li>Increased performance by 40%</li>
        </ul>
      </article>
      
      <article>
        <h3>Junior Developer</h3>
        <p>Startup Co. | 2019 - 2022</p>
        <ul>
          <li>Developed web applications</li>
          <li>Maintained codebase</li>
        </ul>
      </article>
    </section>
    
    <section id="education">
      <h2>Education</h2>
      <article>
        <h3>Bachelor of Science in Computer Science</h3>
        <p>University Name | 2015 - 2019</p>
      </article>
    </section>
    
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>Git, Agile</li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 John Doe</p>
  </footer>
</body>
</html>`,
        realWorldExample: "A resume website is like having your paper resume displayed in a store window instead of sitting in a drawer. It's accessible 24/7, searchable by Google (recruiters can find you), easily updated (no need to print new copies), and can include clickable links to your projects and social profiles. It's your paper resume evolved - still contains the same sections (experience, education, skills) but in an interactive, always-accessible format."
      },
      {
        title: "Landing Page",
        definition: "A landing page is focused on one goal: converting visitors (signing up, buying, downloading). It includes a compelling headline, benefits/features, social proof (testimonials), clear call-to-action, and minimal distractions. Every element serves the conversion goal.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn HTML - Free Course</title>
  <meta name="description" content="Master HTML in 30 days 
        with our free course. Join 10,000+ students.">
</head>
<body>
  <!-- Hero section with CTA -->
  <section id="hero">
    <h1>Master HTML in 30 Days</h1>
    <p>Join 10,000+ students learning web development</p>
    
    <!-- Primary CTA -->
    <form action="/signup" method="POST">
      <input type="email" name="email" 
             placeholder="Enter your email" required>
      <button type="submit">Start Free Course</button>
    </form>
  </section>
  
  <!-- Benefits section -->
  <section id="benefits">
    <h2>What You'll Learn</h2>
    <article>
      <h3>Build Real Websites</h3>
      <p>Create professional websites from scratch</p>
    </article>
    <article>
      <h3>Lifetime Access</h3>
      <p>Learn at your own pace, forever</p>
    </article>
    <article>
      <h3>Certificate</h3>
      <p>Get certified upon completion</p>
    </article>
  </section>
  
  <!-- Social proof -->
  <section id="testimonials">
    <h2>What Students Say</h2>
    <blockquote>
      <p>"This course changed my career!"</p>
      <footer>- Sarah, Web Developer</footer>
    </blockquote>
  </section>
  
  <!-- Final CTA -->
  <section id="cta">
    <h2>Ready to Start?</h2>
    <form action="/signup" method="POST">
      <input type="email" name="email" required>
      <button type="submit">Join Free Now</button>
    </form>
  </section>
  
  <footer>
    <p>&copy; 2026 HTML Course</p>
  </footer>
</body>
</html>`,
        realWorldExample: "A landing page is like a focused sales pitch or infomercial. Unlike a website with many pages and goals, a landing page has one mission (like an infomercial selling one product). The headline grabs attention ('Wait, there's more!'), benefits show value ('It slices, dices...'), testimonials build trust ('Here's what customers say'), and the CTA demands action ('Call now!'). Everything - design, copy, structure - pushes visitors toward that one goal: sign up, buy, or download."
      }
    ]
  }
];
