# embed-medium-blog-on-website
> This is a free and simple guide through that you can finally **embed your medium grid to your website by yourself** without worrying about your personal info being packed by 3rd party APIs.
![](https://miro.medium.com/max/1400/1*2fLUh2aCOVMF_iAhwskHdQ.png)
After a tedious search for tools to embed the medium to a specific website, I figured that I have to write my own because you don't trust any random API to do it for you nowadays, especially when you need to hand in your personal info.
So that's it. I write and build this to help anyone like I was struggling on achieving it.
First, thanks to ([Embed Medium as a Blog on Your Site… | by Sabesan Sathananthan | DataDrivenInvestor](https://medium.datadriveninvestor.com/embed-medium-as-a-blog-on-your-site-54a1b49cbe16)) who first build the script. I later build a modern one based on it.
```javascript
var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
yourString = yourString.replace('h4', 'p');
yourString = yourString.replace('h3', 'p');

var maxLength = 120; // maximum number of characters to extract
//trim the string to the maximum length
var trimmedString = yourString.substr(0, maxLength);
//re-trim if we are in the middle of a word
trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

display += `<p class="card-text">${trimmedString}...</p>`;
```
The modifying description part would face problems especially when there are elements other than text that happened to show within the first 120 texts. I've removed it and replaced it with categories in RSS.
(use http://jsonviewer.stack.hu/ to check json file easier)
```javascript
display += ' <p>'
var categories = item["categories"];
for (var i=0; i<categories.length; i++){
  display += ` <a href="#"><i>#${categories[i]}</i></a> &nbsp;`
}
display += ' </p>'
```
Other than that I've also changed the pagination and addressed the thumbnail image not fitting problem.
```css
.medium-card span {
padding: 8px 8px 8px 8px;
}

/* https://stackoverflow.com/questions/11552380/how-to-automatically-crop-and-center-an-image */
.medium-card span img {
width: 200px;
height: 200px;
object-fit: cover; /* https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit */
object-position: center; /* Center the image within the element */
min-height: 100%;
min-width: 100%;
}
```
Long story short. You can find the [demo](https://chienhsiang-hung.github.io/embed-medium-blog-on-website/) here and how it looks on my site([Hung, Chien-Hsiang (chienhsiang-hung.github.io)](https://chienhsiang-hung.github.io/#portfolio)).

## Scripts
- CS
	- [EmbeddingMedium.css](https://github.com/chienhsiang-hung/embed-medium-blog-on-website/blob/main/asset/cs/EmbeddingMedium.css)
- JS
	- [EmbeddingMedium.js](https://github.com/chienhsiang-hung/embed-medium-blog-on-website/blob/main/asset/js/EmbeddingMedium.js)

Put the scripts in the folder along with index.html
### CSS
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="asset/cs/EmbeddingMedium.css">
```
### JS
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="asset/js/EmbeddingMedium.js"></script>
```
### body
```html
<div>
	<!-- EmbeddingMedium -->
	<div class="row" id="jsonContent"></div>
	<div id="pagin"></div>
</div>
```
