

export const handleCookie = (req, res, next) => {

    if(req.cookies?.lastVisit) {
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString()
    }
     res.cookie('lastVisit', new Date().toISOString(), {
        maxAge: 1 * 1000 * 60
    })
    next()
}