
import getScript from './getScript';
import getLinks from './getLinks';

export default componentHTML => {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
    ${getLinks()}
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    ${getScript()}
  </body>
  </html>`;

  return html;
}