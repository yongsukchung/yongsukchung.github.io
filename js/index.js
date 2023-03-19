$(function () {

    let themeInLocalStorage = window.localStorage.getItem('theme')
    let theme = (themeInLocalStorage === null) ? 'superhero' : themeInLocalStorage
    $('head').append(`
    <link href="../../css/${theme}-bootstrap.min.css" rel="stylesheet" id="theme-css" />
    `)
    .append(`
        <title>Lab</title>
    `)

    $('#footer').load('../../common/footer.html')
    let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
    
    if (path.length === 0) path.push('home')

    $("#primaryNav").load("../../common/primaryNav.html", () => {
        let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
        $(`#nav-link-${path[0]}`).addClass('active')
    })

    path = path.join('/')
    $("#secondaryNav").load(`../../${path}/secondaryNav.html`)
    $("#brandingOther").addClass('container-fluid')
    $("#brandingOther").html('<img src="../../images/personnelbranding.jpg" alt="brading-banner"/>')
    $('#content').load(`../../${path}/content.html`)
    $('#primaryNav').on('click', '.nav-link', function (event) {
        let href = $(this).attr('href').split('/').filter(Boolean)[0]
        if (href === path) event.preventDefault()
    })
})