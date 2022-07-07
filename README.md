# embed-medium-blog-on-website
> This is a free and simple guide through that you can finally **embed your medium grid to your website by yourself** without worrying about your personal info being packed by 3rd party APIs.

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
```javascript
display += ' <p>'
var categories = item["categories"];
for (var i=0; i<categories.length; i++){
display += ` <a href="#"><i>#${categories[i]}</i></a> &nbsp;`
}
display += ' </p>'
```
