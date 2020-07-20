import passport from "passport";
import requireLogin from "../middlewares/requireLogin";
export default (app) => {
	/**
	 * params: {email, password}
	 * returns an auto assigned cookie and 200 status
	 * if auth fails (No User with email, or password wrong) returns 401
	 * if bad request is sent, 400 is returned
	 */
	app.post("/login", passport.authenticate("local"), function (req, res) {
		console.log(`Login Successful? ${req.user}`);
		return res.status(200).json({ success: `logged in ${req.user.id}` });
	});
	/**
	 * Deletes the cookie assigned to user and redirects to homepage
	 * if no user is signed in returns 401
	 */
	app.get("/logout", requireLogin, (req, res) => {
		req.logout();
		res.redirect("/");
	});
	/**
	 * A sample route to test authentication. Uses requireLogin middleware.
	 * See middlewares for further info
	 */
	app.get("/test", requireLogin, (req, res) => {
		console.log("Authed");
		return res.status(200).json({ success: "You are actually logged in!" });
	});
};
