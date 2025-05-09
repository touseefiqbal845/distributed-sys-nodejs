exports.getVerificationEmail = (verificationCode) => {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #2d89ef;">Verify Your Email</h2>
        <p>Thank you for signing up with Astra Protocol.</p>
        <p>Your verification code is: <strong style="font-size: 18px;">${verificationCode}</strong></p>
        <p>Please enter this code in the app to verify your account.</p>
        <p>Best Regards,</p>
        <p><strong>Astra Protocol Team</strong></p>
      </div>
    `;
  };
  