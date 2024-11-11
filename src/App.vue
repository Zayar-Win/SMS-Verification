<template>
  <div>
    <input type="tel" v-model="phoneNumber" placeholder="Phone Number">
    <button @click="sendVerificationCode" id="sing-in-button">Send Code</button>
    <input type="text" v-model="verificationCode" placeholder="Verification Code">
    <button @click="verifyCode">Verify Code Update</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import {  RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import auth from './firebase';
export default {
  setup() {
    const phoneNumber = ref('');
    const verificationCode = ref('');
    const appVerifier = ref(null)
    onMounted(() => {
      // Initialize RecaptchaVerifier only after component mounts
      appVerifier.value = new RecaptchaVerifier(auth,'sing-in-button', {
        size: 'invisible',
        callback: () => {
          console.log('reCAPTCHA verified');
        },
      });
    });
    let confirmationResult ;
    const sendVerificationCode = async () => {
      console.log(phoneNumber.value)
       confirmationResult = await signInWithPhoneNumber(auth, phoneNumber.value,appVerifier.value);
    };

    const verifyCode = async () => {
      try {
        const confirm =await confirmationResult.confirm( verificationCode.value);
        console.log(confirm)
        // User signed in successfully
      } catch (error) {
        console.error('Error verifying code:', error);
      }
    };

    return {
      phoneNumber,
      verificationCode,
      sendVerificationCode,
      verifyCode
    };
  }
}
</script>