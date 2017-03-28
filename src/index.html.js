module.exports.htmlTemplate = ({ cssPath, jsPath, appHTML, state }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
  <link rel="stylesheet" href="${cssPath}">
  <title>react app</title>
</head>
<body>
  <div id="root">${appHTML}</div>
  <script>
    window.INITIAL_STATE = ${JSON.stringify(state).replace(/</g, '\\u003c')}
  </script>
  <script src="${jsPath}"></script>
</body>
</html>`
