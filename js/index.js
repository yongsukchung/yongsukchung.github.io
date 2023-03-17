$(function () {
    $("#primaryNav").load("../../common/primaryNav.html")
    $("#secondaryNav").load("secondaryNav.html")
    $('#footer').load('../../common/footer.html')
    // $('#brandingOther').load('images/personnelbranding.jpg')
    $('#pageContent').load('content.html');
    $('#primaryNav').on('click', '.nav-link', function (event) {

        $('.nav-link').removeClass('active');

        $(this).addClass('active');

        var href = $(this).attr('href');
        if (href == '/') return
        history.pushState(null, null, href);

        $('#secondaryNav').load(`${href}/secondaryNav.html`)
        $('#pageContent').load(`${href}/content.html`);

        event.preventDefault();
    });

})