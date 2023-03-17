$(function () {
    let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
    if (path.length === 0) path = ['home']
    path = path.join('/')
    $("#primaryNav").load("../../common/primaryNav.html")
    $("#secondaryNav").load(`../../${path}/secondaryNav.html`)
    $("#brandingOther").html('<img src="../../images/personnelbranding.jpg" style="height:81px" />')
    $('#footer').load('../../common/footer.html')
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