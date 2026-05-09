const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  // Epilogue (use the latin woff2 URL used previously)
  {
    url: 'https://fonts.gstatic.com/s/epilogue/v20/O4ZRFGj5hxF0EhjimlIksgg.woff2',
    dest: path.join(__dirname, '..', 'public', 'fonts', 'Epilogue-400.woff2'),
  },
  // We'll reuse the same file for higher weights for simplicity
  {
    url: 'https://fonts.gstatic.com/s/epilogue/v20/O4ZRFGj5hxF0EhjimlIksgg.woff2',
    dest: path.join(__dirname, '..', 'public', 'fonts', 'Epilogue-500.woff2'),
  },
  {
    url: 'https://fonts.gstatic.com/s/epilogue/v20/O4ZRFGj5hxF0EhjimlIksgg.woff2',
    dest: path.join(__dirname, '..', 'public', 'fonts', 'Epilogue-600.woff2'),
  },
  {
    url: 'https://fonts.gstatic.com/s/epilogue/v20/O4ZRFGj5hxF0EhjimlIksgg.woff2',
    dest: path.join(__dirname, '..', 'public', 'fonts', 'Epilogue-700.woff2'),
  },
  // Mulish 400
  {
    url: 'https://fonts.gstatic.com/s/mulish/v18/1Ptyg83HX_SGhgqO0yLcmjzUAuWexZNR8aevGw.woff2',
    dest: path.join(__dirname, '..', 'public', 'fonts', 'Mulish-400.woff2'),
  },
];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    ensureDir(dest);
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(
            new Error(`Failed to download ${url} - status ${res.statusCode}`),
          );
          return;
        }
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

async function run() {
  for (const f of fonts) {
    try {
      console.log('Downloading', f.url, '->', f.dest);
      await download(f.url, f.dest);
      console.log('Saved', f.dest);
    } catch (err) {
      console.error('Error downloading', f.url, err.message);
    }
  }
}

run();
