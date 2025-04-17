
export const auth = (req, res, next) => {
        const {email} = req.session ;
        if(!email) {
           return res.redirect("/login")
        }
    next()
}