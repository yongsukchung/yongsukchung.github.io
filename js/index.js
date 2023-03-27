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

    // Create row
    const row = document.createElement('div')
    row.className = 'row m-5'
    
    // Add secondary Nav
    const secondaryNav = document.createElement('div')
    secondaryNav.id = 'secondaryNav'
    secondaryNav.className = 'col-2 container'

    row.appendChild(secondaryNav)

    // Add content
    const content = document.createElement('div')
    content.id = 'content'
    content.className = 'col-10'
    
    row.appendChild(content)

    // Add row
    mainContainer.appendChild(row)
    
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

    let path = window.location.pathname.replace("index.html", "").split('/').filter(Boolean)
    // Add home to the path if not already present.
    if (path.length === 0) path.push('home')

    // Load secondary navigation bar
    $("#secondaryNav").load(`../../${path[0]}/secondaryNav.html`)

    path = path.join('/')

    // Add branding Image
    const brandingImage = document.createElement('img')

    brandingImage.src = '../../images/personnelbranding.jpg'
    brandingImage.alt = 'branding-banner'
    // Loading branding
    $("#brandingOther")
        .html(brandingImage)

    // Loading content
    $('#content').load(`../../${path}/content.html`)

    $('#primaryNav').on('click', '.nav-link', function (event) {
        let href = $(this).attr('href').split('/').filter(Boolean)[0]
        // prevents the default event if the href is not the same as the path
        if (href === path) event.preventDefault()
    })
})
