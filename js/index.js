$(function () {
    let path = window.location.pathname.replace("index.html", "")
    console.log(path)
    $("#primaryNav").load("../../common/primaryNav.html")
    $("#secondaryNav").load(`../../${path}/secondaryNav.html`)
    $('#footer').load('../../common/footer.html')
    // $('#brandingOther').load('images/personnelbranding.jpg')
    $('#content').load(`../../${path}/content.html`);
    $('#primaryNav').on('click', '.nav-link', function (event) {

        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        let href = $(this).attr('href');
        if (href == '/') return
        history.pushState(null, null, href);

        $('#secondaryNav').load(`../../${href}/secondaryNav.html`)
        $('#content').load(`../../${href}/content.html`);

        event.preventDefault();
    });

})