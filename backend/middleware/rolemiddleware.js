// middleware/roleMiddleware.js
function checkRole(role) {
    return (req, res, next) => {
      console.log(role,"role")
      console.log(req.user,'checking role')
      if (req.user.role !== role) {
        
        return res.status(403).json({ message: "Access denied" });
      }
      next();
    };
  }
  
  module.exports = { checkRole };
  