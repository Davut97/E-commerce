import express from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database";
import passport from "passport";
import cookieSession from "cookie-session";
import keys from "./config/keys";
import "./config/passport";
import authRoute from "./routes/authRoutes";

sequelize
	.authenticate()
	.then(() => console.log("database connected"))
	.catch((err) => console.log("Error: " + err));

const app = express();
//#region Express Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * Cookie options setup
 */
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // Keep Cookie for 30 days
		keys: [keys.cookieKey], // Key for cookie encryption
	})
);
app.use(passport.initialize());
app.use(passport.session());
//#endregion

//#region App Routes
authRoute(app);
// when a random route is inputed
app.get("*", (req, res) =>
	res.status(200).send({
		message: "Welcome to this API.",
	})
);
//#endregion

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server is running on PORT ${port}`);
});

export default app;
