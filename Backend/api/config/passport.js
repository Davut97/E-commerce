import passport from "passport";
import User from "../Entities/User";
import { Strategy as LocalStrategy } from "passport-local";
// Using the user let passport create a cookie for user
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// opposite of serlize to get the user from cookie
passport.deserializeUser((id, done) => {
	User.findByPk(id).then((user) => {
		done(null, user);
	});
});

/**
 * Create passport startegy.
 * takes an options parameter that specifies what is the user identifier
 * takes a callback function as parameter
 */
passport.use(
	new LocalStrategy(
		{ usernameField: "email" },
		async (email, password, done) => {
			// Try to get User
			const user = await User.findOne({ where: { email } });
			// No User
			if (!user) {
				return done(null, false);
			}
			// Need to hash passsport and verfiy it!
			if (user.password !== password) {
				return done(null, false);
			}
			return done(null, user);
		}
	)
);
