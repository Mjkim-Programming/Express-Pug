# Express Interface For Pug

Installation:
```bash
git clone https://github.com/Mjkim-Programming/Express-Pug
cd Express-Pug
npm install
npm run watch
```
Change index.js And pug files in views directory to use. <br>

## Usage
**Init Function**<br>
basic form:
```javascript
const app = InitWebApp(port, url_prefix);
```
usage:
```javascript
const app = InitWebApp(8080, "/api");
app.run()
```
This will create an app that uses port 8080 and has the prefix "/api".
ex) localhost:8080/api/your-link-here <br><br>

**We will use /api prefix later, too**

**Send Return**<br>
basic form:
```javascript
app.sendText(url, text);
app.sendTemplate(url, template-file-name);
```
usage:
```javascript
app.sendText("/text","Text");
app.sendTemplate("/test-template","index");
```
The first code will send "Text" to /api/text.
The second code will send index.pug to /api/test-template.