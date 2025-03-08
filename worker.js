addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    try {
      // Fetch the index.html file
      const html = await fetch(new URL('./index.html', import.meta.url));
      if (!html.ok) {
          throw new Error("Could not fetch index.html");
      }
      const content = await html.text();
  
      // Return the HTML as a response
      return new Response(content, {
        headers: { 'Content-Type': 'text/html' },
      });
    } catch (error) {
      return new Response(`Error: ${error.message}`, {status: 500})
    }
  }