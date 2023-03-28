$(function () {
    // Create main container
    const mainContainer = document.createElement('div')

    mainContainer.id = 'mainContainer'

    // Add branding Logo
    const brandingLogo = document.createElement('div')
    brandingLogo.id = 'brandingLogo'

    mainContainer.appendChild(brandingLogo)

    // Add primary Nav
    const primaryNav = document.createElement('div')
    primaryNav.id = 'primaryNav'

    mainContainer.appendChild(primaryNav)

    // Add branding Other
    const brandingOther = document.createElement('div')
    brandingOther.id = 'brandingOther'

    mainContainer.appendChild(brandingOther)

    // Add content
    const content = document.createElement('div')
    content.id = 'content'
    

    let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)

    if (path[0] === 'photos') {
        content.className = 'row m-5'
        mainContainer.appendChild(content)
    }
    else {
        content.className = 'col-10'
        // Create row
        const row = document.createElement('div')
        row.className = 'row m-5'

        // Add secondary Nav
        const secondaryNav = document.createElement('div')
        secondaryNav.id = 'secondaryNav'
        secondaryNav.className = 'col-2 container'

        row.appendChild(secondaryNav)


        row.appendChild(content)

        // Add row
        mainContainer.appendChild(row)
    }



    // Add footer
    const footer = document.createElement('div')
    footer.id = 'footer'
    footer.className = 'd-flex p-2'

    mainContainer.appendChild(footer)

    // Add mainContainer
    $('body').append(mainContainer)

    // Add Bootstrap Script
    const bootstrapScript = document.createElement('script')

    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
    bootstrapScript.integrity = 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'
    bootstrapScript.crossOrigin = 'anonymous'

    $('body').append(bootstrapScript)

    // Add css theme
    const theme = window.localStorage.getItem('theme') || 'dark-lumen'
    const themeCss = document.createElement('link')

    themeCss.href = `../../css/${theme}-bootstrap.min.css`
    themeCss.rel = 'stylesheet'
    themeCss.id = 'theme-css'

    $('head').append(themeCss)

    // Load footer
    $('#footer').load('../../common/footer.html')

    // Load primary navigation bar
    $("#primaryNav").load("../../common/primaryNav.html", () => {
        let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
        $(`#nav-link-${path[0]}`).addClass('active')
    })

    // Add home to the path if not already present.
    if (path.length === 0) path.push('home')

    // Load secondary navigation bar
    $("#secondaryNav").load(`../../${path[0]}/secondaryNav.html`)

    path = path.join('/')

    // Loading branding
    $("#brandingOther").load('../../common/brandingOther.html')

    // Loading content
    $('#content').load(`../../${path}/content.html`)

    $('#primaryNav').on('click', '.nav-link', function (event) {
        let href = $(this).attr('href').split('/').filter(Boolean)[0]
        // prevents the default event if the href is not the same as the path
        if (href === path) event.preventDefault()
    })
})
