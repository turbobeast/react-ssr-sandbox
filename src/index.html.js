module.exports.htmlTemplate = ({ cssPath, jsPath, appHTML }) => `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
  <link href="${cssPath}" rel="stylesheet">
  <title>react app</title>
</head>
<body>
  <div id="root">${appHTML}</div>
  <script type="text/javascript" src="${jsPath}"></script>
</body>
</html>`
