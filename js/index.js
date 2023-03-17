$(function () {
    $("#primaryNav").load("../../common/primaryNav.html")
    $("#secondaryNav").load("secondaryNav.html")
    $('#footer').load('../../common/footer.html')
    // $('#brandingOther').load('images/personnelbranding.jpg')
    $('#pageContent').load('content.html');
    // $('#primaryNav').on('click', '.nav-link', function (event) {
    //     event.preventDefault()

    //     var href = $(this).attr('href')

    //     $('#pageContent').load(`components/${href}/page.html`)
    //     $('#secondaryNav').load(`components/${href}/secondaryNav.html`)
    // });
    
})