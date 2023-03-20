$(function () {

    $('body').append(`
        <div id="mainContainer">
            <div id="brandingLogo"></div>
            <div id="primaryNav"></div>
            <div id="brandingOther">
            </div>
            <div class="row m-5">
                <div id="secondaryNav" class="col-2 container"></div>
                <div id="content" class="col-10"></div>
            </div>
            <div id="footer" class="d-flex p-2"></div>
        </div>
    `)
    .append(`
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"></script>
    `)


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