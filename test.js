(async () => {
    const fetch = (await import('node-fetch')).default;
  
    const urls = [
      'http://localhost:3000/',
      'http://localhost:3000/catalog',
      'http://localhost:3000/catalog/books',
      'http://localhost:3000/catalog/bookinstances/',
      'http://localhost:3000/catalog/authors/',
      'http://localhost:3000/catalog/genres/',
      'http://localhost:3000/catalog/book/5846437593935e2f8c2aa226',
      'http://localhost:3000/catalog/book/create'
    ];
  
    urls.forEach(async (url) => {
      try {
        const response = await fetch(url);
        const body = await response.text();
        console.log(`Response for ${url}:\n`);
        console.log(body);
        console.log('\n--------------------\n');
      } catch (error) {
        console.error(`${url} - Error: ${error.message}`);
      }
    });
  })();
  