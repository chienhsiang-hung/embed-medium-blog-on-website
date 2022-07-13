// contact https://chienhsiang-hung.github.io/ if you have any questions 

$(function () {
    /* Sometimes it's also useful to use window.innerWidth (not typically found on mobile devices) instead of screen width 
    when dealing with desktop browsers where the window size is often less than the device screen size. */
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    var mediumPromise = new Promise(function (resolve) {
        var $content = $('#jsonContent');
        var data = {rss: 'https://medium.com/feed/@hungchienhsiang'};

        // use http://jsonviewer.stack.hu/ to check json file easier
        $.get(
            'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hungchienhsiang',
            data,
            function (response) {
                if (response.status == 'ok') {
                    var display = '';
                    // let number of card responsive
                    var TotalCard = (width < 768) ? 5 : 8;
                    $.each(
                        response.items,
                        function (k, item) {
                            if ( [0, 3, 6].includes(k) ) {
                                display +=`
                                    <div class="mySlides slide-fade">
                                `;
                            };
                            display += `<div class="card medium-card mb-3 mx-auto mr-5" style="width: 20rem;">`;
                            var src = item["thumbnail"]; // use thumbnail url
                            display += `  <span>
                                            <img src="${src}" class="card-img-top" alt="Cover image">
                                          </span>`;
                            display += `  <div class="card-body">`;
                            display += `    <h5 class="card-title">${item.title}</h5>`;
                            
                            // add categories
                            display += '    <p>'
                            var categories = item["categories"];
							for (var i=0; i<categories.length; i++){
                            	display += `  <a href="#"><i>#${categories[i]}</i></a> &nbsp;`
                            }
							display += '    </p>'
                            
                            display += `    <a href="${item.link}" target="_blank" class="btn btn-outline-success" >Read More</a>`;
                            display += `  </div>
                                        </div>`;
                            if ( [2, 5, 8].includes(k)) {
                                display +=`
                                    </div>
                                `;
                            };
                            return k < TotalCard;
                        }
                    );
                    resolve($content.html(display));
                }
            }
        );
    });  
});