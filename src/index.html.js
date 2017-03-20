const scriptTagForChunk = src => `<link rel="preload" as="script" href="${src}" />`

module.exports.htmlTemplate = ({ cssPath, jsPath, vendorPath, appHTML, state, chunks }) => `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
  <link href="${cssPath}" rel="stylesheet">
  ${chunks.map(scriptTagForChunk)}
  <title>react app</title>
</head>
<body>
  <div id="root">${appHTML}</div>

  <script>
    window.INITIAL_STATE = ${JSON.stringify(state).replace(/</g, '\\u003c')}
  </script>
  <script type="text/javascript" src="${vendorPath}"></script>
  <script type="text/javascript" src="${jsPath}"></script>
</body>
</html>`
