$(function () {

    // Load theme css
    let theme = window.localStorage.getItem('theme') || 'superhero';
    $('head').append(`
        <link href="../../css/${theme}-bootstrap.min.css" rel="stylesheet" id="theme-css" />
    `)

    // Load footer
    $('#footer').load('../../common/footer.html')
    
    // Load primary navigation bar
    $("#primaryNav").load("../../common/primaryNav.html", () => {
        let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
        $(`#nav-link-${path[0]}`).addClass('active')
    })

    let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
    if (path.length === 0) path.push('home')
    
    // Load secondary navigation bar
    $("#secondaryNav").load(`../../${path[0]}/secondaryNav.html`)
    
    path = path.join('/')
    // Loading branding
    $("#brandingOther")
    .html('<img src="../../images/personnelbranding.jpg" alt="brading-banner"/>')

    // Loading content
    $('#content').load(`../../${path}/content.html`)

    // Prevent reload in when navigate to same page
    $('#primaryNav').on('click', '.nav-link', function (event) {
        let href = $(this).attr('href').split('/').filter(Boolean)[0]
        if (href === path) event.preventDefault()
    })
})