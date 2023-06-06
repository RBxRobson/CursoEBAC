
$(document).ready(function () {
    $('.btn-add-task').click(function () {
        $('.task-container').slideDown();
    });

    $('#btn-close-list').click(function () {
        $('.task-container').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const addTask = $('#input-task').val();
        const novoItem = $('<li style="display: none" ></li>');
        $(`
            <div class="task-box">
                <p>${addTask}</p>
                <button id="btn-task-trash">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1500);
        $('#input-task').val('');
    });

    $(document).on('click', 'p', function () {
        $(this).toggleClass('markTask');
    });

    $(document).on('click', '#btn-task-trash', function () {
        $(this).parent('div').fadeOut(500);
    });
});


