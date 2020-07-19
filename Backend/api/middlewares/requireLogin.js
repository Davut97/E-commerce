export default (req, res, next) => {
	/**
	 * Checks if a user is signed in by checking if one exists in the current cookie
	 * returns 401 status and an error message if not logged in
	 */
	if (!req.user) {
		return res.status(401).send({ error: "You must log in!" });
	}
	next();
};
