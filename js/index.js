$(function () {
    $("#primaryNav").load("/components/common/primaryNav.html")
    $("#secondaryNav").load("/components/home/secondaryNav.html")
    $('#pageContent').load('pages/home.html');
    $('#primaryNav').on('click', 'ul li a', function (event) {
        event.preventDefault();

        var href = $(this).attr('href');

        $('#pageContent').load(`components/'${href}/page.html`);
        $('#secondaryNav').load(`components/${href}/secondaryNav.html`);
    });

})