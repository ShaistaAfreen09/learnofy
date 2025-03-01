import express from 'express';
import passport from 'passport';
import User from '../models/User.js';

const router = express.Router();

// Get user profile
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);

// Update user profile
router.put(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { name } = req.body;
      
      // Find user and update
      const user = await User.findById(req.user._id);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      if (name) user.name = name;
      
      await user.save();
      
      res.json({
        message: 'Profile updated successfully',
        user
      });
    } catch (error) {
      console.error('Profile update error:', error);
      res.status(500).json({ message: 'Server error during profile update' });
    }
  }
);

// Change password
router.put(
  '/change-password',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      
      // Find user
      const user = await User.findById(req.user._id);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Check if user has a password (not Google OAuth user)
      if (!user.password) {
        return res.status(400).json({ 
          message: 'This account was created with Google. You cannot change the password.'
        });
      }
      
      // Verify current password
      const isMatch = await user.comparePassword(currentPassword);
      if (!isMatch) {
        return res.status(401).json({ message: 'Current password is incorrect' });
      }
      
      // Update password
      user.password = newPassword;
      await user.save();
      
      res.json({ message: 'Password changed successfully' });
    } catch (error) {
      console.error('Password change error:', error);
      res.status(500).json({ message: 'Server error during password change' });
    }
  }
);

export default router;