"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReactPage = void 0;
function getReactPage(data) {
    return `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
</head>

<body>
    <div id="app">${data}</div>
    <script src="js/bundle.js"></script>
</body>

</html> `;
}
exports.getReactPage = getReactPage;
//# sourceMappingURL=utils.js.map