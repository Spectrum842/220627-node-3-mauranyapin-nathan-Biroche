export const LogoutController = (req, res) => {
    
    req.session.destroy()
    res.redirect('/connexion')

}