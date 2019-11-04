// take the value of the textarea and store it in a variable
// create a function that takes the value of the textarea and appends it underneath the other comments
// when the submit button is pressed, trigger the function that adds a new comment



    const comment = {};

    comment.commentText = $("textarea").val();
    comment.commenterName = $('input[type="text"]').val();

    comment.commentHtml = `
        <div class="comment">
            <div class="userImg">
                <img src="https://placebear.com/92/89">
            </div>
            <div class="userComment">
                <span class="postDate">Tuesday, November 21st, 2019 by ${comment.commenterName}</span>
                <p>${comment.commentText}</p>
            </div>
        </div>
    `;

    comment.init = function() {
        $("form").on("submit", function(event) {
            event.preventDefault();
            $(".commentsContainer").append(comment.commentHtml);
        });
    };

$(function() {
    comment.init();
});